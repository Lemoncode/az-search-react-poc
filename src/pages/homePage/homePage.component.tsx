import * as React from "react"
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Typography from "material-ui/Typography";

const style = require("./homePage.style.scss");

export const HomePageComponent: React.StatelessComponent<{}> = () => {
  return (
    <div className={style.container}>
      <Typography variant="display2" classes={{root: style.header}}>
        Azure Search React PoC
      </Typography>
      <br />
      <div className={style.buttonGroup}>
        <Link to="/search">
          <Button variant="raised" color="primary">Search Page</Button>
        </Link>
      </div>
    </div>
  )
}
