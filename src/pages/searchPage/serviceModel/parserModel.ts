import { ItemCollection, FacetCollection } from "../viewModel";

type ItemCollectionParser = (response: any) => ItemCollection;
type FacetCollectionParser = (baseFacetCollection: FacetCollection, response: any) => FacetCollection;

export { ItemCollectionParser, FacetCollectionParser };