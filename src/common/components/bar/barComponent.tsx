import * as React from "react"

interface Bar {
  center?: boolean;
}

export const BarComponent: React.StatelessComponent<Bar> = (props) => {
  const { center } = props;
  const classNameComposition =
    "navbar navbar-expand-lg navbar-light bg-light" + 
    (center ? " justify-content-center" : "");
  return (
    <nav className={classNameComposition}>
      {props.children}
    </nav>
  )
}