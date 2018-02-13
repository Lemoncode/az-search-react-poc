import * as React from "react"
import { Link } from 'react-router-dom';
import { ButtonComponent } from "../../common/components/button";
const styles = require("./homePageComponent.scss");

export const HomePageComponent: React.StatelessComponent<{}> = () => {
  return (
    <div className={styles.container}>
      <h2 className="jumbotron">React PoC</h2>
      <br />
      <Link to="/search">
        <ButtonComponent>Search Page</ButtonComponent>
      </Link>
    </div>
  )
}
