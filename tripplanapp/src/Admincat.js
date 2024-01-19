import { Button } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Admincat extends Component {
  render() {
    return (
      <>
       <Link to="/Showdata"><Button variant="contained">Show Hotel Booking List</Button></Link>
      </>
    )
  }
}
