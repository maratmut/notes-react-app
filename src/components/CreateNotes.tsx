import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NotesList from './NotesList';



const CreateNotes: React.FC = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      <div className="wrapper">
        <li onClick={() => setOpenForm(true)} className="add-box">
          <div className="icon">
            <i className="uil uil-plus"></i>
          </div>
          <p>Добавить заметку</p>
        </li>

        <NotesList />
      </div>

      {openForm && <NoteForm setOpenForm={setOpenForm} />}
    </>
  );
};

export default CreateNotes;
