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

    const toTitleCase = (s) => {
        if (typeof (s) === 'string' && s.length > 0) {
            const words = s.split(' ')
            if (Array.isArray(words) && words.length > 0) {
                if (words.length === 1) {
                    const word = words[0]
                    const matches = word.charAt(0).match(/\w+/i)
                    const lines = word.split('\n')
                    if (Array.isArray(lines) && lines.length > 1) {
                        return lines.map(line => {
                            return toTitleCase(line)
                        }).join('\n')
                    } else if (Array.isArray(matches)) {
                        return word.split('').map((c, i) => {
                            if (i === 0) {
                                return c.toUpperCase()
                            }
                            return c.toLowerCase()
                        }).join('')
                    } else {
                        return word.charAt(0).concat(toTitleCase(word.slice(1)))
                    }
                } else {
                    return words.map(word => toTitleCase(word)).join(' ')
                }
            }
        }
        return ''
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');


    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>

            </div>
            <button onClick={handleUpClick} className="btn btn-primary me-3">Convert to Uppercase</button>
            <button onClick={handleLowClick} className="btn btn-primary me-3">Convert to Lowercase</button>
            <button onClick={handleCopyClick} className="btn btn-primary me-3">Copy</button>
            <button onClick={handleClearClick} className="btn btn-primary">Clear Text</button>
            <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
            <ToastContainer position="top-right"
                autoClose={2000} theme="dark"></ToastContainer>
            <h2 className='mt-4'>Text Summary</h2>
            <p>{text.split(" ").length} Words, {text.length} Characters</p>
            <p>You should read in {0.008 * text.split(" ").length} Minutes</p>
            <h2 className='my-4'>Preview</h2>
            <p>{text}</p>
        </>
    )
}
