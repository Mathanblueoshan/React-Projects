export default function Colors(){
    const Colors = ["Red ❤️","Green💚","Blue💙","Purple💜","Black🖤","Yellow💛"];

    return(<div>
        <ul>
            {Colors.map((color) => (<li key={color}>{color}</li>))}
        </ul>
    </div>)
}