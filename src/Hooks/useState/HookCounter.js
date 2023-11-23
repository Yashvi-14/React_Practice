import React from 'react'
import { useState } from 'react'
function HookCounter() {
   const [count , setCount] = useState(0)
  return (
    <div>
      <button onClick={()=> setCount(count + 1)}>RHCount { count }</button>
    </div>
  )
}

export default HookCounter


//Don't call hooks inside loops ,conditions , or nested functions.
//only call hooks from React Functions and not just any regular javascript function.
//Basic usestate

//usestate lets you add state to functional components
//IN classes , the state is always an object but With usestate hook , the state doesnot have to be an object 
//usestate hook returns an array with 2 element first current value and second new state
//When dealing with objects or arrays alwyas make sure to first spread state and then call thes setter function