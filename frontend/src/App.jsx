import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Error from './Components/Error'
import Success from './Components/Success'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <BrowserRouter>
       <Routes><Route path='/' element={<Home/>} />
       <Route path='/error?' element={<Error/>} />
       <Route path='/success' element={<Success/>} />

       </Routes>
       </BrowserRouter>
      </div>
    </>
  )
}

export default App
