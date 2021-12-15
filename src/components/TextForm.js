import React , {useState} from "react";


export default function TextForm(props) {

    const handleClick = ()=>{
        // console.log("this was click" + text);
        let newText = text.toUpperCase();

        setText(newText);
    }
    const handleLowClick = ()=>{
        // console.log("this was click" + text);
        let newText = text.toLowerCase();

        setText(newText);
    }
    const handleClearClick = ()=>{
        // console.log("this was click" + text);
        let newText = '';

        setText(newText);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);

        setText(newText.join(" "));
    }


    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState('');
  
  
    return (
        <>
            <div className="container">
            <h2>{props.heading}</h2>
            <div className="mb-3">

                <textarea
                    className="form-control"
                    value={text} onChange={handleOnChange}
                    id="myBox"
                    rows="8"
                ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick = {handleClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick = {handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick = {handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4">
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 *text.split(" ").length} Minutes for read</p>
                <h2>Preview</h2>
                <p>{text}</p>
        </div>
        </>
    );
}
