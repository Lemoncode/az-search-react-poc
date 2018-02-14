import * as React from "react"
import { Link } from 'react-router-dom';
import { ButtonComponent } from "../../common/components/button";
import { BarComponent } from "../../common/components/bar";
const styles = require("./homePage.scss");

export const HomePageComponent: React.StatelessComponent<{}> = () => {
  return (
    <div className={styles.container}>
      <h2 className={`jumbotron ${styles.header}`}>React PoC</h2>
      <br />
      <BarComponent center>
        <Link className="btn btn-dark" to="/search">
          <ButtonComponent>Search Page</ButtonComponent>
        </Link>
      </BarComponent>
    </div>
  )
}
