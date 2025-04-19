import { useState } from "react"
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo(){
    const [todos,setTodos] = useState([]);
    const completedTodos = todos.filter(todo => todo.done).length;
    const totalTodos = todos.length;
    return(<div>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
        </div>)
}

// https://www.youtube.com/watch?v=k1V2MnZR2lM&list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza&index=31