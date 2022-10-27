import React, { useState, Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        toast.success('Copied to Clippboard !');
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const titleCase() => {
        text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
    }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');


    return (
        <Fragment>
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>

            </div>
            <button onClick={handleUpClick} className="btn btn-primary me-3">Convert to Uppercase</button>
            <button onClick={handleLowClick} className="btn btn-primary me-3">Convert to Lowercase</button>
            <button onClick={handleCopyClick} className="btn btn-primary me-3">Copy</button>
            <button onClick={handleClearClick} className="btn btn-primary">Clear Text</button>
            <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
            <button type="submit" onClick={titleCase} className="btn btn-primary mx-2 my-2">Title Case</button>
            <ToastContainer position="top-right"
                autoClose={2000} theme="dark"></ToastContainer>
            <h2 className='mt-4'>Text Summary</h2>
            <p>{text.split(' ').filter(function (n) { return n != '' })
                .length} Words, {text.length} Characters</p>
        </Fragment>
    )
}
