import React from "react"
import st from "./MainButton.module.scss"

const MainButton = ({ children, ...props }) => {
  return (
    <button {...props} className={st.mainButton}>
      {children}
    </button>
  )
}

export default MainButton
