import * as React from "react";
import { SearchPageComponent } from "./searchPage.component";
import { ItemCollection, FacetCollection, FilterCollection, Filter } from "./viewModel";
import { Service } from "./serviceModel";
import { registeredServices } from "./services";


interface State {
  candidateSearchValue: string;
  currentSearchValue: string;
  activeService: Service;
  itemCollection: ItemCollection;
  facetCollection: FacetCollection;
  filterCollection: FilterCollection;
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
      drawerShow: true, // TODO: Hide it by default
    };
  }

  private handleDrawerClose = () => {
    this.setState({
      ...this.state,
      drawerShow: false,
    });
  }

  private handleDrawerToggle = () => {
    this.setState({
      ...this.state,
      drawerShow: !this.state.drawerShow,
    });
  }

  private handleMenuClick = () => {
    this.handleDrawerToggle();
  }

  private handleSearchUpdate = (newValue: string) => {
    this.setState({
      ...this.state,
      candidateSearchValue: newValue,
    });
  }

  private handleSearchSubmit = () => {
    // Run search but reset filters intentionally. No filters for a new search.
    this.setState({
      ...this.state,
      currentSearchValue: this.state.candidateSearchValue,
      filterCollection: null,
    });
  }

  private handleFilterUpdate = (newFilter: Filter) => {
    const newFilterCollection = this.state.filterCollection ?
      [...this.state.filterCollection.filter(f => f.fieldId !== newFilter.fieldId), newFilter]
      : [newFilter];
    this.setState({
      ...this.state,
      filterCollection: newFilterCollection,
    });
  }

  private getFilterExpression = (filterCollection: FilterCollection) => {
    if (filterCollection && filterCollection.length) {
      const expression = filterCollection.map(f => f.generateExpression()).filter(f => f).join(" and ");
      return expression;
    } else {
      return "";
    }    
  }

  private runSearch = (value: string, filterCollection: FilterCollection) => {
    this.state.activeService.search(value, this.getFilterExpression(filterCollection))
      .then(searchOutput => {
        this.setState({
          ...this.state,
          itemCollection: searchOutput.itemCollection,
          facetCollection: searchOutput.facetCollection,
        })
      })
      .catch(e => { throw Error(e) });
  }

  public componentDidUpdate(prevProps, prevState) {
    if ((this.state.currentSearchValue !== prevState.currentSearchValue) || 
      (this.state.filterCollection !== prevState.filterCollection)) {
        this.runSearch(this.state.currentSearchValue, this.state.filterCollection);
    }
  }

  public render() {
    return (
      <div>
        <SearchPageComponent
          activeService={this.state.activeService}
          searchValue={this.state.candidateSearchValue}
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
