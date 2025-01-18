
import { useState, useEffect, useRef } from 'react';
// import NewComponent from './concepts/useEffect/NewComponent';
import StopWatch from './concepts/StopWatch/StopWatch';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StopWatch />
    </>
  )
}

export default App
