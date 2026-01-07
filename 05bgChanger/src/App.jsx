import { useState } from 'react'

function App() {
  const  [color , setcolor] = useState("red")

  return (
    <>
      
      <div className='w-full h-screen  duration-200'
        style={{backgroundColor: color}}>
     
         
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
      
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
       <button onClick={()=>setcolor("white")}>White</button>
      </div>
       <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-red-700-500 px-3 py-2 rounded-3xl'>
        <button onClick={()=>setcolor("red")}>Red</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-yellow-300 px-3 py-2 rounded-3xl'>
        <button onClick={()=>setcolor("yellow")}>Yellow</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-green-500 px-3 py-2 rounded-3xl'>
        <button onClick={()=>setcolor("green")}>Green</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-purple-600 px-3 py-2 rounded-3xl'>
        <button onClick={()=>setcolor("purple")}>Purple</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-orange-400 px-3 py-2 rounded-3xl'>
        <button onClick={()=>setcolor("orange")}>Orange </button>
      </div>

     </div>
      
     </div>
    </>
  )
}

export default App
