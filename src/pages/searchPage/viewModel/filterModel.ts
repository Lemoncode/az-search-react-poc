interface Filter {
  id: string;
  values: string[];
}

type FilterCollection = Filter[];

export { Filter, FilterCollection };