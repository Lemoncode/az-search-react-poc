import * as React from "react"
import Button from "material-ui/Button";
import Search from "material-ui-icons/Search";
import TextField from "material-ui/TextField";
import { AutocompleteInputComponent } from "./autocomplete.component";
import { SuggestionCollection } from "../../viewModel";
import { cnc } from "../../../../util";

const style = require("./search.style.scss");


interface Search {
  value: string;
  onSearchSubmit: () => void;
  onSearchUpdate: (value: string) => void;
  suggestionCollection?: SuggestionCollection;
  className?: string;
}

const handleOnSearchUpdate = (props: Search) => (newValue: string) => {
  props.onSearchUpdate(newValue)
}

const captureEnter = (props) => (e) => {
  if (e.key === "Enter") {
    props.onSearchSubmit();
  }
}

const SearchComponent: React.StatelessComponent<Search> = (props) => {
  return (
    <div className={cnc(props.className, style.container)}>
      <AutocompleteInputComponent className={style.input}
        type="search"
        name="searchBox"
        id="searchBox"
        placeholder="Search a movie ..."
        searchValue={props.value}
        suggestionCollection={props.suggestionCollection}
        onSearchUpdate={handleOnSearchUpdate(props)}
        onKeyPress={captureEnter(props)}
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