import * as React from "react";
import { SearchBarComponent } from "./components/searchBar";

interface Props {
  searchValue: string;
  searchResult: any;  
  onSearchClick: () => void;
  onSearchUpdate: (value: string) => void;
}

class SearchPageComponent extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { searchResult } = this.props;
    return (
      <div>
        <SearchBarComponent
          value={this.props.searchValue}
          onSearchUpdate={this.props.onSearchUpdate}
          onSearchClick={this.props.onSearchClick}
        />
        <p>{searchResult ? JSON.stringify(searchResult) : null}</p>
      </div>
    );
  }
}

export { SearchPageComponent };