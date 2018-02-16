import * as React from "react";
import { SearchPageComponent } from "./searchPage.component";
import {
  ItemCollection,
  MapperToItem,
  FacetCollection,
} from "./viewModel";
import { mapMovieToItem, movieFacetCollection } from "./configApi";
import { azApi } from "../../api";
import Reboot from "material-ui/Reboot";


interface State {
  drawerShow: boolean;
  searchValue: string;
  itemCollection: ItemCollection;
  itemMapper: MapperToItem;
  facetCollection: FacetCollection;  
}

class SearchPageContainer extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      drawerShow: true, // TODO: Hide it by default
      searchValue: "",
      itemCollection: [],
      itemMapper: mapMovieToItem,
      facetCollection: movieFacetCollection,      
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

  private handleSearchClick = () => {
    this.runSearch(this.state.searchValue);
  }

  private parseItemsFromResponse = (response): ItemCollection => {
    if (response && response.value) {
      return response.value.map(item => {
        return this.state.itemMapper(item);
      })
    } else {
      return null;
    }
  }

  private parseFacetsFromResponse = (response): FacetCollection => {
    return [];
  }

  private runSearch = (value: string) => {
    azApi
      .setSearch(value)
      .setFacets(this.state.facetCollection.map(facet => facet.id))
      .run()
      .then(response => {
        this.setState({
          ...this.state,
          itemCollection: this.parseItemsFromResponse(response),
        });
      })        
      .catch(e => console.log(`AzApi error: ${e}`))
  }

  public render() {
    return (
      <div>
        <Reboot/>
        <SearchPageComponent
          drawerShow={this.state.drawerShow}
          onDrawerClose={this.handleDrawerClose}
          searchValue={this.state.searchValue}
          itemCollection={this.state.itemCollection}
          facetCollection={this.state.facetCollection}
          onSearchUpdate={this.handleSearchUpdate}
          onSearchClick={this.handleSearchClick}
          onMenuClick={this.handleMenuClick}
        />
      </div>
    );    
  }
}

export { SearchPageContainer };
