import * as React from "react"
import { ButtonComponent } from "../button";

interface Search {
  inline?: boolean;
  value: string;
  onSearchClick: () => void;
  onSearchUpdate: (value: string) => void;
}

const SearchComponent: React.StatelessComponent<Search> = (props) => {
  return (
    <form className={props.inline ? "form-inline" : ""}>
      <input className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={props.value}
        onChange={event => props.onSearchUpdate(event.target.value)}
      />
      <ButtonComponent onClick={props.onSearchClick}>Search</ButtonComponent>
    </form>
  );
}

export { SearchComponent };