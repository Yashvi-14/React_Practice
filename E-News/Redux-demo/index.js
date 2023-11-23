//Action -the only way application can interact with store
//Action is an object with type property
//Action creater is a function that returns an action

//As this is a simple node app we will use require to inport redux
const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


const BUY_CAKE ='BUY_CAKE'
const BUY_ICECREAM ='BUY_ICECREAM'

function buyCake()
{
    return{
        type:BUY_CAKE,
        info:'First redux action',
    }
    
}

function buyIcecream()
{
    return{
        type:BUY_ICECREAM,
        info:'First redux action',
    }
    
}

//Reducers specify how the applications state changes in response to actions sent to store
//(previousState,action)=>newState

const initialCakeState={
    numOfCakes:10
   
}
const initialIceCreamState={
    numOfIcecreams:20
}

const cakeReducer =(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state, //make a copy of state object using spread operator than only update the number of cake
            numOfCakes:state.numOfCakes - 1
        }

        default: return state
    }
}


const iceCreamReducer =(state=initialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state, //make a copy of state object using spread operator than only update the number of cake
            numOfIcecreams: state.numOfIcecreams - 1

        }
        default: return state
    }
}
// Redux-store - One Store for entire application
//Responsibilities  --Holds Application State
//Allow access to state via getState()
//Allows state to be updated via dispatch(action) 
//Registers listeners via subscribe(listener)

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const store = createStore(rootReducer , applyMiddleware(logger)); // Pass the reducer function to createStore
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe()



//Actions
// Synchronous Actions 
// --As soon as an action was dispatched , the state was immediately updated   
//Async Actions
//Asynchronous API calls to fetch data from an end point and use that data in your application 