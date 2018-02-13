import * as React from "react"

export const ButtonComponent: React.StatelessComponent<{}> = (props) => {
  return (
    <button className="btn btn-primary">
      {props.children}
    </button>
  )
}