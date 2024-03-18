import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Loginpagelayout from './layouts/loginpagelayout/Loginpagelayout';
import Login from './pages/student pages/login/Login';
import SignUp from './pages/student pages/signup/SignUp';
import Home from './pages/admin pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpagelayout />} >
          <Route index element={<Login />}/>
          <Route path="Signup" element={<SignUp/>}/>
        </Route>
        <Route path="/admin/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
