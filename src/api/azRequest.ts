import { AzQueryConfig } from "./azQueryConfig";

interface AzRequest {
  url: string;
  options: RequestInit;
}

const buildURL = (config: AzQueryConfig): string => {
  const queryRoot = `${config.protocol}://${config.serviceName}.${config.serviceDomain}/`;
  const queryPath = `${config.servicePath}?api-version=${config.apiVer}`;
  const queryPayload = config.searchField ? `&search="${config.searchField}"` : "";
  const queryLimit = config.limit ? `&$top=${config.limit}` : "";
  const queryFacets = config.facets ? config.facets.map(facet => `&facet=${facet}`).join("") : "";
  const queryFilter = config.filter ? `&$filter=${config.filter}` : "";
  const querySuggester = config.suggesterName ? `&suggesterName=${config.suggesterName}` : "";
  const queryAutocompleteMode = config.autocompleteMode
    ? `&autocompleteMode=${config.autocompleteMode}`
    : "";

  return (
    queryRoot +
    queryPath +
    queryPayload +
    queryLimit +
    queryFacets +
    queryFilter +
    querySuggester +
    queryAutocompleteMode
  );
};

const buildRequest = (config: AzQueryConfig): AzRequest => ({
  url: buildURL(config),
  options: {
    method: config.method,
    headers: {
      "Content-Type": config.contentType,
      "api-key": config.apiKey,
    },
  },
});

export { buildRequest, AzRequest };
