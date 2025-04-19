import Fruit from "./Fruit";

export default function Fruits(){
    const Fruits = [
        {name:"Apple",price:7,emoji:"🍎",soldOut:false},
        {name:"Orange",price:4,emoji:"🍊",soldOut:false},
        {name:"Banana",price:5,emoji:"🍌",soldOut:true},
        {name:"Pineapple",price:2,emoji:"🍍",soldOut:true},
        {name:"Strawberry",price:8,emoji:"🍓",soldOut:true}

    ];
    return(
        <div>
            <ul>
                {Fruits.map(fruit => (<Fruit key={fruit.name} emoji={fruit.emoji} name={fruit.name} price={fruit.price} soldOut={fruit.soldOut}/>))}
            </ul>
        </div>
    )
}