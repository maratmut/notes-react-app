import React, { useState } from 'react'
import '../App.css'

const EditNoteForm = ({ hideShowEditNote,selectedNote, hideEditNoteForm, saveEditNoteAdd}) => {

        const [noteTitle, setNoteTitle] = useState(selectedNote.title)
        const [noteDesc, setNoteDesc] = useState(selectedNote.desc)
        const [noteId] = useState(selectedNote.id)
        

        const onChangeTitle = (e) => {
            setNoteTitle(e.target.value);
          };
          const onChangeDesc = (e) => {
            setNoteDesc(e.target.value);
          };

         const saveEditNote = ( e) => {
            e.preventDefault()
            const updateNote = {
              id: noteId,
              title: noteTitle,
              desc: noteDesc,
              
            }
            saveEditNoteAdd(updateNote)

            hideEditNoteForm()
        }
        
  return (
    <>
      <div className="popup-box">
        <div className="popup">
          <div className="content">
            <header>
              <p></p>
              <i onClick={hideShowEditNote} className="uil uil-times"></i>
            </header>
            <form action="#" onSubmit={saveEditNote}>
              <div className="row title">
                <label>Заголовок</label>
                <input onChange={onChangeTitle} type="text" value={noteTitle} />
              </div>
              <div className="row description">
                <label>Описание</label>
                <textarea onChange={onChangeDesc} type="text" value={noteDesc} />
              </div>
              <button type='submit'>Редактировать</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditNoteForm