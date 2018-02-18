import * as React from "react";
import { SearchPageComponent } from "./searchPage.component";
import { ItemCollection, FacetCollection, FilterCollection, Filter } from "./viewModel";
import { Service } from "./serviceModel";
import { registeredServices } from "./services";


interface State {
  searchValue: string;
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
      searchValue: "",
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
      searchValue: newValue,
    });
  }

  private handleSearchSubmit = () => {    
    // Run search but reset filters intentionally. No filters for a new search.
    this.runSearch(this.state.searchValue, []);
  }

  private handleFilterUpdate = (newFilter: Filter) => {
    const newFilterCollection = [...this.state.filterCollection
      .filter(f => f.id !== newFilter.id), newFilter];
    this.runSearch(this.state.searchValue, newFilterCollection);
  }

  private getFilterExpression = (filterCollection: FilterCollection) => {
    return ""; // TODO implementation
  }

  private runSearch = (value: string, filterCollection: FilterCollection) => {
    this.state.activeService.search(value, this.getFilterExpression(filterCollection))
      .then(searchOutput => {
        this.setState({
          ...this.state,
          itemCollection: searchOutput.itemCollection,
          facetCollection: searchOutput.facetCollection,
          filterCollection: filterCollection,
        })
      })
      .catch(e => { throw Error(e) });
  }

  public render() {
    return (
      <div>
        <SearchPageComponent
          activeService={this.state.activeService}
          searchValue={this.state.searchValue}
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
