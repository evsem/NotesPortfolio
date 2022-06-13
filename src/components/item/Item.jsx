import React from "react"
import Close from "../../UI/buttons/close/Close"
import Pensil from "../../UI/buttons/pensil/Pensil"
import style from "./Item.module"

const Item = ({ removeForNote, propsForNote }) => {
  return (
    <div className={style.wrapper} style={{ marginBottom: 20 }}>
      <div className={style.item__header}>
        <span className={style.item__title}>{propsForNote.title}</span>
        <Close onClick={() => removeForNote(propsForNote)} />
      </div>
      <div className={style.item__body}>
        <p className={style.item__descr}>{propsForNote.descr}</p>
        <Pensil />
      </div>
    </div>
  )
}

export default Item
