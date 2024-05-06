import React, { useState } from 'react'

const HookObject = () => {
    const [name,setName]=useState({firstName:'',lastName:''})
  return (
    <div>
        <input type="text" value={name.firstName} onChange={e => setName({...name,firstName:e.target.value})}/>
        <input type="text" value={name.lastName} onChange={e => setName({...name,lastName:e.target.value})}/>
        <h2>The First Name is:{name.firstName}</h2>
        <h2>The Last Name is:{name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default HookObject