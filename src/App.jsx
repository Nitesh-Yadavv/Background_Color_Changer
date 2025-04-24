import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen flex justify-center items-end" style={{backgroundColor:color}}>
        <div className="  w-4/5 h-10 bg-[#EFF2F1] mb-10 rounded-2xl flex justify-evenly gap-2 items-center">
          <button onClick={()=>setColor("#EE6352")} className="bg-[#EE6352] w-20 h-8 rounded-md ">Red</button> 
          <button onClick={()=>setColor("#6B9AC4")} className="bg-[#6B9AC4] w-20 h-8 rounded-md ">Blue</button>
          <button onClick={()=>setColor("#97D8C4")} className="bg-[#97D8C4] w-20 h-8 rounded-md ">Green</button>
          <button onClick={()=>setColor("#F4B942")} className="bg-[#F4B942] w-20 h-8 rounded-md ">Orange</button>
        </div>
    </div>
  )
}

export default App
