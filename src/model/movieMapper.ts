import { Item, MapperToItem } from "./itemModel";

export const mapMovieToItem: MapperToItem = (movie) => {
  return {
    title: movie.title,
    thumbnail: movie.imdbPictureURL.replace('"',''),
    excerpt: movie.spanishTitle,
    extraFields: [
      movie.genreTags.join(", "),
      movie.actorTags.join(", "),
    ],
  };
}