import { Button } from '@mui/material'
import React from 'react'

export default function MuiButton() {
  return (
    <div>
      <Button variant='text' color='warning'>Text</Button>
      <Button variant='contained' color='error'>Contained</Button>
      <Button variant='outlined' color='success'>Outline</Button>
      <Button variant='outlined' color='secondary'>Outline</Button>
      <Button variant='outlined' sx={{color:"yellow"}}>Outline</Button>
      <Button variant='outlined' sx={{color:"white",backgroundColor:"darkcyan"}}>Outline</Button>
    </div>
  )
}
