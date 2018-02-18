import * as React from "react";
import { Facet } from "../../viewModel";
import { CheckboxListComponent } from "./checkboxList.component";

export const CreateSelectionControl = (facet: Facet) => {
  switch (facet.selectionControl) {
    case "checkboxList":
      return <CheckboxListComponent facet={facet} onChange={null} />
    default:
      return JSON.stringify(facet.values);
  }
}