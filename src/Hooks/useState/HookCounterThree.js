import React, { useState } from 'react'

function HookCounterThree() {
const [name,setName]=useState({firstName:'',lastName:''})

  return (
    <div>
      <form>
      <br/>
        
      <label>FirstName</label>
        <input type='text' 
        value={name.firstName} 
        placeholder='firstName'
        onChange={e => setName({...name ,firstName: e.target.value})}></input>
        
        <br/>
        <br/>
        <label>LastName</label>
        <input type='text'
        placeholder='lastName'
        value={name.lastName} 
        onChange={e => setName({ ...name ,lastName: e.target.value})}></input>
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
      </form>
    </div>
  )
}

export default HookCounterThree
//usestate with object