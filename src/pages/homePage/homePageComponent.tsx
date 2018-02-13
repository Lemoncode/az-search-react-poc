import * as React from "react"
import { Link } from 'react-router-dom';
import { ButtonComponent } from "../../common/components/button";
const styles = require("./homePageComponent.scss");

export const HomePageComponent: React.StatelessComponent<{}> = () => {
  return (
    <div className={styles.container}>
      <h2 className={`jumbotron ${styles.header}`}>React PoC</h2>
      <br />
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/search">Search Page</Link>
          {/* <a className="nav-link active" href="#">Active</a> */}
        </li>
      </ul>
    </div>
  )
}
