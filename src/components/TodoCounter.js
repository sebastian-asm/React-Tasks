import { useContext } from 'react';

import '../styles/TodoCounter.css';
import { TodoContext } from '../context/TodoContext';

export default function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      Tareas completadas {completedTodos} de {totalTodos}
    </h2>
  );
}
