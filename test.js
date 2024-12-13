const { useEffect } = require("react")
const { useState } = require("react")


const Counter=()=>{
    const[count,setCount]=useState=(0)
    const[isStarted,setIsStarted]=useState(false)

    useEffect(()=>{
let intervalId

        if(isStarted){

         intervalId= setInterval(()=>{
           
                setCount(count+1)
    
            },1000)
        }
          
        else{
            clearInterval(intervalId)
        }




        return ()=>clearInterval(intervalId)
       


    },[isStarted])

    const handleStart=()=>{
setIsStarted(true)
    }

    const handleStop=()=>{
setIsStarted(false)

    }
    return(
        <div>
            <h1>Value: {count}</h1>

            <button onClick={handleStop}>Stop</button>

            <button onClick={handleStart}>Start</button>


        </div>
    )
}