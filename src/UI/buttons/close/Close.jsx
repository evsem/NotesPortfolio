import React from "react"
import "./Close.scss"

const Close = (props) => {
  return (
    <div className="close" {...props}>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  )
}

export default Close
