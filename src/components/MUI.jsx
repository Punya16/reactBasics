import React from 'react'
import { Link } from "react-router-dom";

// import MuiButton from './MUI/MuiButton'
// import MuiTable from './MUI/MuiTable'

export default function MUI() {
  return (
    <div>
      MUI <br />
      <Link to="/muibutton">MuiButton</Link> <br />
      <Link to="/muitable">MuiTable</Link> <br/>
      <Link to="/muiautocomplete">MuiAutoComplete</Link> <br/>
      <Link to="/muicard">MuiCard</Link> <br/>
      <Link to="/muitoggle">MuiToggle</Link> <br/>
      <Link to="/muiappbar">MuiAppBar</Link> <br/>
      <Link to="/muiswitch">MuiSwitch</Link> <br/>
      <Link to="/muinavbar">MuiNavbar</Link> <br/>
    </div>
  )
}
