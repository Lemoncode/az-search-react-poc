import * as React from "react";
import Hidden from "material-ui/Hidden";
import Drawer from "material-ui/Drawer";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Close from "material-ui-icons/Close";
import Typography from "material-ui/Typography";
const styles = require("./drawer.scss");

interface Drawer {
  show: boolean;
  onClose: () => void;
  className?: string;
}

interface DrawerBar {
  onClose: () => void;
}

const DrawerBarComponent: React.StatelessComponent<DrawerBar> = (props) => {
  return (
    <Toolbar classes={{root: styles.drawerBarContainer}}>
      <Typography variant="title" color="inherit">
        Movie Catalog
      </Typography>
      <IconButton color="inherit" aria-label="Close" onClick={props.onClose}>
        <Close />
      </IconButton>
    </Toolbar>
  );
};

const DrawerComponent: React.StatelessComponent<Drawer> = (props) => {
  return (
    <div className={`${!props.show ? styles.containerHidden : ""} ${props.className || ""} `}>
      {/* Drawer for Mobile Devices */}
      <Hidden mdUp>
        <Drawer
          classes={{
            paper: styles.drawerPaperMobile,
          }}
          variant="temporary"
          anchor="left"
          open={props.show}
          onClose={props.onClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <DrawerBarComponent onClose={props.onClose}/>
          {props.children}
        </Drawer>
      </Hidden>
      {/* Drawer for Desktop Devices */}
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: styles.drawerPaperDesktop,
          }}
          variant="persistent"
          anchor="left"
          open={props.show}
          onClose={props.onClose}
        >
          <DrawerBarComponent onClose={props.onClose}/>
          {props.children}
        </Drawer>
      </Hidden>
    </div>
  );
};

export { DrawerComponent };
