import { Service, ServiceInfo, SearchOutput, SuggestionOutput } from "./serviceModel";
import { ItemCollection, FacetCollection } from "../viewModel";
import { AzQueryConfig, CreateAzApi } from "../../../api";
import {
  ItemCollectionParser,
  FacetCollectionParser,
  SuggestionCollectionParser,
} from "./parserModel";

interface SearchSetup {
  queryConfig: AzQueryConfig;
  facetCollection: FacetCollection;
  itemCollectionParser: ItemCollectionParser;
  facetCollectionParser: FacetCollectionParser;
}

interface SuggestionSetup {
  queryConfig: AzQueryConfig;
  suggestionCollectionParser: SuggestionCollectionParser;
}

type CreateServiceType = (info: ServiceInfo, searchSetup: SearchSetup, suggestionSetup?: SuggestionSetup) => Service;

const CreateService: CreateServiceType = (info, searchSetup, suggestionSetup) => {
  const { facetCollection, itemCollectionParser, facetCollectionParser } = searchSetup;
  const { suggestionCollectionParser } = suggestionSetup;
  const searchApi = CreateAzApi(searchSetup.queryConfig);
  const suggestionApi = CreateAzApi(suggestionSetup.queryConfig);

  return {
    info,
    search: async (value: string, filter: string): Promise<SearchOutput> => {
      try {
        if (!value) { return Promise.reject(null); }
        const response = await searchApi
          .setSearch(value)
          .setFilter(filter)
          .run();
        return {
          itemCollection: itemCollectionParser(response),
          facetCollection: facetCollectionParser(facetCollection, response),
        };       
      } catch (e) {
        throw Error(e);
      }
    },
    suggest: async (value: string): Promise<SuggestionOutput> => {
      try {
        if (!value) { return Promise.reject(null); }
        const response = await suggestionApi.setSearch(value).run();
        return {
          suggestionCollection: suggestionCollectionParser(response),
        };
      } catch (e) {
        throw Error(e);
      }
    },
  };
};

export { CreateService };
