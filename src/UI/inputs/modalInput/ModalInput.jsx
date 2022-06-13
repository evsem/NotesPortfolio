import React from "react"
import st from "./ModalInput.module.scss"

const ModalInput = ({ ...props }) => {
  return <input className={st.modalInput} {...props}></input>
}

export default ModalInput
