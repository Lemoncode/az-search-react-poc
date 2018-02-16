import * as React from "react"
const styles = require("./facetList.scss");

interface FacetList {
}

export const FacetListComponent: React.StatelessComponent<FacetList> = (props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}