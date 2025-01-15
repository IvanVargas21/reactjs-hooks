import { useState } from 'react';
// import MyComponent from './concepts/onchange/MyComponent.jsx'
import Counter from './concepts/state/Counter.jsx'
// import ColorPicker from './concepts/colorpicker/ColorPicker';
import MyComponent from './concepts/updateObject/MyComponent.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MyComponent/> */}
      {/* < Counter /> */}
      {/* <MyComponent/> */}
      {/* <ColorPicker /> */}
      <MyComponent/>
    </>
  )
}

export default App
