import * as React from 'react';
import { useAppDispatch } from '../hook';
import { removeNote } from '../redux/noteSlice';
import EditNoteForm from './EditNoteForm';

interface INotesProps {
  id: string;
  title: string;
  desc: string;
}

const Notes: React.FC<INotesProps> = ({ id, title, desc }) => {
  const [openEditForm, setOpenEditForm] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();
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
              <li onClick={() => setOpenEditForm(true)}>
                <i className="uil uil-pen"></i>Edit
              </li>
              <li onClick={() => dispatch(removeNote(id))}>
                <i className="uil uil-trash"></i>Delete
              </li>
            </ul>
          </div>
        </div>
      </li>

      {openEditForm && (
        <EditNoteForm setOpenEditForm={setOpenEditForm} id={id} title={title} desc={desc} />
      )}
    </>
  );
};

export default Notes;
