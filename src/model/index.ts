import { Item, MapperToItem } from "./itemModel";
import { mapMovieToItem } from "./movieMapper";

const activeMapper: MapperToItem = mapMovieToItem;

export { Item, MapperToItem } from "./itemModel";
export { activeMapper };
