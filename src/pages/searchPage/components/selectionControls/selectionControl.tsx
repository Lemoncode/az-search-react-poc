import * as React from "react";
import { Facet, Filter } from "../../viewModel";
import { CheckboxListComponent } from "./checkboxList.component";
import { YearPickerComponent } from "./yearPicker.component";

export const CreateSelectionControl = (facet: Facet, filter: Filter, onFilterUpdate) => {
  switch (facet.selectionControl) {
    case "checkboxList":
      return <CheckboxListComponent facet={facet} filter={filter} onFilterUpdate={onFilterUpdate} />
    case "yearPicker":
      return <YearPickerComponent facet={facet} filter={filter} onFilterUpdate={onFilterUpdate} />
    default:
      return JSON.stringify(facet.values);
  }
}