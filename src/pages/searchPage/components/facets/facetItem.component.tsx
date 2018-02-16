import * as React from "react"
import Card, { CardActions, CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import Collapse from "material-ui/transitions/Collapse";
import { Facet } from "../../viewModel";

const style = require("./facetItem.style.scss");

interface FacetItem {
  facet: Facet;
}

interface State {
  expand: boolean;
}

class FacetItemComponent extends React.Component<FacetItem, State> {
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
    const { facet } = this.props;

    return (
      <Card classes={{root:style.item}} elevation={0}>
        <CardActions classes={{root: style.itemActions}}>
          <Typography variant="title">
            {facet.displayName}
          </Typography>
          <IconButton classes={{root: style.itemExpand}}
            onClick={this.handleExpand}
            aria-expanded={!this.state.expand}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expand} timeout="auto">
          <div className={style.controlContainer}>
            FACET CONTENT HERE
            {facet.control}
          </div>          
        </Collapse>  
      </Card>
    );
  }  
}

export { FacetItemComponent };