import React,{useState} from 'react'
export default function TextForm(props) {
    const[text,setText]=useState('') 
    const handleUpclick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");

    }
    const handleLowclick=()=>{
        
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success");
    }

    const handleClearClick=()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text clear","success");
    }
    const handleOnChange=(event)=>{
        
        setText(event.target.value)
    }

    const handleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    return (
        <>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#303e70':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
            <button disabled={text.length===0} style={{color: props.mode==='dark'?'white':'black'}} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to uppercase</button>
            <button disabled={text.length===0} style={{color: props.mode==='dark'?'white':'black'}} className="btn btn-primary mx-3 my-1" onClick={handleLowclick}>Convert to lowercase</button>
            <button disabled={text.length===0} style={{color: props.mode==='dark'?'white':'black'}} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} style={{color: props.mode==='dark'?'white':'black'}} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2> Text summary</h2>
            <p>
                {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
            </p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h3>Preview</h3>
            <p>
                {text.length>0?text:"Enter something in textbox to preview"}
            </p>
        </div>

    </>
  )
}
    
