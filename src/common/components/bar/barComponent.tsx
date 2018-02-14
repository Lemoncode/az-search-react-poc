import * as React from "react"

interface Bar {
  center?: boolean;
  className?: string;
}

export const BarComponent: React.StatelessComponent<Bar> = (props) => {
  const classNameComposition = [
    "navbar navbar-expand-lg navbar-light bg-light",
    props.center ? "justify-content-center" : "",
    props.className || "",
  ].join(" ");   
  return (
    <nav className={classNameComposition}>
      {props.children}
    </nav>
  )
}