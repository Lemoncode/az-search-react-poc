import * as React from "react"
import { SearchComponent } from "./searchComponent";

interface Search {
  inline?: boolean;
  onSearch?: (value: string) => void;
}

interface State {
  searchValue: string;
}

class SearchContainer extends React.Component<Search, State> {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: "*",
    }
  }
  
  private handleSearchUpdate = (newValue) => {
    this.setState({
      ...this.state,
      searchValue: newValue,
    });
  }

  private handleSearchClick = () => {
    this.props.onSearch(this.state.searchValue);
  }

  public render() {
    return (
      <SearchComponent
        inline={this.props.inline}
        value={this.state.searchValue}
        onChange={this.handleSearchUpdate}
        onClick={this.handleSearchClick}
      />
    );
  }
}

export { SearchContainer };