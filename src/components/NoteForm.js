import React from 'react';

const NoteForm = ({
  hideNoteForm,
  noteTitle,
  noteDesc,
  onChangeDesc,
  onChangeTitle,
  noteArr,
  createNoteAdd,
  isInputValid,
  setIsInputValid,
  isTextAreaValid,
  setIsTextAreaValid
}) => {

  

  const createNote = (event) => {
    event.preventDefault()
    
    const note = {
      id: noteArr.length + 1,
      title: noteTitle,
      desc: noteDesc,
    };
    if(note.title.trim().length === 0) {
      setIsInputValid(false)
      
      return
    } 
    if(note.desc.trim().length === 0) {
      setIsTextAreaValid(false)
      return
    }
    

    createNoteAdd(note);

    hideNoteForm();
  };

  return (
    <>

      
        <div className="popup">
          <div className="content">
            <header>
              <p></p>
              <i onClick={hideNoteForm} className="uil uil-times"></i>
            </header>
            <form action="#" onSubmit={createNote}>
              <div className="row title">
                <label>Заголовок</label>
                <input style={{borderColor: !isInputValid ? 'red' : ''}} onChange={onChangeTitle} type="text" value={noteTitle} />
              </div>
              <div className="row description">
                <label>Описание</label>
                <textarea style={{borderColor: !isTextAreaValid ? 'red' : ''}} onChange={onChangeDesc} type="text" value={noteDesc} />
              </div>
              <button type="submit">Добавить заметку</button>
            </form>
          </div>
        </div>
      
      <div onClick={hideNoteForm} className='overlay'></div>
    </>
  );
};

export default NoteForm;
