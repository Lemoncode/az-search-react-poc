import * as React from "react"

const style = require("./name.style.scss");


interface Name {
}

export const NameComponent: React.StatelessComponent<Name> = (props) => {
  return (
    <div className={style.container}>
      {props.children}
    </div>
  )
}