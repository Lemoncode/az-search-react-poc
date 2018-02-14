import * as React from "react";
import { ResultItemComponent } from "./resultItemComponent";
import { Item } from "../../../../model/itemModel";
const styles = require("./resultGrid.scss");

interface ResultGrid {
  items?: Item[];
}

export const ResultGridComponent: React.StatelessComponent<ResultGrid> = (props) => {
  return (    
    <div className={styles.container}>
      { props.items ? 
        props.items.map((child, index) => (
          <ResultItemComponent item={child} key={index} />
        ))
      : null }
    </div>
  )
}