import { Note } from '../redux/noteSlice';

export const saveToStorage = (notes: Note[]) => {
  localStorage.setItem('noteData', JSON.stringify(notes));
};

export const loadFromStorage = (): Note[] => {
  try {
    const noteObj = `${localStorage.getItem('noteData')}`;
    return JSON.parse(noteObj);
  } catch (e) {
    return [];
  }
};
