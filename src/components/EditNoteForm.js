import React, { useState } from 'react'
import '../App.css'

const EditNoteForm = ({ 
  hideShowEditNote,
  selectedNote, 
  hideEditNoteForm, 
  saveEditNoteAdd,
  isTextAreaValid,
  isInputValid,
  setIsInputValid,
  setIsTextAreaValid,
}) => {

        const [noteTitle, setNoteTitle] = useState(selectedNote.title)
        const [noteDesc, setNoteDesc] = useState(selectedNote.desc)
        const [noteId] = useState(selectedNote.id)
        

        const onChangeTitle = (e) => {
          if(e.target.value.length > 0) {
            setIsInputValid(true)
          }
            setNoteTitle(e.target.value);
          };
          const onChangeDesc = (e) => {
            if(e.target.value.length > 0) {
              setIsTextAreaValid(true)
            }
            setNoteDesc(e.target.value);
          };

         const saveEditNote = ( e) => {
            e.preventDefault()
            const updateNote = {
              id: noteId,
              title: noteTitle,
              desc: noteDesc,
              
            }
            if(noteTitle.trim().length === 0) {
              setIsInputValid(false)
              return
            }
            if(noteDesc.trim().length === 0) {
              setIsTextAreaValid(false)
              return
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
                <input style={{borderColor: !isInputValid ? 'red' : ''}} onChange={onChangeTitle} type="text" value={noteTitle} />
              </div>
              <div className="row description">
                <label>Описание</label>
                <textarea style={{borderColor: !isTextAreaValid ? 'red' : ''}} onChange={onChangeDesc} type="text" value={noteDesc} />
              </div>
              <button type='submit'>Редактировать</button>
            </form>
          </div>
        </div>
      </div>
      <div onClick={hideShowEditNote} className='overlay'></div>
    </>
  )
}

export default EditNoteForm