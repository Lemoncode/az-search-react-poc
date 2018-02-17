import * as React from "react"
import Button from "material-ui/Button";
import Search from "material-ui-icons/Search";
import TextField from "material-ui/TextField";
import { cnc } from "../../../../util";

const style = require("./search.style.scss");


interface Search {
  value: string;
  onSearchSubmit: () => void;
  onSearchUpdate: (value: string) => void;
  className?: string;
}

const captureEnter = (props) => (e) => {
  if (e.key === "Enter") {
    props.onSearchSubmit();
  }
}

const SearchComponent: React.StatelessComponent<Search> = (props) => {
  return (
    <div className={cnc(props.className, style.container)}>
      <TextField
        type="search"
        name="searchBox"
        id="searchBox"
        placeholder="Search..."
        value={props.value}
        onChange={event => props.onSearchUpdate(event.target.value)}
        onKeyPress={captureEnter(props)}
        fullWidth
        autoFocus
      />
      <Button classes={{root: style.button}}
        variant="raised"
        size="small"
        color="secondary"
        onClick={props.onSearchSubmit}
      >
        <Search />
      </Button>
    </div>
  );
}

export { SearchComponent };