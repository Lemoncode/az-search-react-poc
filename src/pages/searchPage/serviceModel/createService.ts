import { Service, SearchOutput } from "./serviceModel";
import { ItemCollection, FacetCollection } from "../viewModel";
import { AzQueryConfig, CreateAzApi } from "../../../api";
import { ItemCollectionParser, FacetCollectionParser } from "./parserModel";

type CreateServiceType = (queryConfig: AzQueryConfig,
  facetCollection: FacetCollection,
  itemCollectionParser: ItemCollectionParser,
  facetCollectionParser: FacetCollectionParser) => Service;

const CreateService: CreateServiceType = (queryConfig, facetCol, itemColParser, faceColParser) => {
  const azApi = CreateAzApi(queryConfig); 

  return {
    search: async (value: string): Promise<SearchOutput> => {
      try {
        const response = await azApi.setSearch(value).run();
        return {
          itemCollection: itemColParser(response),
          facetCollection: faceColParser(facetCol ,response),
        };
      } catch (e) { throw Error(e); }
    },
  }
}

export { CreateService };