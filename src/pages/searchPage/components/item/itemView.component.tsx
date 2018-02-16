import * as React from "react";
import { ItemComponent } from "./item.component";
import { ItemCollection } from "../../viewModel/itemModel";

const style = require("./itemView.style.scss");


interface ItemView {
  items?: ItemCollection;
}

export const ItemViewComponent: React.StatelessComponent<ItemView> = (props) => {
  return (    
    <div className={style.container}>
      { props.items ? 
        props.items.map((child, index) => (
          <ItemComponent item={child} key={index} />
        ))
      : null }
    </div>
  )
}