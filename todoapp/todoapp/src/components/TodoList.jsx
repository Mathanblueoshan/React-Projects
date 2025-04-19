import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done));
  return (
    <div className={styles.todoList}>
      {sortedTodos.map((todo) => {
        return <TodoItem key={todo.name} item={todo} todos={todos} setTodos={setTodos} />;
      })}
    </div>
  );
}
