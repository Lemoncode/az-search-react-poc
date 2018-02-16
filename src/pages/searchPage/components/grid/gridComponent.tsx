import * as React from "react";
import { GridItemComponent } from "./gridItemComponent";
import { ItemCollection } from "../../viewModel/itemModel";
const styles = require("./grid.scss");

interface Grid {
  items?: ItemCollection;
}

export const GridComponent: React.StatelessComponent<Grid> = (props) => {
  return (    
    <div className={styles.container}>
      { props.items ? 
        props.items.map((child, index) => (
          <GridItemComponent item={child} key={index} />
        ))
      : null }
    </div>
  )
}