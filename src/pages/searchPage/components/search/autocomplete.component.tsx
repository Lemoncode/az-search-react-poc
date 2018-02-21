import * as React from "react";
import { withStyles } from "material-ui/styles";
import TextField, { TextFieldProps } from "material-ui/TextField";
import Paper from "material-ui/Paper";
import { cnc } from "../../../../util";
import { MenuItem } from "material-ui/Menu";
import Downshift from "downshift";
import { SuggestionCollection, Suggestion } from "../../viewModel";

const style = require("./autocomplete.style.scss");

interface AutocompleteInput {
  type: string;
  name: string;
  id: string;
  searchValue: string;
  onSearchUpdate: (newValue: string) => void;
  onKeyPress?: (event) => void;
  suggestionCollection?: SuggestionCollection;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
}

const handleOnChange = (props: AutocompleteInput) => event => {
  props.onSearchUpdate(event.target.value);
};

const renderInput = (props, innerProps) => {
  return (
    <TextField
      type={props.type}
      name={props.name}
      id={props.id}
      value={props.searchValue}
      onChange={handleOnChange(props)}
      onKeyPress={props.onKeyPress}
      placeholder={props.placeholder || "Search ..."}
      autoFocus
      fullWidth
      {...innerProps}
    />
  );
};

const renderSuggestionItem = (suggestion: Suggestion, index, composedProps, highlightedIndex, selectedItem) => {
  const isHighlighted = highlightedIndex === index;
  const isSelected = selectedItem === suggestion.text;

  return (
    <MenuItem
      {...composedProps}
      key={index}
      selected={isHighlighted}
      component="div"
      classes={{ root: style.suggestionItem }}
    >
      {suggestion.text}
    </MenuItem>
  );
};

const renderSuggestionCollection = ( suggestionCollection: SuggestionCollection, getItemProps, isOpen, selectedItem, highlightedIndex) => {
  if (isOpen && suggestionCollection && suggestionCollection.length) {
    return (
      <Paper square>
        {suggestionCollection.map((suggestion, index) =>
          renderSuggestionItem(
            suggestion,
            index,
            getItemProps({
              item: suggestion.text,
              index: index,
            }),
            highlightedIndex,
            selectedItem,
          )
        )}
      </Paper>
    );
  } else {
    return null;
  }
};

const AutocompleteInputComponent: React.StatelessComponent<AutocompleteInput> = props => {
console.log(props.suggestionCollection)
  return (
    <Downshift>
      {({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
        <div className={cnc(props.className, style.container)}>
          {renderInput(props, getInputProps())}
          {renderSuggestionCollection(
            props.suggestionCollection,
            getItemProps,
            isOpen,
            selectedItem,
            highlightedIndex,
          )}
        </div>
      )}
    </Downshift>
  );
};

export { AutocompleteInputComponent };
