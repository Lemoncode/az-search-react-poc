import * as React from "react"

interface Button {
  onClick?: () => void;
}

export const ButtonComponent: React.StatelessComponent<Button> = (props) => {
  return (
    <button className="btn btn-dark" onClick={props.onClick}>
      {props.children}
    </button>
  )
}