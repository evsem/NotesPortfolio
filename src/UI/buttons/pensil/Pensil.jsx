import React from "react"
import "./Pensil.scss"

const Pensil = (props) => {
  return (
    <div className="pensil__wrapper" {...props}>
      <div className="pensil__pensil">
        <div className="pensil__rectangle"></div>
      </div>
    </div>
  )
}

export default Pensil
