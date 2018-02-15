import * as React from "react"
import { Item } from "../../viewModel/itemModel";
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Typography from 'material-ui/Typography';
import StarIcon from 'material-ui-icons/Star';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
const styles = require("./gridItem.scss");

interface GridItem {
  item: Item;
}

interface State {
  collapsed: boolean;
}

const extraFields = (props) => (props.item.extraFields ? 
props.item.extraFields.map((child, index) => (
  <li className={`list-group-item ${styles.ellipsis}`} key={index}>
    {child}
  </li>
)) : null);

class GridItemComponent extends React.Component<GridItem, State> {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    }
  }
    
  public render() {
    const {item} = this.props;

    const rating = (item.rating >= 1.0) ? 
      Array(Math.floor(item.rating)).fill(<StarIcon />) : null;

    return (
      <div>
  
      <Card className={styles.item} elevation={8}>
        <CardMedia className={styles.itemMedia}
          component="img"
          src={item.thumbnail}        
          title={item.title}
        />
        <CardContent classes={{root: styles.itemCaption}}>
          <Typography variant="headline" component="h2">
            {this.props.item.title} 
            <span className={styles.subtitle}>{item.subtitle}</span>
          </Typography>        
          <Typography component="p">
            {item.excerpt}
          </Typography>
        </CardContent>
        <CardActions>
          {rating}
        </CardActions>
        <Collapse>
        </Collapse>
  
      </Card>
  
      <div className={`card bg-light border-secondary ${styles.item}`}>
        <img className={`card-img-top ${styles.itemThumbnail}`}
        src={item.thumbnail} alt="Preview Image" />
        <div className={`card-body text-white bg-secondary ${styles.itemCaption}`}>
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.excerpt}</p>
        </div>
        { item.extraFields ? 
            <ul className="list-group list-group-flush">
              {extraFields}
            </ul>    
          : null }      
      </div>
  
      </div>
    );
  }  
}

export { GridItemComponent };