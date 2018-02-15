import * as React from "react"
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
const styles = require("./homePage.scss");

export const HomePageComponent: React.StatelessComponent<{}> = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Azure Search React PoC</h2>
      <br />
      <div className={styles.buttonGroup}>
        <Link to="/search">
          <Button variant="raised" color="primary">Search Page</Button>
        </Link>
      </div>
    </div>
  )
}
