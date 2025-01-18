
import { useState, useEffect, useRef } from 'react';
import NewComponent from './concepts/useEffect/NewComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NewComponent />
    </>
  )
}

export default App
