import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");

  //useRef 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&*(){}|~`";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setpassword(pass)

  }, [length, numberallowed, charallowed, setpassword])

  const copyPasswordtoclipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => { passwordGenerator() }, [length, numberallowed, charallowed, passwordGenerator]

  )




  return (
    <>


      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-4 my-8 text-orange-600 bg-blue-900'>
        <h1 className='text-center my-2 text-lg'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>

          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder="Password"
            readOnly
          ref = {passwordRef}
          />

          <button 
          onClick={copyPasswordtoclipboard}
          className='outline-none bg-blue-500 text-white px-3 py=0.3 shrink-0
         
          '>Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={100} value={length} className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberinput"
              onChange={() => {
                setnumberallowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberinput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterinput"
              onChange={() => {
                setcharallowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterinput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
