import * as React from "react";
import { BarComponent } from "./components/bar";
import { DrawerComponent } from "./components/drawer";
import { SearchComponent } from "./components/search";
import { ItemViewComponent } from "./components/item";
import { FacetViewComponent } from "./components/facets";
import { ItemCollection, FacetCollection } from "./viewModel";

const style = require("./searchPage.style.scss");

interface Props {
  drawerShow: boolean;
  searchValue: string;
  itemCollection: ItemCollection;
  facetCollection: FacetCollection;
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
      <div className={style.pageContainer}>
        <DrawerComponent className={style.drawerContainer}
          show={this.props.drawerShow}
          onClose={this.props.onDrawerClose}
        >
          <SearchComponent
            value={this.props.searchValue}
            onSearchClick={this.props.onSearchClick}
            onSearchUpdate={this.props.onSearchUpdate}
          />
          <FacetViewComponent facets={this.props.facetCollection} />
        </DrawerComponent>
        <main className={style.mainContainer}>
          <BarComponent
            value={this.props.searchValue}
            onSearchUpdate={this.props.onSearchUpdate}
            onSearchClick={this.props.onSearchClick}
            onMenuClick={this.props.onMenuClick}
          />
          <ItemViewComponent items={this.props.itemCollection} />
        </main>
      </div>
    );
  }
}

export { SearchPageComponent };