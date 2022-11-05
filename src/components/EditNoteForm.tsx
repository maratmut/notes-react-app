import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editNote } from '../redux/noteSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInput } from './NoteForm';

interface IEditNoteFormProps {
  id: string;
  title: string;
  desc: string;
  setOpenEditForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditNoteForm: React.FC<IEditNoteFormProps> = ({ setOpenEditForm, id, title, desc }) => {
  const [editForm] = useState({
    id,
    title,
    desc,
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({
    defaultValues: {
      title: editForm.title,
      desc: editForm.desc,
    },
    mode: 'onSubmit',
  });

  const dispatch = useDispatch();

  const handleChangeNote: SubmitHandler<IFormInput> = (data) => {
    dispatch(
      editNote({
        id: editForm.id,
        title: data.title,
        desc: data.desc,
      }),
    );
    setOpenEditForm(false);
  };

  return (
    <>
      <div className="popup">
        <div className="content">
          <header>
            <p></p>
            <i onClick={() => setOpenEditForm(false)} className="uil uil-times"></i>
          </header>
          <form onSubmit={handleSubmit(handleChangeNote)}>
            <div className="row title">
              <label>Заголовок</label>
              <input
                type="text"
                {...register('title', {
                  required: 'Введите заголовок',
                })}
              />
              {errors.title && (
                <div style={{ color: 'red', fontSize: '14px' }}>{errors.title.message}</div>
              )}
            </div>
            <div className="row description">
              <label>Описание</label>
              <textarea
                {...register('desc', {
                  required: 'Введите описание',
                })}
              />
              {errors.desc && (
                <div style={{ color: 'red', fontSize: '14px' }}>{errors.desc.message}</div>
              )}
            </div>
            <button type="submit">Редактировать</button>
          </form>
        </div>
      </div>

      <div onClick={() => setOpenEditForm(false)} className="overlay"></div>
    </>
  );
};

export default EditNoteForm;
