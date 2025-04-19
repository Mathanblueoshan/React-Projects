export default function Message(){
    let count = 0;
    function handleEvent(){
        count++;
        alert(`btn Clicked ${count}`)
       
    }
    return(<div id="magic">
         <p>_This is Magical Button_</p>
        <button onClick={handleEvent}>Click me to get message</button>
    </div>)
}