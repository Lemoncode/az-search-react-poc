import { AzQueryConfig } from "../../../../api";
import { facetCollection } from "./facets";

const searchQueryConfig: AzQueryConfig = {
  protocol: "https",
  serviceName: "azs-playground",
  serviceDomain: "search.windows.net",
  servicePath: "indexes/movies/docs",
  apiVer: "2017-11-11",
  apiKey: "5E81A6D21EB1A028B5C4F7F80C1A9914",
  contentType: "application/json",
  method: "GET",
  searchField: "*",
  facets: facetCollection.map(facet => facet.fieldId),
  limit: 10,
  filter: "",
}

const suggestionQueryConfig: AzQueryConfig = {
  protocol: "https",
  serviceName: "azs-playground",
  serviceDomain: "search.windows.net",
  servicePath: "indexes/movies/docs/autocomplete",
  apiVer: "2017-11-11-Preview",
  apiKey: "5E81A6D21EB1A028B5C4F7F80C1A9914",
  contentType: "application/json",
  method: "GET",
  searchField: "*",
  limit: 10,
  suggesterName: "sg",
  autocompleteMode: "twoTerms",
}

export { searchQueryConfig, suggestionQueryConfig };