import styles from "./todoItem.module.css";
export default function TodoItem({item, todos, setTodos}){
    function handleDelete(item){
        setTodos(todos.filter((todo) => todo.name !== item.name));
       setTimeout(() => {
        alert(item.name+" deleted")
       }, 800);
    }

    function handleClick(name){
        setTodos(todos.map((todo)=> todo.name === name ? {...todo, done:!todo.done} : todo));
    }
    const statusClass = item.done === true ? styles.done :"";
    return(<div className={styles.item}>
        <div className={styles.itemName}><span className={statusClass} onClick={() => handleClick(item.name)}>{item.name}</span><span><button onClick={(e) => handleDelete(item)} className={styles.dltBtn}>x</button></span></div>
        <hr className={styles.line}/>
    </div>);
}