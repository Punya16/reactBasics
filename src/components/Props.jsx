import React from 'react'

export default function Props() {
  // const Greeting = (props) => {
  //   return <p>Hello {props.name} {props.age}</p>
  // }

  const Greeting = ({ name, age }) => {
    return <p>Hello {name} {age}</p>
  }

 
  return (
    <div>
      <p>This is Props Component</p>
      {/* {Greeting("Punya")} */}
      <Greeting name="Punya" age={21} />
    </div>
  )
}
