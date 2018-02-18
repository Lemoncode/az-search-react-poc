import { Service, ServiceInfo, CreateService } from "../serviceModel";
import {
  queryConfig,
  facetCollection,
  itemCollectionParser,
  facetCollectionParser,
} from "./movieService";

const registeredServices = {
  movieService: CreateService({
      displayName: "Movie Catalog",
      iconName: "movie",
    },
    {
      queryConfig,
      facetCollection,
      itemCollectionParser,
      facetCollectionParser,
    }
  ),
};

export { registeredServices };
