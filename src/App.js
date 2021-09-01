import { useContext } from 'react';

import { TodoContext } from './context/TodoContext';
import CreateTodoButton from './components/CreateTodoButton';
import Modal from './components/Modal';
import TodoCounter from './components/TodoCounter';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch';
import TodoForm from './components/TodoForm';

export default function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Hubo un error inesperado</p>}
        {loading && <p>Cargando...</p>}
        {!loading && !searchedTodos.length && <p>Agrega tu primera tarea</p>}

        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            {...todo}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}
