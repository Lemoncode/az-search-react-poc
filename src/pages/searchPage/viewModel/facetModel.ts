export interface Facet {
  id: string;
  displayName: string;
  control: any;   // TODO, change to React Element maybe.
  valueSet: any;  // Whole value set of the Facet (either selected or not).
  selected: any;  // Selected values in the Facet by user to do filtering.
}

export type FacetCollection = Facet[];
