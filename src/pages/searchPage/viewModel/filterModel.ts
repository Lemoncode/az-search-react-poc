interface Filter {
  fieldId: string;
  store: any;
  generateExpression: () => string;
}

type FilterCollection = Filter[];

export { Filter, FilterCollection };