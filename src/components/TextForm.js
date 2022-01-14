import Mark from 'mark.js';
import React, { useState } from 'react'


export default function TextForm(props) {



    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handlelowerClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");

    }

    const handleClear = () => {
        console.log("Clear was clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!!!", "info");

    }

    const handleOnChange = (event) => {
        // console.log("On change was clicked");
        setText(event.target.value);
    }

    const handleCopy = () => {
        console.log("Copied");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!!!", "success");

        // alert("Copied!!!");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");

    }

    const Encrypt = () => {
        var enc = window.btoa(text);
        var res = enc;
        setText(res);

        props.showAlert("String is Encrypetd!", "success");
    }

    const Decrypt = () => {
        try {
            var dec = window.atob(text);
            var rest = dec;
            setText(rest);
            props.showAlert("String is Decrypetd!", "success");

        }
        catch (err) {
            alert("String is already decoded");
        }
    }

    const handleSearch = () => {
        let textTosearch = document.getElementById("input").value;
        let para = document.getElementById("prev");
        console.log(textTosearch);
        console.log(para);
        textTosearch = textTosearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        let pattern = new RegExp(`${textTosearch}`, "gi");
        para.innerHTML = para.textContent.replace(pattern, match => `<mark>${match}</mark>`);
    }

    const handleExtraPunc = () => {
        // var text = document.getElementById("myBox");
        let punctuationless = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        let newtext = punctuationless.replace(/\s{2,}/g, " ");
        setText(newtext);
        props.showAlert("Extra punctuations are removed!", "success");

    }

    const handleNewLine = () => {
        // var text = document.getElementById("myBox");
        let newtext = text.replace(/(\r\n|\n|\r)/g, " ");
        setText(newtext);
        props.showAlert("ALl new lines are removed!", "success");

    }


    // function countWords(str) {
    //     str = str.replace(/(^\s*)|(\s*$)/gi, "");
    //     str = str.replace(/[ ]{2,}/gi, " ");
    //     str = str.replace(/\n /, "\n");
    //     return str.split(' ').length;
    // }

    const [text, setText] = useState('', 'Enter text here');
    document.title = 'TextUtlis - Home';

    return (
        <div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }, { backgroundImage: "url(/bg1img.jpg)" }}>
                <h1 style={{ color: "white" }}>{props.heading}</h1>
                <div className="mb-3" style={{ margin: '1em' }}>
                    <textarea className="form-control" value={text} placeholder="Enter text here" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#121212' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="12"><mark></mark></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: '1em' }} onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: '1em' }} onClick={handlelowerClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: '1em' }} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: '1em' }} onClick={handleExtraPunc}>Remove Punctuations</button>
                <button disabled={text.length === 0} className="btn btn-primary" style={{ margin: '1em' }} onClick={handleNewLine}>Remove New Line</button>
                <button disabled={text.length === 0} className="btn btn-danger" style={{ margin: '1em' }} onClick={handleClear}>Clear text</button>
                <button disabled={text.length === 0} className="btn btn-outline-success" style={{ margin: '1em' }} onClick={handleCopy}>Copy</button>
                <button disabled={text.length === 0} className="btn btn-warning" style={{ margin: '1em' }} onClick={Encrypt}>Encrypt</button>
                <button disabled={text.length === 0} className="btn btn-warning" style={{ margin: '1em' }} onClick={Decrypt}>Decrypt</button>
                <div className="container" >
                    <input type="text" id="input" />
                    <button disabled={text.length === 0} className="btn btn-secondary" style={{ margin: '1em' }} onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="container my-5">
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <h3>Time: </h3>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview: </h2>
                <p id='prev'>{text.length > 0 ? text : "Enter above to preview here."}</p>
            </div>
        </div>
    )
}
