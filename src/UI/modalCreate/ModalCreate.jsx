import React, { useState } from "react"
import MainButton from "../buttons/mainButton/MainButton"
import ModalInput from "../inputs/modalInput/ModalInput"
import Textarea from "../textarea/Textarea"
import st from "./ModalCreate.module.scss"

const ModalCreate = ({ addNoteFunc, visible, setVisible }) => {
  let [param, setParam] = useState({ title: "", descr: "" })

  const addNewNote = (e) => {
    e.preventDefault()
    let newNote = {
      ...param,
      id: Date.now(),
    }
    addNoteFunc(newNote)
    setParam({ title: "", descr: "" })
  }

  const rootClasses = [st.modalCreate__wrapper]
  if (visible) {
    rootClasses.push(st.active)
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={st.modalCreate__body}
        onClick={(e) => e.stopPropagation()}
      >
        <form>
          <ModalInput
            type="text"
            placeholder="note title"
            value={param.title}
            onChange={(e) => setParam({ ...param, title: e.target.value })}
            style={{
              marginBottom: 24,
              color: "#6B6B6B",
            }}
          />
          <Textarea
            type="text"
            placeholder="note description"
            value={param.descr}
            onChange={(e) => setParam({ ...param, descr: e.target.value })}
            style={{ marginBottom: 20 }}
          />
          <MainButton onClick={addNewNote}>Add</MainButton>
        </form>
      </div>
    </div>
  )
}

export default ModalCreate
