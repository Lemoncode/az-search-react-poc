import { AzQueryConfig } from "../../../../api";
import { facetCollection } from "./facets";

const queryConfig: AzQueryConfig = {
  protocol: "https",
  serviceName: "azs-playground",
  serviceDomain: "search.windows.net",
  serviceIndex: "movies",
  apiVer: "2017-11-11",
  apiKey: "5E81A6D21EB1A028B5C4F7F80C1A9914",
  contentType: "application/json",
  method: "GET",
  searchField: "*",
  facets: facetCollection.map(facet => facet.id),
  limit: 10
}

export { queryConfig };