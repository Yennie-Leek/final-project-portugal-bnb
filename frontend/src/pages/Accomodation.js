import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import reservation from 'reducers/reservation'

import Datepicker from 'components/Datepicker'
import DropdownRoom from '../components/DropdownRoom'
import DropdownPax from '../components/DropdownPax'
import Button from '../components/Button'
import Footer from '../components/Footer'

const Accomodation = () => {
  const [roomType, setRoomType] = useState('')
  const [pax, setPax] = useState('')
  const [startDate, setStartDate] = React.useState()
  const [endDate, setEndDate] = React.useState()
  
  const history = useHistory()
  const dispatch = useDispatch()

  const onAccomodationConfirm = () => {
    dispatch(reservation.actions.setRoomtype(roomType))
    dispatch(reservation.actions.setPax(pax))
    dispatch(reservation.actions.setStartdate(startDate.toString()))
    dispatch(reservation.actions.setEnddate(endDate.toString()))

    localStorage.setItem('guestreservation', JSON.stringify({
        startDate: startDate.toString,
        endDate: endDate.toString,
        roomType: roomType,
        pax: pax,   
      })
    )

    history.push("/book")
  }

  return (
    <div>
      <Datepicker 
        startDate={startDate} 
        setStartDate={setStartDate} 
        endDate={endDate} 
        setEndDate={setEndDate}
      />
      <DropdownRoom roomType={roomType} setRoomType={setRoomType}/>
      <DropdownPax pax={pax} setPax={setPax}/>
      <Button handleClick={onAccomodationConfirm} label="Check availability"/>
      <Footer />
    </div>
  )
}

export default Accomodation 