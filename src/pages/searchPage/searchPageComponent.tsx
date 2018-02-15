import * as React from "react";
import { DrawerComponent } from "./components/drawer";
import { SearchComponent } from "./components/search";
import { BarComponent } from "./components/bar";
import { ResultGridComponent } from "./components/resultGrid";
import { activeMapper } from "./viewModel";

const styles = require("./searchPage.scss");

interface Props {
  searchValue: string;
  searchResult: any;  
  onSearchClick: () => void;
  onSearchUpdate: (value: string) => void;
  drawerShow: boolean;
  onDrawerClose: () => void;
  onMenuClick: () => void;
}

class SearchPageComponent extends React.Component<Props, {}> {
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
      <div className={styles.pageContainer}>
        <DrawerComponent 
          show={this.props.drawerShow}
          onClose={this.props.onDrawerClose}
        >
          <SearchComponent
            value={this.props.searchValue}
            onSearchClick={this.props.onSearchClick}
            onSearchUpdate={this.props.onSearchUpdate}
          />
        </DrawerComponent>
        <main className={styles.mainContainer}>
          <BarComponent
            value={this.props.searchValue}
            onSearchUpdate={this.props.onSearchUpdate}
            onSearchClick={this.props.onSearchClick}
            onMenuClick={this.props.onMenuClick}
          />
          {JSON.stringify(mappedItems)}
          {/* <ResultGridComponent items={mappedItems} /> */}
        </main>
      </div>
    );
  }
}

export { SearchPageComponent };