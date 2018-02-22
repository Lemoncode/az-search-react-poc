import { AzQueryConfig, defaultAzQueryConfig } from "./azQueryConfig";
import { buildRequest, AzRequest } from "./azRequest";

interface AzApi {
  // setServiceName: (serviceName: string) => AzApi;
  // setServiceIndex: (serviceIndex: string) => AzApi;
  // setApiVersion: (apiVer: string) =>AzApi;
  // setApiKey: (apiKey: string) =>AzApi;
  setSearch: (searchField: string) => AzApi;
  // setFacets: (facets: string[]) => AzApi;
  setFilter: (filter: string) => AzApi;
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
    // setServiceName(serviceName) { return setQueryParam("serviceName", serviceName); },
    // setServiceIndex(serviceIndex) { return setQueryParam("serviceIndex", serviceIndex); },
    // setApiVersion(apiVer) { return setQueryParam("apiVer", apiVer); },
    // setApiKey(apiKey) { return setQueryParam("apiKey", apiKey); },
    setSearch(searchField) { return setQueryParam("searchField", searchField); },
    // setFacets(facets) { return setQueryParam("facets", facets); },
    setFilter(filter) { return setQueryParam("filter", filter); },
    
    async run() {
      try {
        const request = buildRequest(queryConfig);
        console.log(`Running Query: ${request.url}`); // TODO. Debug only.

        const response = await fetch(request.url, request.options);
        const jsonObj = await response.json();
        
        if (!response.ok) {
          console.log(jsonObj);
          throw new Error(`${response.status} - ${response.statusText}
            Message: ${jsonObj.error.message}`);
        }
        return jsonObj;
      } catch (e) {
        throw new Error(e);
      }
    },
  };
};

export { AzApi, CreateAzApi };