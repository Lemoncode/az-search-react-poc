import { Service, CreateService } from "../serviceModel";
import {
  queryConfig,
  facetCollection,
  parseItemCollection,
  parseFacetCollection,
} from "./movieService";

const registeredServices = {
  movieService: {
    displayName: "Movie Catalog",
    service: CreateService(
      queryConfig,
      facetCollection,
      parseItemCollection,
      parseFacetCollection
    ),
  },
};

export { registeredServices };
