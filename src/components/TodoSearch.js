import { useContext } from 'react';

import '../styles/TodoSearch.css';
import { TodoContext } from '../context/TodoContext';

export default function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = ({ target }) => {
    setSearchValue(target.value);
  };

  return (
    <input
      onChange={onSearchValueChange}
      value={searchValue}
      type="text"
      placeholder="Buscar..."
      className="TodoSearch"
    />
  );
}
