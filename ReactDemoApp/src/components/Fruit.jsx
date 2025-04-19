export default function Fruit({ name, emoji, price,soldOut }) {
  // return <li>{emoji} {name} ${price}</li>

  //conditional rendering(filter example)
  //   return(
  //   <>
  //     {price > 4 && name.startsWith("S") ? <li>{emoji} {name} ${price}</li>:""}
  //   </>);

  //or

  return (
    <>

        <li>
          {emoji} {name} ${price} {soldOut ? "<Sold Out>":""}
        </li>
     
    </>
  );
}
