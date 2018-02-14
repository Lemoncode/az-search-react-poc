import * as React from "react";
import { SearchPageComponent } from "./searchPageComponent";
import { azApi } from "../../api";

interface State {
  searchValue: string;
  searchResult: any;
}

class SearchPageContainer extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      searchResult: null,
    };
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
          searchValue={this.state.searchValue}
          searchResult={this.state.searchResult}
          onSearchUpdate={this.handleSearchUpdate}
          onSearchClick={this.handleSearchClick}
        />
      </div>
    );    
  }
}

export { SearchPageContainer };
