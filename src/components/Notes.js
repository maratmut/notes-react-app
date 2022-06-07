import React from 'react';

const Notes = ({ handleEditFormNote, handleSelectNote, title, desc, deleteNotes }) => {

  const showEditNotes = (list) => {
    handleSelectNote(list);
    handleEditFormNote();
  };


  return (
    <>
      <li className="note">
        <div className="details">
          <p>{title}</p>
          <span>{desc}</span>
        </div>
        <div className="bottom-content">
          <span></span>
          <div className="settings">
            

            <ul className="menu">
              <li onClick={showEditNotes}>
                <i className="uil uil-pen"></i>Edit
              </li>
              <li onClick={deleteNotes}>
                <i className="uil uil-trash"></i>Delete
              </li>
            </ul>
          </div>
        </div>
      </li>
      </>
      )
   
  
}

export default Notes;
