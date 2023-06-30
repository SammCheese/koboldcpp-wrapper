import React from "react";
import "./Divider.css"

const Divider = ({size = 1}) => {
  return <div className="divider" style={{ height: `${size}px`}}/>
}

export default Divider as typeof Divider;