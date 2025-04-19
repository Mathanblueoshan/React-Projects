import { useState } from "react"

export default function Counter(){
    // const [count,setCount] = useState(0);
    // function increament(){
    // setCount(count + 1);
    // }
    // function decreament(){
    //     setCount(count - 1);
    // }
    // return(<div>
    //     <h2>Count is {count}</h2>
    //     <button onClick={increament}>increament</button>
    //     <button onClick={decreament}>decreament</button>
    //     </div>)

    //multiple states
    const [count,setCount] = useState(0);
    const [increamentBy, setIncreamentBy] = useState(1);
    function increament(){
    setCount(count + increamentBy);
    }
    function decreament(){
        setCount(count - increamentBy);
    }

    function increaseIncreamentBy(){
        setIncreamentBy(increamentBy + 1);
    }
    function decreaseIncreamentBy(){
        setIncreamentBy(increamentBy - 1);
    }
    return(<div>
        <h2>Count is {count} & IncreamentBY:{increamentBy}</h2>
        <button onClick={increament}>increament</button>
        <button onClick={decreament}>decreament</button>
        <button onClick={increaseIncreamentBy}>increase increamentBy</button>
        <button onClick={decreaseIncreamentBy}>decrease increamentBy</button>
        </div>)
}