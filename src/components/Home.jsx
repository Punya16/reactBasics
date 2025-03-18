import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>This is Home Component</h2> <br/>
      <Link to="/arrow">Arrow</Link> <br/>
      <Link to="/array">Array</Link> <br/>
      <Link to="/demo">Demo</Link> <br/>
      <Link to="/destructuring">Destructuring</Link> <br/>
      <Link to="/props">Props</Link> <br/>
      <Link to="/spread">Spread</Link> <br/>
      <Link to="/ternary">Ternary</Link> <br/>
      <Link to="/mui">MUI</Link> <br/>
      <Link to="/state">Use State</Link> <br/>
      <Link to="/effect">UseEffect</Link> <br/>
      <Link to="/api">Api</Link> <br/>
      <Link to="/recipe">Recipe</Link> <br/>
    </div>
  )
}
