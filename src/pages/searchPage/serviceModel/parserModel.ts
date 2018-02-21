import { ItemCollection, FacetCollection, SuggestionCollection } from "../viewModel";

type ItemCollectionParser = (response: any) => ItemCollection;
type FacetCollectionParser = (baseFacetCollection: FacetCollection, response: any) => FacetCollection;
type SuggestionCollectionParser = (response: any) => SuggestionCollection;

export { ItemCollectionParser, FacetCollectionParser, SuggestionCollectionParser };