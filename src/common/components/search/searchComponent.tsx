import * as React from "react"
import { ButtonComponent } from "../button";

interface Search {
  inline?: boolean;
  value: string;
  onClick: () => void;
  onChange: (value: string) => void;
}

const SearchComponent: React.StatelessComponent<Search> = (props) => {
  return (
    <form className={props.inline ? "form-inline" : ""}>
      <input className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
      />
      <ButtonComponent onClick={props.onClick}>Search</ButtonComponent>
    </form>
  );
}

export { SearchComponent };