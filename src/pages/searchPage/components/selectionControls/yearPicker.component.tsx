import * as React from "react"
import { SelectionProps } from "./selectionProps";
import { Facet, FacetValue, Filter } from "../../viewModel";
import { DatePicker } from 'material-ui-pickers';
import { Moment } from "moment";

const style = require("./yearPicker.style.scss");


interface Props extends SelectionProps {
  //
}

const parseFilterFromStore = (fieldId: string, store: Moment): string => {
  return store ? `${fieldId} eq ${store.format("YYYY")}` : null;
}

class YearPickerComponent extends React.Component<Props, {}> {
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

  private handleChange = (newDate: Moment) => {
    const currentFilter = this.getFilter();
    this.props.onFilterUpdate({
      ...currentFilter,
      store: newDate,
    });  
  }
  
  public render() {
    return (
      <div className={style.container}>
        <DatePicker          
          clearable
          keyboard
          openToYearSelection
          disableFuture
          format="YYYY"
          // label="Choose a Year"
          invalidLabel="All"
          value={this.props.filter && this.props.filter.store ? this.props.filter.store : ""}
          onChange={this.handleChange}
          animateYearScrolling={true}
        />
      </div>
    );    
  }
};

export { YearPickerComponent };
