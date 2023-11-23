import React from 'react'

const User = (props) => {
    console.warn(props.data.name)
    const  {data}= props
  return (
    <>
 <div>User</div>
    <h4>{data.name}</h4>

    </>
   
  )
}

export default User