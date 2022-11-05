import Notes from './Notes';
import { useAppSelector } from '../hook';
import { Note } from '../redux/noteSlice';


const NotesList = () => {
  const notes = useAppSelector((state): Note[] => state.notes.list);

  return (
    <>
      {notes.map((note) => (
        <Notes key={note.id} id={note.id} title={note.title} desc={note.desc} />
      ))}
    </>
  );
};

export default NotesList;
