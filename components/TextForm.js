import React, {useState} from 'react'
export default function TextForm
(props) {
  const [text, setText] = useState("Enter Text Here")

  const handleUpClick = ()=>{
    console.log( " "+ text)
    // setText("mar ja" +text)
    let newText = text.toUpperCase();
    setText(newText);
    props.alerti("you capatallize the content","success")
    document.title = "TextUtils-Converted in UpperCase"
    
  }
  const lowerMe = ()=>{
    console.log(" "+ text)
    // setText("mar ja" +text)
    let newText = text.toLowerCase();
    setText(newText);
    props.alerti("convert to lower case","success")
    document.title = "TextUtils-Converted in LowerCase"

    
  }
  const HandleOnChange = (event)=>{
    setText(event.target.value);

  }


  return (
    <div className='container my-3' style={{color:props.mode === 'dark'?'white':'black'}}>
      <form>
        <h3 style={{color:props.mode === 'dark'?'white':'black'}}>{props.heading}</h3>
  <div class="mb-3">
    {/* <label for="exampleInputEmail1" class="form-label">Em</label> */}
    <textarea type="email" class="form-control" value={text} style = {{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode === 'dark'?'white':'black'}} onChange = {HandleOnChange} id="exampleInputEmail1" aria-describedby="emailHelp" rows = "8"/>
  </div>
  
  <button type="submit" onClick={handleUpClick} class="btn btn-primary">Convert to UpperCase</button>
  <button type="submit" onClick={lowerMe} className="btn btn-primary mx-3" >Convert to LowerCase</button>
</form>

<h3>Preview</h3>
<p>{text.length>0?text:"Enter someting in the box to preview here"}</p>
    </div>
  )
}
