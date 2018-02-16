import * as React from "react";
import Hidden from "material-ui/Hidden";
import Drawer from "material-ui/Drawer";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Close from "material-ui-icons/Close";
import Typography from "material-ui/Typography";
import { cnc } from "../../../../util";
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

const DrawerForMobileComponent: React.StatelessComponent<Drawer> = (props) => {
  return (
    <Hidden mdUp>
      <Drawer classes={{ paper: styles.drawerPaperMobile }}
        variant="temporary"
        anchor="left"
        open={props.show}
        onClose={props.onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <DrawerBarComponent onClose={props.onClose} />
        {props.children}
      </Drawer>
    </Hidden>
  );
};

const DrawerForDesktopComponent: React.StatelessComponent<Drawer> = (props) => {
  return (
    <Hidden smDown>
      <Drawer classes={{ 
          paper: styles.drawerPaperDesktop,
        }}
        variant="persistent"
        anchor="left"
        open={props.show}
        onClose={props.onClose}
        elevation={8}
      >
        <DrawerBarComponent onClose={props.onClose} />
        {props.children}
      </Drawer>
    </Hidden>
  );
};

const DrawerComponent: React.StatelessComponent<Drawer> = (props) => {
  return (
    <div className={cnc(props.show ? styles.container : styles.containerHidden, props.className, "raised")}>
      <DrawerForMobileComponent show={props.show} onClose={props.onClose}>
        {props.children}
      </DrawerForMobileComponent>
      <DrawerForDesktopComponent show={props.show} onClose={props.onClose}>
        {props.children}
      </DrawerForDesktopComponent>
    </div>
  );
};

export { DrawerComponent };
