import React, { useState } from 'react'
import NoteForm from './NoteForm'
import Notes from './Notes'
import {data} from './data'
import EditNoteForm from './EditNoteForm'
import '../App.css'



const AddNewNote = () => {
  const [noteAdd, setNoteAdd] = useState(false)
  const [showEditNote, setShowEditNote] = React.useState(false)
  const [noteTitle, setNoteTitle] = React.useState('');
  const [noteDesc, setNoteDesc] = React.useState('');
  const [selectedNote, setSelectedNote] = React.useState({})
  const [isInputValid, setIsInputValid] = useState(true)
  const [isTextAreaValid, setIsTextAreaValid] = useState(true)
  const [noteArr, setNoteArr] = React.useState(JSON.parse(localStorage.getItem('noteLists')) || data)
  

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

  const showNoteForm = () => {
    setNoteAdd(true)
  }

  const hideNoteForm = () => {
    setNoteAdd(false)
  }

  const hideEditNoteForm = () => {
    setShowEditNote(false)
  }



  const createNoteAdd = (noteData) => {
    
    const temp = [...noteArr]
    temp.push(noteData)
    
    setNoteArr(temp)
    localStorage.setItem('noteLists', JSON.stringify(temp))
    setNoteTitle('')
    setNoteDesc('')
  }

  const saveEditNoteAdd = (editData) => {
    const temp = noteArr.findIndex(item => item.id === editData.id)
    noteArr[temp] = editData
    setNoteArr(noteArr)
    localStorage.setItem('noteLists', JSON.stringify(noteArr))
  }
  


  const deleteNotes = (pos) => {
    if(window.confirm('Вы уверены?')) {
        const temp = [...noteArr]
    temp.splice(pos, 1)
    setNoteArr(temp)
    localStorage.setItem('noteLists', JSON.stringify(temp))
    }
    
  }

  const handleEditFormNote = () => {
    setShowEditNote(true)
  }

  const hideShowEditNote = () => {
    setShowEditNote(false)
  }

  const handleSelectNote = (noteList) => {
    setSelectedNote(noteList)
  }
  
  
  

  return (
    <>
    {
      noteAdd && 
      <NoteForm 
      hideNoteForm={hideNoteForm} 
      noteTitle={noteTitle} 
      noteDesc={noteDesc} 
      onChangeTitle={onChangeTitle}
      onChangeDesc={onChangeDesc}
      noteArr={noteArr}
      createNoteAdd={createNoteAdd}
      isInputValid={isInputValid}
      setIsInputValid={setIsInputValid}
      isTextAreaValid={isTextAreaValid}
      setIsTextAreaValid={setIsTextAreaValid}
      
      />
    }

    {
      showEditNote && (
        <EditNoteForm hideShowEditNote={hideShowEditNote}
         selectedNote={selectedNote}
         onChangeTitle={onChangeTitle}
      onChangeDesc={onChangeDesc}
      handleEditFormNote={handleEditFormNote}
      createNoteAdd={createNoteAdd}
      noteArr={noteArr}
      setNoteArr={setNoteArr}
      hideEditNoteForm={hideEditNoteForm}
      saveEditNoteAdd={saveEditNoteAdd}
      isTextAreaValid={isTextAreaValid}
      isInputValid={isInputValid}
      setIsInputValid={setIsInputValid}
      setIsTextAreaValid={setIsTextAreaValid}
          />
      )
    }

    <div className="wrapper">

      <li onClick={showNoteForm} className="add-box">
        <div className="icon"><i className="uil uil-plus"></i></div>
        <p>Добавить новую заметку</p>
      </li>

      {
        noteArr.map((item, pos) => (
          <Notes key={item.id}
                title={item.title}
                desc={item.desc}                
                setNoteArr={setNoteArr} 
                handleEditFormNote={handleEditFormNote}  
                handleSelectNote={() => handleSelectNote(item)}
                deleteNotes={() => deleteNotes(pos)}
       
       />
        ))
      }
      
    </div>
    </>
  )
}

export default AddNewNote