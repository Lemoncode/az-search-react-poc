import * as React from "react"
import { Link } from 'react-router-dom';
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import MenuIcon from "material-ui-icons/Menu";
import HomeIcon from 'material-ui-icons/Home';
import IconButton from "material-ui/IconButton";

const style = require("./bar.style.scss");

interface Bar {
  value: string;
  onSearchClick: () => void;
  onSearchUpdate: (value: string) => void;
  onMenuClick: () => void;
}

const BarComponent: React.StatelessComponent<Bar> = (props) => {
  return (
    <AppBar position="static">
      <Toolbar classes={{root: style.toolbar}}>
        <IconButton className={style.toolbarMenuButton} color="inherit"
          aria-label="Menu" onClick={props.onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={style.toolbarTitle} variant="title" color="inherit" >
          Azure Search
        </Typography>
        <Link to="/">
          <IconButton color="inherit"><HomeIcon/></IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export { BarComponent };