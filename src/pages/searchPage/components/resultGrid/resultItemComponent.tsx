import * as React from "react"
import { Item } from "../../viewModel/itemModel";
const styles = require("./resultItem.scss");

interface ResultItem {
  item: Item;
}

export const ResultItemComponent: React.StatelessComponent<ResultItem> = (props) => {
  const extraFields = props.item.extraFields ? 
    props.item.extraFields.map((child, index) => (
      <li className={`list-group-item ${styles.ellipsis}`} key={index}>
        {child}
      </li>
    )) : null;
    
  return (
    <div className={`card bg-light border-secondary ${styles.item}`}>
      <img className={`card-img-top ${styles.itemThumbnail}`}
      src={props.item.thumbnail} alt="Preview Image" />
      <div className={`card-body text-white bg-secondary ${styles.itemCaption}`}>
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text">{props.item.excerpt}</p>
      </div>
      { props.item.extraFields ? 
          <ul className="list-group list-group-flush">
            {extraFields}
          </ul>    
        : null }
      { props.item.link ?
          (<div className="card-body">
            <a href="#" className={props.item.link}>Link</a>
          </div>)
        : null }     
    </div>
  )
}