import * as React from "react"
import { SelectionProps } from "./selectionProps";
import { FormControlLabel } from "material-ui/Form";
import { Facet, FacetValue, Filter } from "../../viewModel";
import Checkbox from "material-ui/Checkbox";
import { isValueInList, addValueToList, removeValueFromList } from "../../../../util";

const style = require("./checkboxList.style.scss");


interface Props extends SelectionProps {
  //
}

const parseFilterFromStore = (fieldId: string, store: any[]): string => {
  return (store && store.length) ?
    store.map(v => `${fieldId}/any(v: v eq '${v}')`).join(" or ")
  : null;
}

class CheckboxListComponent extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }
  
  private getFilter = (): Filter => {
    if (this.props.filter) {
      return this.props.filter;
    } else {
      const newFilter = {
        fieldId: this.props.facet.fieldId,
        store: null,
        generateExpression: function() {
          return parseFilterFromStore(this.fieldId, this.store);
        },
      };
      return newFilter;
    }
  }

  private handleChange = (facetValue) => (event) => {    
    const currentFilter = this.getFilter();
    const newCheckedList = (event.target.checked) ? 
      addValueToList(currentFilter.store, facetValue) : 
      removeValueFromList(currentFilter.store, facetValue);
    this.props.onFilterUpdate({
      ...currentFilter,
      store: newCheckedList.length ? newCheckedList : null,
    });
  }
  
  private isValueInFilterList = (facetValue): boolean => {
    if (this.props.filter && this.props.filter.store){
      return isValueInList(this.props.filter.store, facetValue);
    } else {
      return false;
    }    
  }

  private getCheckbox = (facetValue) => (
    <Checkbox
      value={facetValue.toString()}
      checked={this.isValueInFilterList(facetValue)}
      onChange={this.handleChange(facetValue)}
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