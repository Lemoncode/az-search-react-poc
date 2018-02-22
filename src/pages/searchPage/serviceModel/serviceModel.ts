import { ItemCollection, FacetCollection, SuggestionCollection } from "../viewModel";

interface SearchOutput {
  itemCollection: ItemCollection;
  facetCollection: FacetCollection;
};

interface SuggestionOutput {
  suggestionCollection: SuggestionCollection;
};

interface ServiceInfo {
  displayName: string;
  iconName: string;
}

interface Service {
  info: ServiceInfo;
  search: (value: string, filter: string) => Promise<SearchOutput>;
  suggest?: (value: string) => Promise<SuggestionOutput>;
};

export { SearchOutput, SuggestionOutput, Service, ServiceInfo };