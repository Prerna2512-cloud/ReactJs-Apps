import { useState } from 'react'
import { PiMoonStarsLight } from "react-icons/pi";
import { FaSun } from "react-icons/fa";

const Counter = () => {

    // let count = 0
    const [count, setCount] = useState(100)
    const [theme, setTheme] = useState('light')

    function handleIncreament(){
        // count =count+1
        setCount(count=> count+1)
        console.log(count, "Count")
    }
    // if(count == 0){
    //     console.log("Disable Reset")
    // }else{
    //     console.log("Can Reset")
    // }

    // count == 0 ? console.log("Disable Reset") : console.log("Can reset")

    // count == 0 && console.log("Disables Reset")
    function handleTheme(){
        if(theme == 'light'){
        setTheme('dark')
        }else{
            setTheme('light')
        }
    }

  return (
    <>
    <div className={`container-fluid pt-5
        ${theme == 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}
        `} style={{height:"100vh"}}>
    <button onClick={()=>handleTheme()} 
        style={{border:0}}
        >
        
       { theme == 'dark' ?<PiMoonStarsLight /> : <FaSun />}
        
    </button>

    <h1 className='text-center'>Counter</h1>
    <h3 className='text-center'>COUNT : {count} </h3>
    <div className="container text-center">
        <button className='btn btn-primary me-2' onClick={()=>handleIncreament()}>+</button>
        <button className='btn btn-primary' onClick={()=>setCount(prev=>prev-1)}>-</button>
        <button className={`btn btn-danger ${count == 0 && 'disabled'}`} onClick={()=>setCount(0)}>Reset</button>
    </div>
    </div>
    </>
  )
}
export default Counter