import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpclick = () => {
        let newtext= text.toUpperCase ()
        settext(newtext)
        props.showAlert("converted to upper case" , "success")
    }

    const handleLoclick = () => {
        let newtext= text.toLowerCase ()
        settext(newtext)
        props.showAlert("Converted to lower case" , "success")
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
            props.showAlert("Started! click again the button to stop" , "success")
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak") {
                window.speechSynthesis.cancel()
                props.showAlert("Stoped", "success")
            }
        }
    }

    function copyText(){   
       navigator.clipboard.writeText( text); 
       props.showAlert("Copied to clipboard", "success");
    }

    const toSentenceCase = () => {
        let newText = text.replaceAll('.',"\n");
        settext(newText);
        props.showAlert("Converted to Sentence case" , "success")
    }

    const handleCapitalize = () => {
            let newtext = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
            settext(newtext);
            props.showAlert("Converted to title case" , "success")
       }

    const handleExtraSpaces = ()=>{
       let newtext = text.replace(/\s+/g, ' ').trim();
        settext(newtext)
        props.showAlert("Removed extra spaces" , "success")
        }

     const downloadTxtFile = () => {
            const element = document.createElement("a");
            const file = new Blob([text], {
              type: "text/plain"
            });
            element.href = URL.createObjectURL(file);
            element.download = "myFile.txt";
            element.click();
    }
    
    const readTxt = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function(event){
            settext(event.target.result);
        };
        reader.readAsText(file);
    }

    const handleClearclick = () => {
        let newtext= ''
        settext(newtext)
        props.showAlert("Cleared all text" , "success")
    }

    const handleOnChange = (event) => {
        settext(event.target.value)
    }

    const[text, settext] = useState('');
 
    return (
        <>
    <div className='container' style={{color: props.mode === 'light'?'black':'white'}}>
    <h1>{props.heading}</h1>

    <div className="mb-3">

    <textarea type="email" className="form-control" 
        style={{backgroundColor: props.mode === 'light'?'white':'#2b1f36',color: props.mode === 'light'?'black':'white'}}
        value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter the text here'/>

    </div>
    <input type="file" className="btn btn-secondary" id="btnchoose" accept="text/plain" onChange = {readTxt}/>
    <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpclick}>Convert to upper case</button>
    <button disabled={text.length === 0} className="btn btn-primary" onClick={handleLoclick}>Convert to lower case</button>
    <button disabled={text.length === 0} className="btn btn-primary" onClick={handleExtraSpaces}>Remove extra spaces</button>
    <button disabled={text.length === 0} className="btn btn-primary" onClick={handleCapitalize}>Capitalize for title case</button>
    <button disabled={text.length === 0} className="btn btn-primary" onClick={toSentenceCase}>Sentence case</button>
    <button disabled={text.length === 0} className="btn btn-warning" onClick={speak} id="toggle" type="submit">Speak</button>
    <button disabled={text.length === 0} className="btn btn-success" onClick={copyText} type="submit">Copy text</button>
    <button disabled={text.length === 0} className="btn btn-success" onClick={downloadTxtFile}>Download as file</button>
    <button disabled={text.length === 0} className="btn btn-danger" onClick={handleClearclick}>Clear all</button> 
    </div>

    <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
        <h1>Summery of your text</h1>
        <p>{((text.trim().split(" ")).filter(function (element) {return element !== "";})).length} words and {text.trim().length} characters </p>
        <p>{0.008 * text.trim().split(" ").filter(function (element) {return element !== "";}).length} minutes to read</p>
        <h2>Preview as a paragraph</h2>
        <p>{text.length > 0 ? text:'Nothing to preview!'}</p>
    </div>
    </>
  )
    }

