import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase clicked");
        setText("You have clicked")
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary">Convert to Uppercase</button>
        </>
    )
}
