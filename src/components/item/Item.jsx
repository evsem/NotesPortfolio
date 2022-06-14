import React from "react"
import Close from "../../UI/buttons/close/Close"
import st from "./Item.module"

const Item = ({ removeForNote, propsForNote }) => {
  return (
    <div className={st.wrapper} style={{ marginBottom: 20 }}>
      <div className={st.item__header}>
        <span className={st.item__title}>{propsForNote.title}</span>
        <Close onClick={() => removeForNote(propsForNote)} />
      </div>
      <div className={st.item__body}>{propsForNote.descr}</div>
    </div>
  )
}

export default Item
