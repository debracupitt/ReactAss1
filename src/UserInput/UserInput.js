import React from "react";
import "./UserInput.css";

const userInput = props => {
  return (
    <div className="Input">
      <p className="bold">Change your username:</p>
      <input
        className="textbox"
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

export default userInput;
