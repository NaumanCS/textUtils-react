import { useState } from "react"
import React from 'react'
// import {CopytoClipboard} from "react-copy-to-clipboard";

export default function TextForm(props) {
    const UpperCaseText = () => {
        console.log("UpperCase was Clicked" + itstext);
        let newText = itstext.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const LowerCaseText = () => {
        let newText = itstext.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const ClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("myTextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    }
    const removeExtraSpaces = () => {
        let newText = itstext.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed", "success");
    }
    
    const [itstext, setText] = useState("");
    // text = "new text"; Wrong way tp set the text
    // settext("new text") Correct wat to set the text
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myTextBox" value={itstext} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? props.textColor : props.textColor }} onChange={handleOnChange} rows="8" placeholder="Enter your text here"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={UpperCaseText}>
                    Convert the text into UpperCase
                </button>
                <button className="btn btn-danger mx-2" onClick={LowerCaseText}>
                    Convert Text to LowerCase
                </button>
                <button className="btn btn-secondary mx-2" onClick={ClearText}>
                    Clear Text
                </button>
                <button className="btn btn-success mx-2" onClick={handleCopy}>
                    Copy Text
                </button>
                <br />
                <button className="btn btn-primary mx-2 my-2" onClick={removeExtraSpaces}>
                    Remove Extra Spaces
                </button>
                <button className="btn btn-danger mx-2 my-2" onClick={props.changeTextColor}>
                    Change Text Color
                </button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{itstext.split(" ").length} Words and {itstext.length} Charcters</p>
                <p>{0.008 * itstext.split(" ").length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{itstext.length > 0 ? itstext : "Enter Something in the textbox above to preview it here: "}</p>
                <h3>All the Emails present in the text</h3>
                <p>{itstext.match(/[\w\d.-]+@[\w\d.-]+\.[\w\d.-]+/g)}</p>
            </div>

        </>
    )
}
