import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../componenets/Header/Header'
import Footer from '../componenets/Footer/Footer'
import Dishes from '../pages/Dishes/Dishes'
import Booking from '../pages/Booking/Booking'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import NotFound from '../pages/NotFound/NotFound'

function LayoutRoutes() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dishes" element={<Dishes/>} />
        <Route path="/services" element={<Booking/>} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default LayoutRoutes