interface AzQueryConfig {
  protocol: string;
  serviceName: string;
  serviceDomain: string;
  serviceIndex: string;
  apiVer: string;
  apiKey: string;
  contentType: string;
  method: string;
  searchField: string;
  facetField?: string;
  limit?: number;
}

const defaultAzQueryConfig: AzQueryConfig = {
  protocol: "https",
  serviceName: "azs-playground",
  serviceDomain: "search.windows.net",
  serviceIndex: "movies",
  apiVer: "2017-11-11",
  apiKey: "5E81A6D21EB1A028B5C4F7F80C1A9914",
  contentType: "application/json",
  method: "GET",
  searchField: "*",
  facetField: "",
  limit: 10
}


export { AzQueryConfig, defaultAzQueryConfig };