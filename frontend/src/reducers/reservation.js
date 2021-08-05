import { createSlice } from '@reduxjs/toolkit'

  const initialState = localStorage.getItem('guestreservation') 
  ? {
      accomodation: {
        bookingid: JSON.parse(localStorage.getItem('guestreservation')).bookingid,
        startdate: JSON.parse(localStorage.getItem('guestreservation')).startdate,
        enddate: JSON.parse(localStorage.getItem('guestreservation')).enddate,
        roomtype: JSON.parse(localStorage.getItem('guestreservation')).roomtype,
        pax: JSON.parse(localStorage.getItem('guestreservation')).pax
      },
      details: {
        firstname: JSON.parse(localStorage.getItem('guestreservation')).firstname,
        lastname: JSON.parse(localStorage.getItem('guestreservation')).lastname,
        email: JSON.parse(localStorage.getItem('guestreservation')).email,
        phonenumber: JSON.parse(localStorage.getItem('guestreservation')).phonenumber,
      }
  }
  : {
      accomodation: {
        bookingid: null,
        startdate: null,
        enddate: null,
        roomtype: null,
        pax: null
    },   
      details: {
        firstname: null,
        lastname: null,
        email: null,
        phonenumber: null,
      },
      confirmation: null,
      errors: null
  }

const guestreservation = createSlice({
  name: 'guestreservation',
  initialState: initialState,
  reducers: {
    setBookingid: (store, action) => {
      store.accomodation.bookingid = action.payload
    },
    setStartdate: (store, action) => {
      store.accomodation.startdate = action.payload
    },
    setEnddate: (store, action) => {
      store.accomodation.enddate = action.payload
    },
    setRoomtype: (store, action) => {
      store.accomodation.roomtype = action.payload
    },
    setPax: (store, action) => {
      store.accomodation.pax = action.payload
    },
    setFirstname: (store, action) => {
      store.details.firstname = action.payload
    },
    setLastname: (store, action) => {
      store.details.lastname = action.payload
    },
    setEmail: (store, action) => {
      store.details.email = action.payload
    },
    setPhonenumber: (store, action) => {
      store.details.phonenumber = action.payload
    },
    setErrors: (store, action) => {
      store.errors = action.payload
    },
    setConfirmation: (store, action) => {
      store.confirmation = action.payload.newReservation
    }
  }
})

export default guestreservation