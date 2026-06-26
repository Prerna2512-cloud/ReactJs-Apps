import { useState } from 'react'

const Greeting = () => {

    const [user,setUser] = useState()
    const [message, setMessage] = useState("Welcome USER")

    function handleSubmit(){
        setMessage(`Welcome ${user}`)
    }

  return (
    <>
    <div>Greeting</div>

    <input type="text" onChange={(e)=>setUser(e.target.value)} />
    <button onClick={()=>handleSubmit()}>Submit</button>
    <div className="container bg-warning text-danger">
            <h2>{message}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad ea provident reprehenderit quisquam, vel obcaecati necessitatibus odit ipsam itaque!</p>
    </div>

    </>
  )
}

export default Greeting