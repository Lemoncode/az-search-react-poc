import * as React from "react";
import { SearchPageComponent } from "./searchPageComponent";
import { azApi } from "../../api";

interface State {
  searchResult: any;
}

class SearchPageContainer extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      searchResult: null,
    };
  }

  public componentDidMount() {
    azApi
      .setSearch("star wars")
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
    const { searchResult } = this.state;
    return (
      <div>
        <SearchPageComponent searchResult={searchResult}/>
      </div>
    );    
  }
}

export { SearchPageContainer };
