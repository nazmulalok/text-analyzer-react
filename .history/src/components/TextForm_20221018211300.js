import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="my-box" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary">Convert to Uppercase</button>
        </>
    )
}
