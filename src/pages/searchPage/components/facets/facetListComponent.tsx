import * as React from "react"
import { FacetCollection } from "../../viewModel";
import { FacetItemComponent } from "./facetItemComponent";

const styles = require("./facetList.scss");


interface FacetList {
  facets: FacetCollection;
}

const FacetListComponent: React.StatelessComponent<FacetList> = (props) => {
  return (
    <div className={styles.container}>
      { props.facets.map((facet, index) => (
        <FacetItemComponent facet={facet} key={index} />
      ))}
    </div>
  )
}

export { FacetListComponent };