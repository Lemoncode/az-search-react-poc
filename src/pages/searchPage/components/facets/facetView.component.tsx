import * as React from "react"
import { FacetCollection, FilterCollection, Filter } from "../../viewModel";
import { FacetItemComponent } from "./facetItem.component";

const style = require("./facetView.style.scss");


interface FacetView {
  facets: FacetCollection;
  filters: FilterCollection;
  onFilterUpdate: (newFilter: Filter) => void;
}

const FacetViewComponent: React.StatelessComponent<FacetView> = (props) => {
  return props.facets ? (
    <div className={style.container}>
      { props.facets.map((facet, index) => (
        <FacetItemComponent facet={facet} key={index} />
      ))}
    </div>
  ) : null;
}

export { FacetViewComponent };