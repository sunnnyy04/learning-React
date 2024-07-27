import { useState ,useCallback,useEffect,useRef} from 'react'
function App() {
  const [length, setLength] = useState(8);
  const [number,setNumber]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("")
  //useref
  const passwordRef=useRef(null)
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str+="1234567890"
    if(charAllowed) str+="!@#$%^&*()_+{}~`"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    
    setPassword(pass)
  },[length,number,charAllowed,setPassword])
  const copyPasswordtoClipboard= useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,charAllowed,setPassword,passwordGenerator])
  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-500'>
          <h1 className='text-center text-white my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" 
            placeholder='Password'
             value={password}
              className='outline-none w-full py-1 px-3'
               readOnly
               ref={passwordRef}
               />
            <button 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordtoClipboard}>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
               />
               <label htmlFor="">length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={number}
              id='numberInput'
              onChange={()=>{
                setNumber((prev)=>!prev)
              }}
               />
               <label htmlFor="">Numbers:{number}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={charAllowed}
              className='cursor-pointer'
              onChange={()=>{setCharAllowed((prev)=>!prev)}}
               />
               <label htmlFor="">Character:{charAllowed}</label>
            </div>
          </div>

        </div>
    </>
  )
}

export default App
