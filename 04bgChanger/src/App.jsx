import React from 'react';
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
     <div className="h-screen w-full transition-colors duration-200" 
     style = {{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12">
        <div className="flex flex-wrap justify-center bg-white px-3 py-2 rounded-xl gap-3 shadow-lg">
          <button onClick = {() => setColor("red")}
          className="outline-none text-white rounded-full px-4 py-1 shadow-lg"
           style={{backgroundColor: "red"}}>
            Red</button>

             <button onClick = {() => setColor("Green")}
             className="outline-none text-white rounded-full px-4 py-1 shadow-lg"
           style={{backgroundColor: "Green"}}>
            Green</button>

             <button onClick = {() => setColor("Blue")}
             className="outline-none text-white rounded-full px-4 py-1 shadow-lg"
           style={{backgroundColor: "Blue"}}>
            Blue</button>

             <button onClick = {() => setColor("Yellow")}
             className="outline-none text-black rounded-full px-4 py-1 shadow-lg"
           style={{backgroundColor: "Yellow"}}>
            Yellow</button>
        </div>
      </div>
        
     </div>
    </>
  )
}

export default App
