import React from 'react'

export default function Array() {
  let fruits = ['apple', 'banana', 'orange', 'kiwi']
  let mapping = fruits.map((item, index) => <h1>{++index}.{item}</h1>)

  let vehicles = ['bmw', 'ford', 'audi', 'mustang']
  let mapping2 = vehicles.map((item, index) => <h1>{++index}.{item}</h1>)

  let studentDetails = [
    { name: "Punya", class: "10", rollNo: 1 },
    { name: "Vishaka", class: "10", rollNo: 2 },
    { name: "Rashmi", class: "10", rollNo: 3 },
    { name: "Thanvi", class: "10", rollNo: 4 },
  ]
  let mapping3 = studentDetails.map((item) => {
    return (
      <div>
        <h1>{item.name} {item.class} {item.rollNo}</h1>
      </div>
    )
  })

  let employeeDetails = [
    { name: "Punya", designation: "developer", salary: 40000, skills: ["html", "css", "js"] },
    { name: "Vishaka", designation: "developer", salary: 40000, skills: ["react", "python", "C++"] },
    { name: "Rashmi", designation: "developer", salary: 40000, skills: ["java", "js", "C"] },
    { name: "Thanvi", designation: "developer", salary: 40000, skills: ["react native", "php", "R"] },
    { name: "Seetha", designation: "developer", salary: 40000, skills: ["Go", "css", "js"] },
  ]
  let mapping4 = employeeDetails.map((item) => {
    return (
      <div>
        <p>{item.name} {item.designation} {item.salary} {item.skills.map((item) => <p>{item}</p>)}</p>
      </div>
    )
  })

  let styletable = {
    color:"lightgray",backgroundColor:"darkcyan",borderRadius:"25px",border:"solid", borderColor:"white",
  }

  return (
    <div>
      <h2>This is array method</h2>
      <h3>{fruits}</h3>
      {mapping}
      {mapping2}
      {mapping3}
      {mapping4}
      <table border={1}>

        <tr>
          <th>Sl.</th>
          <th>Name</th>
          <th>Class</th>
          <th>RollNo</th>
        </tr>
        {
          studentDetails.map((item, index) => {
            return (
              <tr>
                <td>{++index}</td>
                <td>{item.name}</td>
                <td>{item.class}</td>
                <td>{item.rollNo}</td>
              </tr>
            )
          })
        }
      </table> <br />
      <table border={1} style={styletable}>
        <tr>
          <th>Name</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Skills</th>
        </tr>
        {
          employeeDetails.map((item)=>{
            return(
            <tr>
              <td>{item.name}</td>
              <td>{item.designation}</td>
              <td>{item.salary}</td>
              <td>
                <ul>
                  {item.skills.map((item) => <li><p>{item}</p></li>)}
                </ul> 
                </td>
            </tr>
            )
          })
        }
      </table>
    </div>

  )
}
