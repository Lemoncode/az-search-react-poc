import * as React from "react";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Close from "material-ui-icons/Close";
import Typography from "material-ui/Typography";

const style = require("./drawerBar.style.scss");


interface DrawerBar {
  onClose: () => void;
}

const DrawerBarComponent: React.StatelessComponent<DrawerBar> = (props) => {
  return (
    <Toolbar classes={{root: style.drawerBarContainer}}>
      <Typography variant="headline" color="inherit">
        Movie Catalog
      </Typography>
      <IconButton color="inherit" aria-label="Close" onClick={props.onClose}>
        <Close />
      </IconButton>
    </Toolbar>
  );
};

export { DrawerBarComponent };