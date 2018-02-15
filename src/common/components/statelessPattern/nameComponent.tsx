import * as React from "react"
const styles = require("./name.scss");

interface Name {
}

export const NameComponent: React.StatelessComponent<Name> = (props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}