// import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from "./page/auth/Login"
import Home from "./page/Home"

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  )
}
