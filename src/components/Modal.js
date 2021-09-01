import { useContext } from 'react';
import ReactDOM from 'react-dom';

import '../styles/Modal.css';
import { TodoContext } from '../context/TodoContext';

export default function Modal({ children }) {
  const { setOpenModal } = useContext(TodoContext);

  const onClick = ({ target }) => {
    // Cerra el modal haciendo clic fuera de él
    if (target.className === 'ModalBackground') {
      setOpenModal((prevState) => !prevState);
    }
  };

  return ReactDOM.createPortal(
    <div onClick={onClick} className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}
