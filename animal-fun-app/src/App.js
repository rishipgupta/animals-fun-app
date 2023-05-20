import React from 'react'

const handleClick = () => {
  console.log("Click Event Happened")
}

const App = () => {
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  )
}

export default App
