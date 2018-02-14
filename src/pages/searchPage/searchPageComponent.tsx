import * as React from "react";


interface Props {
  searchResult: any;
}

class SearchPageComponent extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { searchResult } = this.props;
    return (
      <div>
        <h2>Search Page</h2>
        <h3>Results:</h3>
        <p>{searchResult ? JSON.stringify(searchResult) : null}</p>
      </div>
    );
  }
}

export { SearchPageComponent };