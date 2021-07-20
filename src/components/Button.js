import { useState } from "react";

const Button = ({ handleAdd, handleDes, handleAddTen, handleDesTen }) => {
  return (
    <div>
      <div>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleDes}>-1</button>
      </div>
      <div>
        <button onClick={handleAddTen}>+10</button>
        <button onClick={handleDesTen}>-10</button>
      </div>
    </div>
  );
};

export default Button;
