import styles from "./footer.module.css"
export default function Footer({completedTodos, totalTodos}){
    return(
        <div className={styles.footer}>
        <span className={styles.counts}>Completed Todos: {completedTodos}</span>
        <span className={styles.counts}>Total Todos: {totalTodos}</span>
        </div>
    )
}