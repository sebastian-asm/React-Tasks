import '../styles/CreateTodoButton.css';

export default function CreateTodoButton({ setOpenModal }) {
  const handleClick = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <button onClick={handleClick} className="CreateTodoButton">
      +
    </button>
  );
}
