import * as React from "react"
import { BarComponent } from "../../../../common/components/bar";
import { SearchComponent } from "../../../../common/components/search";
const styles = require("./searchBar.scss");


interface SearchBar {
  value: string;
  onSearchClick: () => void;
  onSearchUpdate: (value: string) => void;
}

export const SearchBarComponent: React.StatelessComponent<SearchBar> = (props) => {
  return (
    <div className={styles.container}>
      <BarComponent className={styles.searchBar}>
        <h3 className="navbar-brand">Search Page</h3>
        <SearchComponent inline
          value={props.value}
          onSearchClick={props.onSearchClick}
          onSearchUpdate={props.onSearchUpdate}
        />
      </BarComponent>
    </div>    
  )
}