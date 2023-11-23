import React ,{useReducer} from 'react'
import {Button} from 'antd'
const initialState ={
    firstCounter :0,
    secondCounter :10
}


const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
            return{
                ...state, firstCounter:state.firstCounter + action.value
            }
            case'decrement':
        return  { ...state,firstCounter :state.firstCounter - action.value}
        case 'increment2':
            return{
                ...state, secondCounter:state.secondCounter + action.value
            }
            case 'decrement2':
                return{
                    ...state, secondCounter:state.secondCounter + action.value
                }
                case'reset':
                return initialState
                
                default:
                   return state
    }
}


function CounterThree() {
    const [count,dispatch] = useReducer(reducer,initialState)
    return (
      <div>
      <div>Count -{count.firstCounter}</div>
      <div>Count -{count.secondCounter}</div>
        <Button type='primary' onClick={()=>dispatch({type : 'increment' ,value:1})}>Increment</Button>
        <Button  onClick={()=>dispatch({type : 'decrement',value:1 })}>Decrement</Button>
        <Button  onClick={()=>dispatch({type : 'increment2' ,value:2})}>Increment</Button>
        <Button  onClick={()=>dispatch({type : 'decrement2' ,value:2})}>Decrement</Button>
        <Button type='dashed' onClick={()=>dispatch({type : 'reset' })}>Reset</Button>
      </div>
    )
  }

export default CounterThree
