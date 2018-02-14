import * as React from "react";
import { SearchBarComponent } from "./components/searchBar";
import { ResultGridComponent } from "./components/resultGrid";
import { activeMapper } from "../../model";
const styles = require("./searchPage.scss");

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

  private mapResult = (result) => {
    if (result && result.value) {
      return result.value.map(item => {
        return activeMapper(item);
      })
    } else {
      return null;
    }
  }

  public render() {
    const mappedItems = this.mapResult(this.props.searchResult);
    return (
      <div className={styles.container}>
        <SearchBarComponent
          value={this.props.searchValue}
          onSearchUpdate={this.props.onSearchUpdate}
          onSearchClick={this.props.onSearchClick}
        />
        <ResultGridComponent items={mappedItems} />
      </div>
    );
  }
}

export { SearchPageComponent };