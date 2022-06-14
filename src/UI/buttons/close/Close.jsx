import React from "react"
import st from "./Close.module.scss"

const Close = (props) => {
  return (
    <div className={st.close} {...props}>
      <span className={st.line}></span>
      <span className={st.line}></span>
    </div>
  )
}

export default Close
