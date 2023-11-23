import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count,setCount] = useState(0)

    // const tick=()=>{
    //     setCount(count +1)
    // }
//either specify the condition in useEffect
    // useEffect(()=>{
    //     const interval = setInterval(tick,1000)
    //     return()=>{
    //         clearInterval(interval)
    //     }
    // },[count])

    const tick=()=>{
        setCount(prevCount => prevCount +1)
    }
//Or you can set the precount one in this one the setcount will keep the track of count value so we don't have to specify the dependency.
    
//whenever you want to use function in useeffect define itinside useeffect so you don't forget to specify the props.
useEffect(()=>{
        const interval = setInterval(tick,1000)
        return()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div>
     <h1>{count}</h1> 
    </div>
  )
}

export default IntervalHookCounter
