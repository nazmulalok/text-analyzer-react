import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary me-3">Convert to Uppercase</button>
            <button onClick={handleLowClick} className="btn btn-primary">Convert to Lowercase</button>
            <h2 className='mt-4'>Text Summary</h2>
            <p>{text.split(" ").length} Words, {text.length} Characters</p>
            <p>You should read in {0.008 * text.split(" ").length}</p>
        </>
    )
}
