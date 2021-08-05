import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Footer from '../components/Footer'
import HamburgerMenu from 'components/HamburgerMenu'
import Navbar from '../components/Navbar'

import './Confirmation.css'

const Confirmation = () => {
  const confirmation = useSelector(store => store.guestreservation.confirmation)
  const history = useHistory()
  
  useEffect(() => {
    if (!confirmation) {
      history.push('/accomodation')
    }
  },[confirmation, history])

if (confirmation) {
  return (
    <>
     <div className="hamb-container">
        <div className="hamb-menu">
          <HamburgerMenu />
        </div>
      </div>
      <picture className="book-hero-container">
        <h1 className="book-hero-heading">WELCOME</h1>
          <img className="hero-image" src="/assets/images/cactus.jpg" alt="Hero background"/>
      </picture>
      <Navbar />
      <section className="conf-container">  
        <div className="conf-wrapper">
          <h3 className="conf-heading">Pack your bags and hit the road, we are waiting for you!</h3>
          <div className="conf-details">
            <p>Booking ID: {confirmation.accomodation.bookingid} <a href={'https://../confirmation/' + confirmation.accomodation.bookingid}>(link to booking confirmation)</a></p>
            <p>Check In: {new Date (confirmation.accomodation.startdate).toDateString()}</p>
            <p>Check Out: {new Date (confirmation.accomodation.enddate).toDateString()}</p>
            <p>Room: {confirmation.accomodation.roomtype}</p>
            <p>Nr of guests: {confirmation.accomodation.pax}</p>
            <p>First Name: {confirmation.details.firstname}</p>
            <p>Last Name: {confirmation.details.lastname}</p>
            <p>Email: {confirmation.details.email}</p>
            <p>Phone Number: {confirmation.details.phonenumber}</p>
          </div>
        </div> 
      </section> 
      <Footer />
   </>
 )
} else {
  return null
}
}

export default Confirmation