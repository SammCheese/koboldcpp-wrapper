import React from "react";
import { Flex } from "..";

import "./Checkbox.css"

interface CheckboxType {
  onChange?: (e:boolean) => void,
  title?: string,
  className?: string,
  disabled?: boolean
}

const Checkbox = ({title, className, disabled = false, onChange}: CheckboxType) => {
  const [checked, setChecked] = React.useState(false);
  
  return (
    <Flex className="checkbox-wrapper">
      <input
        className={`checkbox-item ${className}`}
        onChange={(e) => onChange}
        type="checkbox"
        disabled={disabled}
      ></input>
      {title}
    </Flex>
  )
}


export default Checkbox as typeof Checkbox;