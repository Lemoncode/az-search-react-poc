import { Service, ServiceInfo, CreateService } from "../serviceModel";
import {
  searchQueryConfig,
  suggestionQueryConfig,
  facetCollection,
  itemCollectionParser,
  facetCollectionParser,
  suggestionCollectionParser
} from "./movieService";

const registeredServices = {
  movieService: CreateService({
      displayName: "Movie Catalog",
      iconName: "movie",
    },
    {
      queryConfig: searchQueryConfig,
      facetCollection,
      itemCollectionParser,
      facetCollectionParser,
    },
    {
      queryConfig: suggestionQueryConfig,
      suggestionCollectionParser,
    },
  ),
};

export { registeredServices };
