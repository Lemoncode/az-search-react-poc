import * as React from "react";
import * as throttle from 'lodash.throttle';
import { SearchPageComponent } from "./searchPage.component";
import {
  ItemCollection,
  FacetCollection,
  FilterCollection,
  Filter,
  SuggestionCollection,
} from "./viewModel";
import { Service } from "./serviceModel";
import { registeredServices } from "./services";

interface State {
  candidateSearchValue: string;
  currentSearchValue: string;
  activeService: Service;
  itemCollection: ItemCollection;
  facetCollection: FacetCollection;
  filterCollection: FilterCollection;
  suggestionCollection: SuggestionCollection;
  drawerShow: boolean;
}

class SearchPageContainer extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      candidateSearchValue: "",
      currentSearchValue: null,
      activeService: registeredServices.movieService,
      itemCollection: null,
      facetCollection: null,
      filterCollection: null,
      suggestionCollection: null,
      drawerShow: true, // TODO: Hide it by default
    };
  }

  private handleDrawerClose = () => {
    this.setState({
      ...this.state,
      drawerShow: false,
    });
  };

  private handleDrawerToggle = () => {
    this.setState({
      ...this.state,
      drawerShow: !this.state.drawerShow,
    });
  };

  private handleMenuClick = () => {
    this.handleDrawerToggle();
  };

  private handleSearchUpdate = (newValue: string) => {
    this.setState({
      ...this.state,
      candidateSearchValue: newValue,
    });
  };

  private handleSearchSubmit = () => {
    // Run search but reset filters/suggestions intentionally.
    // No filters or suggestion list for a new search should appear.
    this.setState({
      ...this.state,
      currentSearchValue: this.state.candidateSearchValue,
      filterCollection: null,
      suggestionCollection: null,
    });
  };

  private handleFilterUpdate = (newFilter: Filter) => {
    const newFilterCollection = this.state.filterCollection
      ? [...this.state.filterCollection.filter(f => f.fieldId !== newFilter.fieldId), newFilter]
      : [newFilter];
    this.setState({
      ...this.state,
      filterCollection: newFilterCollection,
    });
  };

  private getFilterExpression = (filterCollection: FilterCollection) => {
    if (filterCollection && filterCollection.length) {
      console.log(filterCollection);
      const expression = filterCollection
        .filter(f => f.store)
        .map(f => `(${f.generateExpression()})`)
        .join(" and ");
      return expression;
    } else {
      return null;
    }
  };

  private runSearch = (value: string, filterCollection: FilterCollection) => {
    this.state.activeService
      .search(value, this.getFilterExpression(filterCollection))
      .then(searchOutput => {
        this.setState({
          ...this.state,
          itemCollection: searchOutput.itemCollection,
          facetCollection: searchOutput.facetCollection,
        });
      })
      .catch(e => {
        throw Error(e);
      });
  };

  private runSuggestions = throttle((value: string) => {
    if(value.length >= 3) {
      this.state.activeService
        .suggest(value)
        .then(suggestionOutput => {
          this.setState({
            ...this.state,
            suggestionCollection: suggestionOutput.suggestionCollection,
          });
        })
        .catch(e => {
          throw Error(e);
        });
    }    
  }, 250, {leading: true, trailing: true});
  

  public componentDidUpdate(prevProps, prevState) {
    if (
      this.state.currentSearchValue !== prevState.currentSearchValue ||
      this.state.filterCollection !== prevState.filterCollection
    ) {
      this.runSearch(this.state.currentSearchValue, this.state.filterCollection);
    } else if (this.state.candidateSearchValue !== prevState.candidateSearchValue) {
      this.runSuggestions(this.state.candidateSearchValue);
    }
  }

  public render() {
    return (
      <div>
        <SearchPageComponent
          activeService={this.state.activeService}
          searchValue={this.state.candidateSearchValue}
          suggestionCollection={this.state.suggestionCollection}
          onSearchUpdate={this.handleSearchUpdate}
          onSearchSubmit={this.handleSearchSubmit}
          filterCollection={this.state.filterCollection}
          onFilterUpdate={this.handleFilterUpdate}
          itemCollection={this.state.itemCollection}
          facetCollection={this.state.facetCollection}
          onMenuClick={this.handleMenuClick}
          drawerShow={this.state.drawerShow}
          onDrawerClose={this.handleDrawerClose}
        />
      </div>
    );
  }
}

export { SearchPageContainer };
