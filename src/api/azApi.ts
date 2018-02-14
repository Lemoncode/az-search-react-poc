import { AzQueryConfig, defaultAzQueryConfig } from "./azQueryConfig";
import { buildRequest, AzRequest } from "./azRequest";

interface AzApi {
  setServiceName: (serviceName: string) => AzApi;
  setServiceIndex: (serviceIndex: string) => AzApi;
  setApiVersion: (apiVer: string) =>AzApi;
  setApiKey: (apiKey: string) =>AzApi;
  setSearch: (searchField: string) => AzApi;
  setFacets: (facets: string[]) => AzApi;
  run: () => Promise<any>;
}

const CreateAzApi = (queryConfig: AzQueryConfig = defaultAzQueryConfig): AzApi => {
  const setQueryParam = (param: string, value: any): AzApi => {
    return CreateAzApi({
      ...queryConfig,
      [param]: value,
    });
  };

  return {
    setServiceName(serviceName) { return setQueryParam("serviceName", serviceName); },
    setServiceIndex(serviceIndex) { return setQueryParam("serviceIndex", serviceIndex); },
    setApiVersion(apiVer) { return setQueryParam("apiVer", apiVer); },
    setApiKey(apiKey) { return setQueryParam("apiKey", apiKey); },
    setSearch(searchField) { return setQueryParam("searchField", searchField); },
    setFacets(facets)  {return setQueryParam("facetField", facets); },
    
    async run() {
      try {
        const request = buildRequest(queryConfig);
        console.log(`Running Query: ${request.url}`);
        const response = await fetch(request.url, request.options);
        if (!response.ok) {
          throw new Error(`Error Code: ${response.status} - ${response.statusText}`);
        }
        return await response.json();
      } catch (e) {
        throw e;
      }
    },
  };
};

const azApi = CreateAzApi();

export { AzApi, azApi };