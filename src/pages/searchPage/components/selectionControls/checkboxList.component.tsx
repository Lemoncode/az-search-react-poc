import * as React from "react"
import { SelectionProps } from "./selectionProps";
import { FormControlLabel } from "material-ui/Form";
import { Facet, FacetValue } from "../../viewModel";
import Checkbox from "material-ui/Checkbox";

const style = require("./checkboxList.style.scss");


interface State {
  checkedList: string[];
}

class CheckboxListComponent extends React.Component<SelectionProps, State> {
  constructor(props) {
    super(props);

    this.state = {
      checkedList: [],
    }
  }

  private isInCheckedList = (value) => this.state.checkedList.indexOf(value) >= 0;

  private checkedListAddValue = (value) => {
    if (!this.isInCheckedList(value)) {
      return [...this.state.checkedList, value];
    } else {
      return this.state.checkedList;
    }
  }

  private checkedListRemoveValue = (value) => {
    if (this.isInCheckedList(value)) {
      return this.state.checkedList.filter(v => v !== value);
    } else {
      return this.state.checkedList;
    }
  }

  private handleChange = value => event => {
    let newCheckedList = (event.target.checked) ? 
      this.checkedListAddValue(value) : this.checkedListRemoveValue(value);
    
      // TODO: only for debug.
    console.log(this.state.checkedList);
  }
  
  private getCheckbox = (value: string) => (
    <Checkbox
      value={value.toString()}
      checked={this.isInCheckedList(value)}
      onChange={this.handleChange(value)}
    />
  ); 
  
  private getCheckboxList = () => (
   this.props.facet.values.map((facetValue, index) => 
      <FormControlLabel
        control={this.getCheckbox(facetValue.value)}
        label={`${facetValue.value} (${facetValue.count.toString()})`}
        key={index}
      />
    )
  );

  public render() {
    return (
      <div className={style.container}>
        {this.getCheckboxList()}
      </div>
    );    
  }
};

export { CheckboxListComponent };