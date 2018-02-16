import { MapperToItem } from "./itemModel";

export const mapMovieToItem: MapperToItem = (movie) => {
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
}
