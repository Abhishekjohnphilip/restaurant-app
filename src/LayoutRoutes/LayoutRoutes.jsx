import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../componenets/Header/Header'
import Footer from '../componenets/Footer/Footer'
import Dishes from '../pages/Dishes/Dishes'
import Booking from '../pages/Booking/Booking'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import NotFound from '../pages/NotFound/NotFound'
import { Contact, Guides, Services, TermsAndConditions, Partnership,} from '../pages/Contact/Contact'
import Location from '../pages/Location/Location'
import OrderPage from '../pages/Order/OrderPage'
import PaymentPage from '../pages/Payment/PaymentPage'
import UnderConstruction from '../pages/UnderConstruction/UnderConstruction'

function LayoutRoutes() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dishes" element={<Dishes/>} />
        <Route path="/services" element={<Booking/>} />
        <Route path="/aboutus" element={<About/>} />
        {/* <Route path="/contact" element={<Contact/>} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/terms" element={<Term />} />
        <Route path="/partnership" element={<Partnership />} /> */}
         <Route path="/" element={<Contact />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/services" element={<Services />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/location" element={<Location/>} />
              <Route path="/order" element={<OrderPage/>} />
              <Route path="/payment" element={<PaymentPage/>} />
              <Route path="/underCtn" element={<UnderConstruction/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default LayoutRoutes