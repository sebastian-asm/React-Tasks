import '../styles/TodoList.css';

export default function TodoList({ children }) {
  return (
    <section>
      <ul>{children}</ul>
    </section>
  );
}
