import React ,{useReducer}from 'react'
import {Button} from 'antd'
import { type } from '@testing-library/user-event/dist/type'

const initialState ={
    firstCounter : 0
}
const reducer =(state,action)=>{
    switch(action.type){
        case'increment':
        return {firstCounter :state.firstCounter + 1}

        case'decrement':
        return  {firstCounter :state.firstCounter - 1}

        case'reset':
        return initialState
        
        default:
           return state
    }
}
function CounterTwo() {
    const [count,dispatch] = useReducer(reducer,initialState)
    return (
      <div>
      <div>Count -{count.firstCounter}</div>
        <Button type='primary' onClick={()=>dispatch({type : 'increment' })}>Increment</Button>
        <Button  onClick={()=>dispatch({type : 'decrement' })}>Decrement</Button>
        <Button type='dashed' onClick={()=>dispatch({type : 'reset' })}>Reset</Button>
      </div>
    )
  }
  

export default CounterTwo

//useReducer with state and actions as objects
