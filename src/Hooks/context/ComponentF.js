import React from 'react'
import { ChannelContext, UserContext } from '../../App'
function ComponentF() {
   
  return (
    <div>
      Componet - Hello 
      
      <UserContext.Consumer>
        {
            user =>{
                console.log(user);
                return (
                   <ChannelContext.Consumer>
                   {
                    channel =>{
                        return(
                            <div> User Context value {user} channel Contect {channel}</div> 
                        )
                       
                    }
                   }

                    </ChannelContext.Consumer> 
                )
            }
        }
      </UserContext.Consumer>
    </div>
  
  )
}

export default ComponentF


//context

//App.js Code for Context

// import React from 'react';
// import './App.css';
// import ComponentC from './Hooks/context/ComponentC';


// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()
// function App() {
//   return (
//     <>  
//     <UserContext.Provider value ={'Yashvi'}>
//     <ChannelContext.Provider value={'Hello Worldd'}>
//     <ComponentC/>
//     </ChannelContext.Provider>
//     </UserContext.Provider>
//     </>
//   );
// }
// export default App;
