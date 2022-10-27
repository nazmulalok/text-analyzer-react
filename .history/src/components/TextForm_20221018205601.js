import React from 'react'

export default function TextForm(props) {
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
        </>
    )
}
