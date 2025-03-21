import React from "react";
import Todos from "./Todos";

function Container({ addtd, removeTodo }) {
  return (
    <div className="container">
      {addtd.map((todo, index) => (
        <Todos key={index} add={todo} remove={() => removeTodo(index)} />
      ))}
    </div>
  );
}

export default Container;
