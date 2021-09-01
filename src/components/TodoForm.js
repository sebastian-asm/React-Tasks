import { useContext, useState } from 'react';

import '../styles/TodoForm.css';
import { TodoContext } from '../context/TodoContext';

export default function TodoForm() {
  const [todoText, setTodoText] = useState('');
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(todoText);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="task">Escribe una nueva tarea</label>
      <textarea
        id="task"
        value={todoText}
        onChange={({ target }) => setTodoText(target.value)}
      />

      <div className="TodoForm-buttonContainer">
        <button
          onClick={() => setOpenModal(false)}
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Agregar
        </button>
      </div>
    </form>
  );
}
