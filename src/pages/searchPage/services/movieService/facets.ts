import { FacetCollection } from "../../viewModel/facetModel";

const facetCollection: FacetCollection = [
  {
    id: "genreTags",
    displayName: "Genre",
    iconName: "mood",
    selectionControl: "checkboxList",
    values: null,
  },
  {
    id: "year",
    displayName: "Year",
    iconName: "date_range",
    selectionControl: "checkboxList",
    values: null,
  },
];

export { facetCollection };