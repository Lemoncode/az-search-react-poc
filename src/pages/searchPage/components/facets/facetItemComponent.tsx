import * as React from "react"
import Card, { CardActions, CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import Collapse from "material-ui/transitions/Collapse";
import { Facet } from "../../viewModel";

const styles = require("./facetItem.scss");

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
      <Card classes={{root:styles.item}} elevation={2}>
        <CardActions classes={{root: styles.itemActions}}>
          <Typography variant="headline" component="h3">
            {facet.displayName}
          </Typography>
          <IconButton classes={{root: styles.itemExpand}}
            onClick={this.handleExpand}
            aria-expanded={!this.state.expand}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expand} timeout="auto">
          FACET CONTENT HERE
          {facet.control}
        </Collapse>  
      </Card>
    );
  }  
}

export { FacetItemComponent };