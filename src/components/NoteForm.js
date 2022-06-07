import React from 'react';

const NoteForm = ({
  hideNoteForm,
  noteTitle,
  noteDesc,
  onChangeDesc,
  onChangeTitle,
  noteArr,
  createNoteAdd,
}) => {
  const createNote = () => {
    const note = {
      id: noteArr.length + 1,
      title: noteTitle,
      desc: noteDesc,
    };

    createNoteAdd(note);

    hideNoteForm();
  };

  return (
    <>
      <div className="popup-box">
        <div className="popup">
          <div className="content">
            <header>
              <p></p>
              <i onClick={hideNoteForm} className="uil uil-times"></i>
            </header>
            <form action="#" onSubmit={createNote}>
              <div className="row title">
                <label>Заголовок</label>
                <input onChange={onChangeTitle} type="text" value={noteTitle} required />
              </div>
              <div className="row description">
                <label>Описание</label>
                <textarea onChange={onChangeDesc} type="text" value={noteDesc} required />
              </div>
              <button type="submit">Добавить заметку</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteForm;
