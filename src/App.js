import React ,{useReducer} from 'react'
import CounterThree from './Hooks/useReducer/CounterThree'
import ComponentA from './Hooks/useContext_UseReducer/ComponentA'
import ComponentB from './Hooks/useContext_UseReducer/ComponentB'
import ComponentC from './Hooks/useContext_UseReducer/ComponentC'

export const CountContext = React.createContext()
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

function App() {
  const [count,dispatch]= useReducer(reducer,initialState)
  return (
    <div>
  
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </div>
  )
}

export default App

