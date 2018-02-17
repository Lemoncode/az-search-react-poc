import { ItemCollection, FacetCollection } from "../viewModel";

interface SearchOutput {
  itemCollection: ItemCollection;
  facetCollection: FacetCollection;
};

interface Service {
  search: (value: string) => Promise<SearchOutput>;
};

export { SearchOutput, Service };