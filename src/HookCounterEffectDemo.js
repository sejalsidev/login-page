import React, { useEffect, useState } from 'react'

const HookCounterEffectDemo = () => {
    const[count,setCount]=useState(0)
    useEffect(() =>{
        document.title =`you click ${count} times`
    })

  return (
    <div>
        <button onClick={() => setCount(count + 1 )}>click {} times</button>
    </div>
  )
}

export default HookCounterEffectDemo