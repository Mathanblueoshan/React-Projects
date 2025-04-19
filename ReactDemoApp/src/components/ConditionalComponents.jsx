import Colors from "./colors";
import Fruits from "./Fruits";

export default function ConditionalComponents() {
//   let type = "Color";
//   if ((type == "Color")) {
//     return (
//       <div>
//         <Colors />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <Fruits />
//       </div>
//     );
//   }

//or


// let msg;
 const display = true;
// if(display){
//     msg = <h1>Message 1 appeared! (code 10010)</h1>
// }else{
//     msg = <h1>Message 2 appeared! (code 29931)</h1> 
// }
// return msg;


//or
return display ? <h1>Message 1</h1> : <h1>Message 2</h1>;

}
