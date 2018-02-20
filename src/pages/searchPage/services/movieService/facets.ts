import { FacetCollection } from "../../viewModel/facetModel";

const facetCollection: FacetCollection = [
  {
    fieldId: "genreTags",
    displayName: "Genre",
    iconName: "mood",
    selectionControl: "checkboxList",
    values: null,
  },
  {
    fieldId: "year",
    displayName: "Year",
    iconName: "date_range",
    selectionControl: "yearPicker",
    values: null,
  },
  {
    fieldId: "actorTags",
    displayName: "Cast",
    iconName: "people",
    selectionControl: "checkboxList",
    values: null,
  },
];

export { facetCollection };