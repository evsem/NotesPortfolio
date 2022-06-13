import React from "react"
import style from "./Textarea.module.scss"

const Textarea = ({ ...props }) => {
  return <textarea {...props} className={style.textarea}></textarea>
}

export default Textarea
