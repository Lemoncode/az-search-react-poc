import { Facet, Filter } from "../../viewModel";

interface SelectionProps {
  facet: Facet;
  filter: Filter;
  onFilterUpdate: (newFilter: Filter) => void;
}

export { SelectionProps };