import * as React from "react"
import { Item } from "../../viewModel/itemModel";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import List, { ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Collapse from "material-ui/transitions/Collapse";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import Chip from 'material-ui/Chip';
import StarIcon from "material-ui-icons/Star";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";

const styles = require("./gridItem.scss");

interface GridItem {
  item: Item;
}

interface State {
  expand: boolean;
}

const ratingStars = (item: Item) => ((item.rating >= 1.0) ? 
  Array(Math.floor(item.rating)).fill(0).map((item, index) => (
    <StarIcon key={index} classes={{root: styles.itemStar}}/>
  )) : null
);

const GridItemMedia: React.StatelessComponent<GridItem> = (props) => {
  return (
    <CardMedia classes={{root: styles.itemMedia}}
      component="img"
      src={props.item.thumbnail}        
      title={props.item.title}
    />
  );
}

const GridItemCaption: React.StatelessComponent<GridItem> = (props) => {
  return (
    <CardContent classes={{root: styles.itemCaption}}>
      <Typography variant="headline" component="h2">
        {props.item.title} 
        <span className={styles.subtitle}>{props.item.subtitle}</span>
      </Typography>        
      <Typography component="p">
        {props.item.excerpt}
      </Typography>
    </CardContent>
  );
}

const generateExtraFieldContent = (field: any) => {
  if (typeof field == "string") {
    return <ListItemText primary={field} />
  } else if (field instanceof Array) {
    return (
      <div className={styles.tagContainer}>
        {field.map((tag, tagIndex) => 
          <Chip label={tag} key={tagIndex} classes={{root: styles.tag}} />
        )}
      </div>);
  } else {
    return null;
  }
}

const generateExtraField = (field: any, index: number) => (
  field ? (
    <ListItem key={index}>
      { generateExtraFieldContent(field) }
    </ListItem>
  ) : null
);

const GridItemExtraFieldList: React.StatelessComponent<GridItem> = (props) => {
  if (props.item.extraFields) {
    return (
      <CardContent><List>
        {
          props.item.extraFields.map((field, fieldIndex) => 
            generateExtraField(field, fieldIndex))
        }
      </List></CardContent>
    );
  } else {
    return null;
  }
}

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

    return (
      <Card classes={{root:styles.item}} elevation={8}>
        <GridItemMedia item={item} />
        <GridItemCaption item={item} />
        <CardActions classes={{root: styles.itemActions}}>
          <div className={styles.itemRating}>
            {ratingStars(item)}
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
          <GridItemExtraFieldList item={item} />
        </Collapse>  
      </Card>
    );
  }  
}

export { GridItemComponent };