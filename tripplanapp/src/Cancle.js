import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Cancle() {
  return (
    <>
    <h1>Cancel yours Trip's</h1>
    <Link to="/Deletebus"><Button variant="contained">Bus Ticket Cancel</Button></Link>
    </>
  )
}

export default Cancle