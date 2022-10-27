import React, { useState, Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TextForm(props) {

    // Uppercase
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    // Lowercase
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    // Copy
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        toast.success('Copied to Clippboard !');
    }

    // Clear
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    // Speak
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    // Titlecase
    const titleCase = () => {
        const newTitle = text.toLowerCase().replace(/(^|\b(?!(and?|at?|the|for|to|but|by|is)\b))\w+/g, s => s[0].toUpperCase() + s.slice(1));
        setText(newTitle);
    }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');


    return (
        <Fragment>
            <h1 className='text-center mb-5'>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#808080bd', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>

            </div>
            <button onClick={handleUpClick} className="me-3">Convert to Uppercase</button>
            <button onClick={handleLowClick} className="me-3">Convert to Lowercase</button>
            <button onClick={handleCopyClick} className="me-3">Copy</button>
            <button onClick={handleClearClick} className="me-3">Clear Text</button>
            <button type="submit" onClick={speak} className="mx-2 my-2">Speak</button>
            <button type="submit" onClick={titleCase} className="mx-2 my-2">Title Case</button>
            <ToastContainer position="top-right"
                autoClose={2000} theme="dark"></ToastContainer>
            <h2 className='mt-4'>Text Summary</h2>
            <p>{text.split(' ').filter(function (n) { return n != '' })
                .length} Words, {text.length} Characters</p>
        </Fragment>
    )
}
