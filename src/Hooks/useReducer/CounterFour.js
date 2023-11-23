
//useReducer is a Hook that is used for state management
//Alternative to useState //usestate is built using useReducer

import React, { useReducer } from 'react'
import {Button} from 'antd'

const initialState =0
const reducer =(state,action)=>{
    switch(action){
        case'increment':
        return state + 1

        case'decrement':
        return state - 1

        case'reset':
        return initialState
        
        default:
           return state
    }
}
function CounterFour() {
    const [count,dispatch] = useReducer(reducer,initialState)
    const [countTwo,dispatchTwo] = useReducer(reducer,initialState)
  return (
    <>
    <div>
    <div>Count -{count}</div>
      <Button type='primary' onClick={()=>dispatch('increment')}>Increment</Button>
      <Button  onClick={()=>dispatch('decrement')}>Decrement</Button>
      <Button type='dashed' onClick={()=>dispatch('reset')}>Reset</Button>
    </div>

    <div>
    <div>Count -{countTwo}</div>
      <Button type='primary' onClick={()=>dispatchTwo('increment')}>Increment</Button>
      <Button  onClick={()=>dispatchTwo('decrement')}>Decrement</Button>
      <Button type='dashed' onClick={()=>dispatchTwo('reset')}>Reset</Button>
    </div>
    </>
  )
}

export default CounterFour


//Multiple useReducers