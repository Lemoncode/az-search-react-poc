import * as React from "react"
import { Item } from "../../viewModel/itemModel";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Collapse from "material-ui/transitions/Collapse";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import StarIcon from "material-ui-icons/Star";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
const styles = require("./gridItem.scss");

interface GridItem {
  item: Item;
}

interface State {
  expand: boolean;
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
      expand: false,
    }
  }

  private handleExpand = () => {
    this.setState({
      ...this.state,
      expand: !this.state.expand,
    });
  }
    
  public render() {
    const {item} = this.props;

    const ratingStars = (item.rating >= 1.0) ? 
      Array(Math.floor(item.rating)).fill(0).map((item, index) => (
        <StarIcon key={index} classes={{root: styles.itemStar}}/>
      )) : null;

    return (
      <Card classes={{root:styles.item}} elevation={8}>
        <CardMedia classes={{root: styles.itemMedia}}
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
        <CardActions classes={{root: styles.itemActions}}>
          <div className={styles.itemRating}>
            {ratingStars}
          </div>          
          <IconButton classes={{root: styles.itemExpand}}
            onClick={this.handleExpand}
            aria-expanded={!this.state.expand}
            aria-label="Show more"
          >
              <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expand} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography component="p">
              This is the collapsed panel  
            </Typography>
          </CardContent>
        </Collapse>  
      </Card>
    );
  }  
}

export { GridItemComponent };