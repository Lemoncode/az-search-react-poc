import { Item, ItemCollection, FacetCollection } from "../../viewModel";

const parseItem = (movie: any): Item => {
  if (movie) {
    return {
      title: movie.title,
      subtitle: movie.year,
      thumbnail:  (movie.imdbPictureURL ? movie.imdbPictureURL.replace('"','') : ""),
      excerpt: movie.spanishTitle,
      rating: parseFloat(movie.rtAllCriticsRating),
      extraFields: [
        movie.genreTags,
        movie.actorTags.join(", "),
      ],
    };
  } else {
    return null
  }
}

const itemCollectionParser = (response: any): ItemCollection => {
  const accessor = "value";
  
  if (response && response[accessor] && response[accessor].length > 0) {
    return response[accessor].map(item => parseItem(item));
  } else {
    return null;
  }
}

const parseFacet = (response: any, accessor: string, id: string): any => {
  return response[accessor].hasOwnProperty(id) ? response[accessor][id] : null;
}

const facetCollectionParser = (baseFacets: FacetCollection, response: any): FacetCollection => {
  const accessor = "@search.facets";
  
  if (response && response[accessor]) {
    return baseFacets.map(baseFacet => ({
      ...baseFacet,
      values: parseFacet(response, accessor, baseFacet.fieldId),
    }));    
  } else {
    return null;
  }
}

export { itemCollectionParser, facetCollectionParser };