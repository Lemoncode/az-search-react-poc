import * as React from "react";
import { DrawerComponent } from "./components/drawer";
import { SearchComponent } from "./components/search";
import { FacetListComponent } from "./components/facets";
import { BarComponent } from "./components/bar";
import { GridComponent } from "./components/grid";
import { ItemCollection, FacetCollection } from "./viewModel";

const styles = require("./searchPage.scss");

interface Props {
  drawerShow: boolean;
  searchValue: string;
  itemCollection: ItemCollection;
  facetCollectionn: FacetCollection;
  onSearchClick: () => void;
  onSearchUpdate: (value: string) => void;
  onDrawerClose: () => void;
  onMenuClick: () => void;
}

class SearchPageComponent extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.pageContainer}>
        <DrawerComponent className={styles.drawerContainer}
          show={this.props.drawerShow}
          onClose={this.props.onDrawerClose}
        >
          <SearchComponent
            value={this.props.searchValue}
            onSearchClick={this.props.onSearchClick}
            onSearchUpdate={this.props.onSearchUpdate}
          />
          <FacetListComponent facets={this.props.facetCollectionn} />
        </DrawerComponent>
        <main className={styles.mainContainer}>
          <BarComponent
            value={this.props.searchValue}
            onSearchUpdate={this.props.onSearchUpdate}
            onSearchClick={this.props.onSearchClick}
            onMenuClick={this.props.onMenuClick}
          />
          <GridComponent items={this.props.itemCollection} />
        </main>
      </div>
    );
  }
}

export { SearchPageComponent };