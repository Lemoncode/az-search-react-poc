import * as React from "react";
import Toolbar from "material-ui/Toolbar";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";
import Close from "material-ui-icons/Close";
import Typography from "material-ui/Typography";
import { cnc } from "../../../../util";
import { Service } from "../../serviceModel";

const style = require("./drawerBar.style.scss");


interface DrawerBar {
  activeService: Service;
  onClose: () => void;
  className?: string;
}

const DrawerBarComponent: React.StatelessComponent<DrawerBar> = (props) => {
  return (
    <Toolbar 
      classes={{root: cnc(props.className, style.drawerBarContainer)}}
      disableGutters
    >
      <div className={style.serviceContainer}>
        <Icon classes={{root: style.serviceIcon}} color="primary">
          {props.activeService.info.iconName}
        </Icon>
        <Typography variant="headline">
          {props.activeService.info.displayName}
        </Typography>
      </div>      
      <IconButton aria-label="Close" onClick={props.onClose}>
        <Close />
      </IconButton>
    </Toolbar>
  );
};

export { DrawerBarComponent };