interface FacetValue {
  value: string;
  count: number;
}

interface Facet {
  id: string;
  displayName: string;
  iconName?: string;
  selectionControl: string;
  values: FacetValue[];
}

type FacetCollection = Facet[];

export { FacetValue, Facet, FacetCollection };