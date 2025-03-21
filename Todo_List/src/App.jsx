import "./App.css";
import { useState } from "react";
import InputContainer from "./components/inputContainer";
import Container from "./components/Container";

function App() {
  const [wtd, setInput] = useState(""); 
  const [addtd, setTodo] = useState([]);  

  function writetodos(e) {
    setInput(e.target.value);
  }

  function add() {
    if (wtd !== "") {
      setTodo((prevTodos) => [...prevTodos, wtd]);
      setInput("");  
    }
  }

  function removeTodo(index) {
    setTodo((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }

  return (
    <>
      <main>
        <h1>To-Do List</h1>
        <InputContainer wtd={wtd} writetodos={writetodos} add={add} />
        <Container addtd={addtd} removeTodo={removeTodo} />
      </main>
    </>
  );
}

export default App;
