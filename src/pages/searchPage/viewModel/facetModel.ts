export interface Facet {
  id: string;
  displayName: string;
  control: any; // TODO, change to React Element maybe.
}

export type FacetCollection = Facet[];