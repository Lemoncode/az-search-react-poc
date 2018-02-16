import * as React from "react"
import Button from "material-ui/Button";
import Search from "material-ui-icons/Search";
import TextField from "material-ui/TextField";
import { cnc } from "../../../../util";

const style = require("./search.style.scss");


interface Search {
  value: string;
  onSearchClick: () => void;
  onSearchUpdate: (value: string) => void;
  className?: string;
}

const SearchComponent: React.StatelessComponent<Search> = (props) => {
  return (
    <div className={cnc(props.className, style.container)}>
      <Search />
      <div className={style.searchBoxContainer}>
        <TextField
          type="search"
          name="searchBox"
          id="searchBox"
          placeholder="Type here..."
          value={props.value}
          onChange={event => props.onSearchUpdate(event.target.value)}
          fullWidth
          autoFocus
        />
      </div>
      <Button
        variant="raised"
        color="secondary"
        onClick={props.onSearchClick}
      >
        Search
      </Button>
    </div>
  );
}

export { SearchComponent };