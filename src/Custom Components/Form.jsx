import React from 'react'
import {useState} from 'react';

function Form(props) {
    const eventHandlerOne = () =>{
        console.log("This is Handler which fires in btn clicked button ," + firstValue);
        // updatedValue(Text.toUpperCase)
        const storedValue = firstValue.toUpperCase()
        updatedValue(storedValue);
    }

    const changehandler = (event) =>{
        console.log("Changehandler Event Call");
        updatedValue(event.target.value);
    }


    const [firstValue, updatedValue] = useState("");
    // const [count, setCount] = useState(0);
    return (
        <div className="container">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <label htmlFor="box" className="form-label"></label>
                <textarea className="form-control" value={firstValue} placeholder="Write Here Something!!!" id="box" onChange={changehandler} rows="3"></textarea>
                <p>{props.thank}</p>
                <button className="btn btn-primary" onClick={eventHandlerOne}>Change To Uppercase</button>
            </div>
        </div>
    )
}

export default Form
