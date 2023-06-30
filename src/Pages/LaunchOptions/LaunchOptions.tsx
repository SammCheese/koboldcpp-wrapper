import React from "react"
import { Checkbox } from "../../components"

const LaunchOptions = () => {
  return (
    <div>
      <Checkbox title="Bin Ballin" onChange={(e) => console.log(e)}/>
    </div>
  )
}

export default LaunchOptions as typeof LaunchOptions;