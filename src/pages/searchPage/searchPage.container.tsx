import * as React from "react";
import { SearchPageComponent } from "./searchPage.component";
import { ItemCollection, FacetCollection,} from "./viewModel";
import { Service } from "./serviceModel";
import { registeredServices } from "./services";


interface State {
  drawerShow: boolean;
  searchValue: string;
  activeService: Service;
  itemCollection: ItemCollection;
  facetCollection: FacetCollection;  
}

class SearchPageContainer extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      drawerShow: true, // TODO: Hide it by default
      searchValue: "",
      activeService: registeredServices.movieService,
      itemCollection: null,      
      facetCollection: null,
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

  private handleSearchUpdate = (newValue) => {
    this.setState({
      ...this.state,
      searchValue: newValue,
    });
  }

  private handleSearchSubmit = () => {    
    this.runSearch(this.state.searchValue)
      .then(searchOutput => {
        this.setState({
          ...this.state,
          itemCollection: searchOutput.itemCollection,
          facetCollection: searchOutput.facetCollection,
        })
      })
      .catch(e => { throw Error(e) });
  }

  private runSearch = async (value: string) => {
    return await this.state.activeService.search(value);
  }

  public render() {
    return (
      <div>
        <SearchPageComponent
          activeService={this.state.activeService}
          drawerShow={this.state.drawerShow}
          onDrawerClose={this.handleDrawerClose}
          searchValue={this.state.searchValue}
          itemCollection={this.state.itemCollection}
          facetCollection={this.state.facetCollection}
          onSearchUpdate={this.handleSearchUpdate}
          onSearchSubmit={this.handleSearchSubmit}
          onMenuClick={this.handleMenuClick}
        />
      </div>
    );    
  }
}

export { SearchPageContainer };
