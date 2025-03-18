import React from 'react'

export default function Destructuring() {
  let numbers = ["One","Two","Three","Four","Five"];
  //old method of destructuring
  let n1 = numbers[0] 
  let n2 = numbers[1] 
  let n3 = numbers[2] 
  //new method of destructuring
  let[num1,num2,num3] = numbers

  let calculate = [1+1,2+2,3+3,4+4]
  let [a,b,c] = calculate

  //object destructuring
  let vehicle = [{
    model:"mustang",
    brand:"ford",
    color:"red",
    year:2000,
  }]

  let [{model,brand,color}] = vehicle

  return (
    <div>
      Destructuring
      {n1}
      {n2}
      {n3}
      {num1}
      {num2}
      {num3}
      {a}
      {b}
      {c}
      <h1>I have a {color} {brand} {model} </h1>
    </div>
  )
}
