import { useState } from "react"
import logo from './assets/Bangtan.png';
const InputShortener = ({setInputValue}) => {

  const [value,setValue] = useState("")

  const handleClick = () =>{
    setInputValue(value);
    setValue("")
  }

  return (
    <div className="inputContainer">
        <h1><img className="icon" src={logo} alt="Logo" /><div>URL <span>  Shortener</span></div></h1>
        <div>
            <input 
            type={"text"} 
            placeholder="Paste a link to shorten it"
            value={value}
            onChange={(e) =>setValue(e.target.value)}
            />
            <button onClick={handleClick}>shorten</button>
        </div>
    </div>
  )
}

export default InputShortener