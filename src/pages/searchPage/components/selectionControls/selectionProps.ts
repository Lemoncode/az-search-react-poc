import { Facet } from "../../viewModel";

interface SelectionProps {
  facet: Facet;
  onChange: (filterExpression: string) => void;
}

export { SelectionProps };