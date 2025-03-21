import React from "react";

function Todos({ add, remove }) {
  return (
    <div className="todo"> 
      {add}
      <div className="actions">
        <input type="checkbox" />
        <button onClick={remove}>Delete</button>
      </div>
    </div>
  );
}

export default Todos;
