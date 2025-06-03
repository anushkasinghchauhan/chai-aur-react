import React from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const copyPasswordOnClipboard = useCallback(() => {
     passwordRef.current?.select();
    //  passwordRef.current?.setSelectionRange(0,3);
     window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed)  str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);


  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full my-8 mx-auto max-w-md shadow-md
       rounded-lg px-4 py-3 text-orange-500 bg-gray-800">
        <h1 className="text-white text-xl my-3 text-center">Password Generator</h1>
       <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input  type="text" value={password} className="outline-none
         bg-amber-50 w-full py-1 px-3" 
        placeholder="Password" readOnly  ref={passwordRef}/>
        <button onClick={copyPasswordOnClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5
         shrink-0">Copy</button>
       </div>

       <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
        /> 
        <label htmlFor="characterInput">Characters</label>
      </div>

     {/* Project completed */}
     
       </div>

       </div>

    </>
  )
}

export default App
