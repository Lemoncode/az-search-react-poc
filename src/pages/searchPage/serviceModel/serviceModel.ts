import { ItemCollection, FacetCollection } from "../viewModel";

interface SearchOutput {
  itemCollection: ItemCollection;
  facetCollection: FacetCollection;
};

interface ServiceInfo {
  displayName: string;
  iconName: string;
}

interface Service {
  info: ServiceInfo;
  search: (value: string, filter: string) => Promise<SearchOutput>;
};

export { SearchOutput, Service, ServiceInfo };