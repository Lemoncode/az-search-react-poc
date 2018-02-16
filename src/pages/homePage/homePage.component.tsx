import * as React from "react"
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

const style = require("./homePage.style.scss");

export const HomePageComponent: React.StatelessComponent<{}> = () => {
  return (
    <div className={style.container}>
      <h2 className={style.header}>Azure Search React PoC</h2>
      <br />
      <div className={style.buttonGroup}>
        <Link to="/search">
          <Button variant="raised" color="primary">Search Page</Button>
        </Link>
      </div>
    </div>
  )
}
