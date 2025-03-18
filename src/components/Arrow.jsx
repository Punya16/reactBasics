import React from 'react'

export default function Arrow() {
  let name="Punya"
  let obj={fname:"Punya",lname:"Poojary",age:21}

function Simple(){
  alert("Simple Function")
}

const arrowFunction = (name,num) => alert("Arrow Function" + name + num)

const Output =() => <h1>This is output function</h1>

const Input = () => {
  return(
    <ul>
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
    </ul>
  )
}
  return (
    <div>
      Arrow - {name} - {obj.lname}
      {/* <button onClick={arrowFunction}>Arrow</button> */}
      <button onClick={()=>arrowFunction("Punya",70)}>Arrow</button>
      <button onClick={()=>Simple("Punya")}>Simple</button>
      {Output()}
      {Input()}
    </div>
  )
}
