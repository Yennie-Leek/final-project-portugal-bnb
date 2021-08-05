import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import guestreservation from './reducers/reservation'

import About from './pages/About'
import Accomodation from './pages/Accomodation'
import Activities from './pages/Activities'
import Book from './pages/Book'
import Confirmation from './pages/Confirmation'
import Booking from './pages/Booking'
import Home from './pages/Home'
import Summary from './pages/Summary'

const reducer = combineReducers({
  guestreservation: guestreservation.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/accomodation" component={Accomodation}/>
          <Route exact path="/book" component={Book} />
          <Route exact path="/summary" component={Summary} />
          <Route exact path="/confirmation" component={Confirmation} />
          <Route exact path="/confirmation/:id" component={Booking} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </Provider>
   
  )
}

