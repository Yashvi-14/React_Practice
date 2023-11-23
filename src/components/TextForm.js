import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick =()=>{
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
  }
  
const handleLowClick = ()=>{
  let newText = text.toLowerCase();
  setText(newText);
}

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
    
};

const handleClearText = ()=>{
  let newText = ''
  setText(newText);
}
    

const [text, setText] = useState('');
    

  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea 
        className="form-control"  
        value={text} 
        rows="6"
        onChange={handleOnChange}>
        </textarea>
        </div>
        <button 
        className='btn btn-primary mx-1' 
        onClick={handleUpClick}>
        Convert to UpperCase
        </button>
        
        <button 
        className='btn btn-primary mx-1' 
        onClick={handleLowClick}>
        Convert to LowerCase
        </button>

        <button 
        className='btn btn-primary mx-1' 
        onClick={handleClearText}>
        Clear Text
        </button>

    </div>
    <div className='container my-3'>
      <h1>You Text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read </p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
