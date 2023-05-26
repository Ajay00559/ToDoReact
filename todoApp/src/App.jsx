import { useState } from 'react'
import './App.css'
import TodoWrapper from './Components/TodoWrapper'
import { Count } from './Components/Count'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <TodoWrapper/>
       <Count/>
    </div>
  )
}

export default App
