import React from 'react';
import {useState} from 'react';


export default function MastiwithStates() {
    const [checkOne , CheckTwo] = useState('Value First or before updation!!')
    const buttonClick = () =>{
        console.log('Hello ' + checkOne);
        const finalUpdatedValue = checkOne.toUpperCase();
        CheckTwo(finalUpdatedValue);
    }
    const changehandlerTwo = (update) => {
        CheckTwo(update.target.value)
    }
  return (
    <div>
      <textarea className="form-control" value={checkOne} placeholder="Write Here Something!!!" id="box" onChange={changehandlerTwo} rows="3"></textarea>
          <p>{checkOne}</p>
      <button className="btn btn-primary" onClick={buttonClick}>Change To Uppercase</button>
    </div>
  )
}


// export MastiwithStates;
