import * as React from "react";
import { SearchPageComponent } from "./searchPageComponent";
import { azApi } from "../../api";

interface State {
  searchValue: string;
  searchResult: any;
  drawerShow: boolean;
}

class SearchPageContainer extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      searchResult: null,
      drawerShow: true, // TODO: Hide it by default
    };
  }

  private handleDrawerClose = () => {
    this.setState({
      ...this.state,
      drawerShow: false,
    });
  }

  private handleMenuClick = () => {
    this.setState({
      ...this.state,
      drawerShow: true,
    });
  }

  private handleSearchUpdate = (newValue) => {
    this.setState({
      ...this.state,
      searchValue: newValue,
    });
  }

  private handleSearchClick = () => {
    azApi
      .setSearch(this.state.searchValue)
      .run()
      .then(response => {
        this.setState({
          ...this.state,
          searchResult: response,
        });
      })        
      .catch(e => console.log(`AzApi error: ${e}`))
  }

  public render() {
    return (
      <div>
        <SearchPageComponent
          drawerShow={this.state.drawerShow}
          onDrawerClose={this.handleDrawerClose}
          searchValue={this.state.searchValue}
          searchResult={this.state.searchResult}
          onSearchUpdate={this.handleSearchUpdate}
          onSearchClick={this.handleSearchClick}
          onMenuClick={this.handleMenuClick}
        />
      </div>
    );    
  }
}

export { SearchPageContainer };
