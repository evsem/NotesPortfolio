import React from "react"
import "./MainButton.scss"

const MainButton = ({ children, ...props }) => {
  return (
    <button {...props} className="mainButton">
      {children}
    </button>
  )
}

export default MainButton
