enum FacetSortBy {
  count,
  value
}

interface FacetValue {
  value: string;
  count: number;
}

interface Facet {
  fieldId: string;
  displayName: string;
  iconName?: string;
  selectionControl: string;
  values: FacetValue[];
  sortBy?: FacetSortBy;
}

type FacetCollection = Facet[];

export { FacetValue, Facet, FacetCollection };