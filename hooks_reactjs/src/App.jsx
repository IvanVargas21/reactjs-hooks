import MyComponent from './concepts/updateArrayOfObjectsInState/MyComponent.jsx'

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />
    </>
  )
}

export default App
