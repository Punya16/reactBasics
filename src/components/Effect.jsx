import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'


export default function Effect() {
  let init = parseInt(localStorage.getItem('count'))

  const [count, setCount] = useState(init);
  const [square, setSquare] = useState(0);
  const [user, setUser] = useState({
    name: "",
    phone: ""
  });
  const [userList, setUserList] = useState([]);

  const Increment = () => {
    setCount(count + 1)
  }

  const Clear = () => {
    setCount(0)
    localStorage.clear()
  }

  const Insert = () => {
    const updatedList = [...userList,user];
    setUserList(updatedList)
    localStorage.setItem("users",JSON.stringify(updatedList));  
    setUser({name: "",phone: ""});
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setSquare(count * count)
    localStorage.setItem("count", count)
  }, [count])

  //localstorage
  // localStorage.setItem("name", "Jhon")
  // localStorage.getItem("name")
  // localStorage.removeItem("name")
  // localStorage.clear()

  return (
    <div>
      <p>Count : {count}</p> <br />
      <p>Square : {square}</p> <br />
      <Button onClick={Increment} variant='contained'>+</Button><br /><br />
      <Button onClick={() => setCount(count - 1)} variant='contained'>-</Button> <br /> <br />
      <Button onClick={Clear} variant='contained'>Clear</Button>

      <h6>Form</h6>
      <TextField placeholder='Enter your name' name='name' value={user.name} onChange={handleChange} />
      <TextField placeholder='Enter your phone' name='phone' value={user.phone}  onChange={handleChange}/>
      <Button onClick={Insert} variant='contained'>Insert</Button>

      <div>
        <h3>Stored Users:</h3>
        {userList.map((u, index) => (
          <p key={index}>
            {u.name} - {u.phone}
          </p>
        ))}
      </div>
    </div>
  )
}
