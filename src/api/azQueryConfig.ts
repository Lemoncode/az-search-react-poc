// TODO. Separate per end point. e.g.: Config for Search endpoint vs config for 
// suggestions.

interface AzQueryConfig {
  protocol: string;
  serviceName: string;
  serviceDomain: string;
  servicePath: string;
  apiVer: string;
  apiKey: string;
  contentType: string;
  method: string;
  searchField: string;
  facets?: string[];
  limit?: number;
  filter?: string;
  suggesterName?: string;
  autocompleteMode?: string;
}

const defaultAzQueryConfig: AzQueryConfig = {
  protocol: "https",
  serviceName: "",
  serviceDomain: "search.windows.net",
  servicePath: "",
  apiVer: "2017-11-11",
  apiKey: "",
  contentType: "application/json",
  method: "GET",
  searchField: "*",
  facets: null,
  limit: 10,
  filter: "",
  suggesterName: "",
  autocompleteMode: "",
}


export { AzQueryConfig, defaultAzQueryConfig };