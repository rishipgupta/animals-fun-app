import React from 'react'
import { useState } from 'react';


const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>Add Animal</button>
      </div>
      <div>
        <h2>Number of animals: {count}</h2>
      </div>
    </div>
  )
}

export default App
