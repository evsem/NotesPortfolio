import React from "react"
import Item from "../item/Item"
import st from "./List.module.scss"

const List = ({ propsForList, removeNote }) => {
  return (
    <div className={st.wrapper}>
      {propsForList.map((note, idx) => (
        <Item key={idx + 1} propsForNote={note} removeForNote={removeNote} />
      ))}
    </div>
  )
}

export default List
