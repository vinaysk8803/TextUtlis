import React, { useState } from "react";

export default function TextForm(props) {
  const handleClick = () => {
    // console.log("this was click" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upppercase","primary");
  };
  const handleLowClick = () => {
    // console.log("this was click" + text);
    let newText = text.toLowerCase();
    props.showAlert("Converted to Lowercase","primary");

    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("this was click" + text);
    let newText = "";

    setText(newText);
    props.showAlert("Text Box has been reset","success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);

    setText(newText.join(" "));
    props.showAlert("Extra Spaces has been Deleted","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black"
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            
            style={{
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
                color: props.mode === "dark" ? "white" : "#042743",
              }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes for read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in textbox above"}</p>
      </div>
    </>
  );
}
