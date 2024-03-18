import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

///// IMPORT ///////

// layout 
import Loginpagelayout from './layouts/loginpagelayout/Loginpagelayout';
import AdminLayout from './layouts/adminLayout/AdminLayout';
import ReservedRooms from './pages/admin pages/reserved classrooms/ReservedRooms';
// admin pages
import Home from './pages/admin pages/home/Home'
import Reserve from "./pages/admin pages/reservation forms/Reserve";
import SetActivity from "./pages/admin pages/reservation forms/SetActivity";
import Confirmation from "./pages/admin pages/reservation forms/Confirmation";

// student pages
import Login from './pages/student pages/login/Login';
import SignUp from './pages/student pages/signup/SignUp';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpagelayout />} >
          <Route index element={<Login />}/>
          <Route path="Signup" element={<SignUp/>}/>
        </Route>

        {/* admin pages */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/home" element={<Home />} />
          <Route path="/admin/reserved-classrooms" element={<ReservedRooms />} />
          <Route path="/admin/reserve" element={<Reserve />} />
          <Route path="/admin/set-activity" element={<SetActivity />} />
          <Route path="/admin/reservation-confirmation" element={<Confirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
