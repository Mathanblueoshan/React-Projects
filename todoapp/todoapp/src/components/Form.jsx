import { useState } from "react";
import styles from "./form.module.css"
export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name:"",done:false});

  function handleSubmit(e) {
    e.preventDefault();
    if(todo.name === ""){
    alert("Please enter the Task or goal");
    }else{
    setTodos([...todos, todo]);// add element to list
    setTodo({name:"",done:false});//remove input value
    console.log(todos)
    }
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
     <div className={styles.container}>
     <input
      className={styles.input}
        type="text"
        onChange={(e) => setTodo({name:e.target.value,done:false})}
        value={todo.name}
        placeholder="Add your tasks here..."
      />
      <button className={styles.btn} type="submit">Add</button>
     </div>
    </form>
  );
}
