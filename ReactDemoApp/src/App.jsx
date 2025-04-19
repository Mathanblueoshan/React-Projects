import Colors from "./components/colors"
import ConditionalComponents from "./components/ConditionalComponents"
import Counter from "./components/Counter"
import Form from "./components/Form"
import Fruits from "./components/Fruits"
import Hello from "./components/Hello"
import Message from "./components/Message"

const Person = {
  name:"Jhon Weak",
  msg:"Hi there!",
  emoji:"👋",
  seatNumbers:[1,3,5]
}
function App() {
  return (
    <div className="App">
      {/* <Hello person={Person} />
      <Colors />
      <Fruits />
      <ConditionalComponents /> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      <Form/>
      </div>
  )
}

export default App
