import { Button, TextField } from '@mui/material';
import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function State() {
  let nav = useNavigate();

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  const Increment = () => {
    setCount(count+1)
  }

  // const Decrement = () => {
  //   setCount(count-1)
  // }

  const [name, setName] = useState("")

  const handleChange = (e) => {
    // console.log(e.target.value)
    setName(e.target.value)
  }

  const [phone, setPhone] = useState("")

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const [user, setUser] = useState({
    name:"",
    phone:""
  })

  const handleUser = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }

  const goBack = () => {
    alert("going back...")
    nav('/');
  }



  return (
    <div>
      <p>Count : {count}</p> <br />  
      <Button onClick={Increment} variant='contained'>+</Button><br /><br />
      <Button onClick={() => setCount(count-1)} variant='contained'>-</Button>
      <p style={{color:color}}>My favourite color is {color}</p>  
      {/* color:color can be written as just color as key and value is same  */}
      <Button onClick={() => setColor("Blue")}>Blue</Button>
      <Button onClick={() => setColor("Green")}>Green</Button>
      <Button onClick={() => setColor("Yellow")}>Yellow</Button>
      <Button onClick={() => setColor("Red")}>Red</Button>
      <br />
      <p>Name:{name}</p>
      <TextField onChange={handleChange} type='text' name='name' placeholder='Enter your name'/>
      <p>Phone:{phone}</p>
      <TextField onChange={handlePhone} type='number' name='phone' placeholder='Enter your number'/>

      <p>Name:{user.name}</p>
      <TextField onChange={handleUser} type='text' name='name' placeholder='Enter your name'/>
        <p>Phone:{user.phone}</p>
      <TextField onChange={handleUser} type='number' name='phone' placeholder='Enter your number'/> <br />

      <Button onClick={goBack}>GoBack</Button>

    </div>
  )
}
