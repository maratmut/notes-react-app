import * as React from 'react';
import { useAppDispatch } from '../hook';
import { addNote } from '../redux/noteSlice';
import { v4 as uuidv4 } from 'uuid';
import { useForm, SubmitHandler } from 'react-hook-form';

export interface IFormInput {
  id: string;
  title: string;
  desc: string;
}

interface INoteFormProps {
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoteForm: React.FunctionComponent<INoteFormProps> = ({ setOpenForm }) => {
  

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({
    mode: 'onSubmit',
  });

  const dispatch = useAppDispatch();

  const handleAddNote: SubmitHandler<IFormInput> = (data) => {
    dispatch(
      addNote({
        id: uuidv4(),
        title: data.title,
        desc: data.desc,
      }),
    );
    setOpenForm(false);
  };

  return (
    <>
      <div className="popup">
        <div className="content">
          <header>
            <p></p>
            <i onClick={() => setOpenForm(false)} className="uil uil-times"></i>
          </header>
          <form onSubmit={handleSubmit(handleAddNote)}>
            <div className="row title">
              <label>Заголовок</label>
              <input
                type="text"
                {...register('title', {
                  required: 'Введите заголовок',
                  
                })}
              />
              {errors.title && <div style={{color: 'red', fontSize: '14px'}}>{errors.title.message}</div>}
            </div>
            
            <div className="row description">
              <label>Описание</label>
              <textarea
                {...register('desc', {
                  required: 'Введите описание',
                  
                })}
              />
              {errors.desc && <div style={{color: 'red', fontSize: '14px'}}>{errors.desc.message}</div>}
            </div>
            
            <button type="submit">Добавить заметку</button>
          </form>
        </div>
      </div>

      <div onClick={() => setOpenForm(false)} className="overlay"></div>
    </>
  );
};

export default NoteForm;
