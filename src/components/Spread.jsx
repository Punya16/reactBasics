import React from 'react'

export default function Spread() {
  let array1 = [1,3,4,5]
  let array2 = [4,5,6,7,8]
  let combinedArray = [...array1,...array2]
  let combinedArra = [array1,array2]
  console.log(combinedArra)

  let vehicle = {
    model:"mustang",
    brand:"ford",
    color:"red",
    year:2000,
  }

  let updateVehicle = {
    engine : "v12",
    top_speed:280,
    top_gear:7,
    color:"yellow"
  }

  let myUpdateVehicle = {...vehicle,...updateVehicle}
  console.log(myUpdateVehicle)

  let numbers = [1,2,3,4,5,6]
  let[a,b,c, ...d] = numbers
  
  console.log (+"100" + 100) //200
  console.log ("100" + 100)  //100100
  console.log (+"rahul" + 100)  //NaN
  console.log(typeof typeof 100) //String
  console.log(typeof 100) //Number

  let arr =[1,2,3]
  arr[100] = [100]
  console.log(arr)

  var name =  "Punya"
  console.log(name)
  // eslint-disable-next-line no-constant-condition
  if(true){
    // eslint-disable-next-line no-redeclare
    var name = "Poojary"
    console.log(name)
  }
  console.log(name)

  let name1 =  "Punya"
  console.log(name1)
  // eslint-disable-next-line no-constant-condition
  if(true){
    
    let name1 = "Poojary"
    console.log(name1)
  }
  console.log(name1)


  return (
    <div>
      {combinedArray}
      {combinedArra}
      {a} {b} {c} {d} 

    </div>
  )
}
