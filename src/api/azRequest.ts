import { AzQueryConfig } from "./azQueryConfig";

interface AzRequest {
  url: string;
  options: RequestInit;
}

const buildURL = (config: AzQueryConfig): string => {
  const queryRoot = `${config.protocol}://${config.serviceName}.${config.serviceDomain}/`;
  const queryPath = `indexes/${config.serviceIndex}/docs?api-version=${config.apiVer}`;
  const queryPayload = 
    config.searchField ? `&search="${config.searchField}"` : "" + 
    config.facetField ? `&facet="${config.facetField}"` : "" + 
    config.limit ? `&$top=${config.limit}` : "";
  return queryRoot + queryPath + queryPayload;
}

const buildRequest = (config: AzQueryConfig): AzRequest => ({
  url: buildURL(config),
  options: {
    method: config.method,
    headers: {
      "Content-Type": config.contentType,
      "api-key": config.apiKey,
    }
  }
});

export { buildRequest, AzRequest }; 
