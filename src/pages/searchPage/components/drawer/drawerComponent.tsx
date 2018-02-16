import * as React from "react";
import Hidden from "material-ui/Hidden";
import Drawer from "material-ui/Drawer";
import { DrawerBarComponent } from "./drawerBarComponent";
import { cnc } from "../../../../util";

const styles = require("./drawer.scss");


interface Drawer {
  show: boolean;
  onClose: () => void;
  className?: string;
}

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
          docked: props.show ? styles.drawerDock : styles.drawerDockHidden,
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
    <div className={cnc(props.show && styles.raise, props.className)}>
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
