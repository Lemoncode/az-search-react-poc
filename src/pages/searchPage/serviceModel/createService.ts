import { Service, ServiceInfo, SearchOutput } from "./serviceModel";
import { ItemCollection, FacetCollection } from "../viewModel";
import { AzQueryConfig, CreateAzApi } from "../../../api";
import { ItemCollectionParser, FacetCollectionParser } from "./parserModel";

interface CreateServiceSetup {
  queryConfig: AzQueryConfig;
  facetCollection: FacetCollection;
  itemCollectionParser: ItemCollectionParser;
  facetCollectionParser: FacetCollectionParser;
}

type CreateServiceType = (info: ServiceInfo, setup: CreateServiceSetup ) => Service;

const CreateService: CreateServiceType = (info, setup) => {
  const {queryConfig, facetCollection, itemCollectionParser, facetCollectionParser} = setup;
  const azApi = CreateAzApi(queryConfig); 

  return {
    info,
    search: async (value: string, filter: string): Promise<SearchOutput> => {
      // TODO
      // try {
        const response = await azApi.setSearch(value).setFilter(filter).run();
        return {
          itemCollection: itemCollectionParser(response),
          facetCollection: facetCollectionParser(facetCollection ,response),
        };
      // } catch (e) { throw Error(e); }
    },
  }
}

export { CreateService };