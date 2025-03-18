import React from 'react'
import {name, age, phone, address} from './Imp'
import Hello from './Imp'

export default function Ternary() {
  const Greeting = () => {
    let a = true
    // if(a==true){
    //   return <h1>A is True</h1>
    // }else{
    //   return <h1>A is False</h1>
    // }
    return a == true ? <h1>A is True</h1> : <h1>A is False</h1>
  }




  let b = 10
  let darkMode = false
  return (
    <div>
      {Greeting()}
      <Greeting />
      {b > 10 ?
        <h1>B greater than 10</h1>
        : b > 5 ?
          <h1>B greater than 5</h1>
          : <h1>B less than 5</h1>
      }

      <p style={{ color: darkMode ? "white" : "black", backgroundColor: darkMode ? "black" : "white" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto accusantium repellat laboriosam nostrum ipsa autem labore similique architecto repudiandae obcaecati neque alias, vero pariatur, amet tempore, officiis quae corporis.
      </p>
      <p>My name is {name} and age is {age} and phone is {phone} and address is {address}</p>
      <button onClick={Hello}>Hello</button>

    </div>
  )
}
