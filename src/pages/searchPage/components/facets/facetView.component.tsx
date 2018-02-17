import * as React from "react"
import { FacetCollection } from "../../viewModel";
import { FacetItemComponent } from "./facetItem.component";

const style = require("./facetView.style.scss");


interface FacetView {
  facets: FacetCollection;
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