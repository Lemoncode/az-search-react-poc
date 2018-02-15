export interface Item {
  title: string;
  thumbnail?: string;
  excerpt?: string;
  link?: string;
  extraFields?: string[];
}

export type MapperToItem = (input: any) => Item;
