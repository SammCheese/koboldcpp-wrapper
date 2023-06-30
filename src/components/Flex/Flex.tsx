import { ReactElement, ReactNode } from "react";
import "./Flex.css"
import React from "react";

interface FlexType {
  children: ReactNode,
  className?: string
}

const Flex = ({children, className = ""}: FlexType) => {
  return(
    <div className={`flex ${className}`}>
      {children}
    </div>
  )
}

export default Flex as typeof Flex;