import * as React from "react"
import { Link } from 'react-router-dom';
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import MenuIcon from "material-ui-icons/Menu";
import IconButton from "material-ui/IconButton";
import Button from 'material-ui/Button';
const styles = require("./bar.scss");

interface Bar {
  value: string;
  onSearchClick: () => void;
  onSearchUpdate: (value: string) => void;
  onMenuClick: () => void;
}

const BarComponent: React.StatelessComponent<Bar> = (props) => {
  return (
    <AppBar classes={styles.container} position="static">
      <Toolbar>
        <IconButton className={styles.barMenuButton} color="inherit"
          aria-label="Menu" onClick={props.onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={styles.barTitle} variant="title" color="inherit" >
          Azure Search
        </Typography>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export { BarComponent };