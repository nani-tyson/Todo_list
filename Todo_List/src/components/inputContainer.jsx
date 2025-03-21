import React from "react";

function InputContainer({ wtd, writetodos, add }) {
  return (
    <div className="input-container">
      <input 
        type="text"  
        value={wtd}
        onChange={writetodos}
        placeholder="Enter a work todo"
      />
      <button onClick={add}>+</button>  
    </div>
  );
}

export default InputContainer;
