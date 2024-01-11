import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log('Uppercase was clicked ' + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success")
  }

  const handleOnCange = (event)=>{
    console.log('On change')
    setText(event.target.value);  // used to write in text box if something is already present 
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success")
  }

  const handleClear = ()=>{
    let newText = ('');
    setText(newText)
    props.showAlert("Text has cleared","success")
  }

  const handleCopy = ()=>
  {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text has copied","success")
  }

  const handleExtraSpaces = ()=>
  {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed","success")
  }

  const [text, setText] = useState('Enter text here')

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading }</h1>
       
<div className="mb-3" >
<textarea className="form-control" value={text} onChange={handleOnCange} style={{backgroundColor: props.mode==='dark'?'#064a86':'white', color: props.mode === 'dark'?'white':'black'} } id="myBox" rows="8"></textarea>
</div>

<button className='bnt btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleClear}>Clear</button>
<button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
<button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    
    </div>

    <div className='container my-3'style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary </h1>
        <p>{text.split(' ').length} word and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
  )
}
