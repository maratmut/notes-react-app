import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadFromStorage, saveToStorage } from '../helper/helper';

export type Note = {
  id: string;
  title: string;
  desc: string;
};

type TodoActionById = {
    id: string;
    title: string;
    desc: string;
}


type NotesState = {
  list: Note[];
};

const initialState: NotesState = {
  list: loadFromStorage() || [],
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.list.push(action.payload);
      saveToStorage(state.list);
    },

    removeNote: (state, action: PayloadAction<string>) => {
      const newNoteList = state.list.filter((note) => note.id !== action.payload);
      saveToStorage(newNoteList)
      state.list = [...newNoteList]
    },

    editNote: (state, action: PayloadAction<Note>) => {
        const {id, title, desc} = action.payload

        const existingNote = state.list.find(note => note.id === id)
            if(existingNote) {
                
                existingNote.title = title
                existingNote.desc = desc
            }
            saveToStorage(state.list)
    },
  },
});

export const { addNote, removeNote, editNote } = noteSlice.actions;

export default noteSlice.reducer;
