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
  facets?: string[];
  limit?: number;
}

const defaultAzQueryConfig: AzQueryConfig = {
  protocol: "https",
  serviceName: "",
  serviceDomain: "search.windows.net",
  serviceIndex: "",
  apiVer: "2017-11-11",
  apiKey: "",
  contentType: "application/json",
  method: "GET",
  searchField: "*",
  facets: null,
  limit: 10
}


export { AzQueryConfig, defaultAzQueryConfig };