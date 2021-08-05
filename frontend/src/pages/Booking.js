import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
//import { useHistory } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Footer from '../components/Footer'
import HamburgerMenu from 'components/HamburgerMenu'
import Navbar from '../components/Navbar'

import './Booking.css'
import { setDefaultLocale } from 'react-datepicker';

const Booking = () => {
  const [bookings, setBookings] = React.useState([]);
  const bookingid = useParams().id;

  useEffect(() => {
      const fetchBookings = async() => {
        const response = await fetch("http://localhost:8080/mybooking/" + bookingid)
        const bookingsData = await response.json()
        setBookings([bookingsData])
      };
      fetchBookings();
    }, [])

  const useBookings = bookings.map((booking)=>{
    return <div>
              <p>{booking.bookingid}</p>
              <p>{booking.startdate}</p>
              <p>{booking.enddate}</p>
            </div>
  })

  return (
    <>
      <div>{bookings && useBookings}</div>
    </>
  )

}

export default Booking