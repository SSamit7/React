import { useState , useCallback ,  useRef ,useEffect} from 'react'


import "tailwindcss";
import './App.css'

function App() {

  const [length , setLength ] = useState(8);
  const [numberAllowed , setnumberAllowed ] =useState(false);
  const [SpecialCharaterAllowed , setSpecialCharacterAlloweed] =useState(false);
  const[Password ,Setpassword]= useState("");

//useRef
const passwordRef = useRef(null);

  const PasswordGenerator =useCallback(()=>{
    let pass ="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed)  str +="0123456789";
    if(SpecialCharaterAllowed) str +="!@#$%^&*()_+~`|}{[]:;?><,./-=";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()* str.length );
      pass +=str.charAt(char);
      
    }
    Setpassword(pass);
  },[length,numberAllowed,SpecialCharaterAllowed,Setpassword]);


  const CopytotheClipboard = useCallback(() =>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(Password)
  },[Password]);



  useEffect(()  =>{
    PasswordGenerator() },[length,numberAllowed,SpecialCharaterAllowed,PasswordGenerator]);
  return (
    <>
     
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-800'>
      <div className='flex flex-col  gap-4 py-4'>
        <input
         type="text" 
         value={Password}
         placeholder='Password'
         readOnly
         ref={passwordRef}/>
         <button
         className='bg-blue-600 hover:bg-blue-700 py-2 rounded-md'
         onClick={CopytotheClipboard}
         >
          
          
          
          Copy</button>
        </div>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <input type="range"
          min={4}
          max={100}
          
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}
          
           />
          <label>Length : {length}</label>
     </div>
      <div className='flex justify-between items-center'>
        <label>Include Numbers</label>
        <input 
        type="checkbox"
        checked={numberAllowed}
        onChange={(e)=>setnumberAllowed(e.target.checked)}


          />
      </div>
      <div className='flex justify-between items-center'>
        <label>Include Special Characters</label>
        <input 
        type="checkbox"
        checked={SpecialCharaterAllowed}
        onChange={(e)=>setSpecialCharacterAlloweed(e.target.checked)}

          />
      </div>
     </div>
     </div>
    </>
  )
}

export default App
