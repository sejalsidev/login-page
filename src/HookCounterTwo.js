import React, { useState } from 'react'

const HookCounterTwo = () => {
    const initalizeCount = 0 
    const [count ,setCount] = useState(initalizeCount)
  return (
    <div>
        count:{count}
        <button onClick={() =>setCount(initalizeCount)}>Reset</button>
        <button onClick={() =>setCount(count + 1)}>Increment</button>
        <button onClick={() =>setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default HookCounterTwo