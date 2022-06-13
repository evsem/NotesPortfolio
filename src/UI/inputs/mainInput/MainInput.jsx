import React from "react"
import st from "./MainInput.module.scss"

const MainInput = ({ ...props }) => {
  return <input className={st.mainInput} {...props}></input>
}

export default MainInput
