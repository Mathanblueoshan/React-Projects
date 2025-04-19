import { useState } from "react"

export default function Form(){
    // const [name, setName] = useState("");

    // return(<div>
    //     {name}
    //     <form>
    //         <label htmlFor="firstName">First Name:</label>
    //     <input type="text" onChange={(e) => setName(e.target.value)} name="firstName" value={name}/>
    //     </form>
    //     </div>)


    //multiple
    const [name, setName] = useState({firstName:"",lastName:""});
     
    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }
    return(<div>
        <h2>{name.firstName} - {name.lastName}</h2>

        <form>
        <label htmlFor="firstName">First Name:</label><br/>
        <input type="text" onChange={(e) => setName({...name, firstName:e.target.value})} name="firstName" value={name.firstName}/><br/><br/>
        <label htmlFor="lastName">Last Name:</label><br/>
        <input type="text" onChange={(e) => setName({...name, lastName:e.target.value})} name="lastName" value={name.lastName}/><br/>
        <button onClick={(e) => handleSubmit(e)}>Add</button>
        </form>
        </div>)
}