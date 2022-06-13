import React, { useMemo, useState } from "react"
import "./style/style.scss"
import List from "./components/list/List"
import ModalCreate from "./UI/modalCreate/ModalCreate"
import MainInput from "./UI/inputs/mainInput/MainInput"
import MainButton from "./UI/buttons/mainButton/MainButton"

const App = () => {
  let [notes, setNotes] = useState([])
  let [search, setSearch] = useState("")
  let [modal, setModal] = useState(false)

  const addNewNote = (newNote) => {
    setNotes([...notes, newNote])
    setModal(false)
  }
  const removeNote = (note) => {
    setNotes(notes.filter((n) => n.id !== note.id))
  }

  let searchedNotes = useMemo(() => {
    if (search) {
      return [...notes].filter((note) =>
        note.title.toLowerCase().includes(search)
      )
    }
    return notes
  }, [notes, search])

  return (
    <div className="wrapper">
      <MainButton style={{ marginBottom: 24 }} onClick={() => setModal(true)}>
        Add new note
      </MainButton>
      <ModalCreate
        addNoteFunc={addNewNote}
        visible={modal}
        setVisible={setModal}
      />
      <MainInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
        style={{ marginTop: 12 }}
      />

      {notes.length ? (
        <List propsForList={searchedNotes} removeNote={removeNote} />
      ) : (
        <h2 className="warning__title">no notes</h2>
      )}
    </div>
  )
}

export default App
