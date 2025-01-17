import ComponentA from './concepts/useContext/ComponentA';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponentA />
    </>
  )
}

export default App
