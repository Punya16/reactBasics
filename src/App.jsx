// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Array from './components/Array'
import Arrow from './components/Arrow'
import Demo from './components/Demo'
import Destructuring from './components/Destructuring'
import Props from './components/Props'
import Spread from './components/Spread'
import Ternary from './components/Ternary'
import Home from './components/Home'
import MUI from './components/MUI'
import Error from "./components/Error";
import MuiButton from './components/MUI/MuiButton';
import MuiTable from './components/MUI/MuiTable';
import MuiAutoComplete from './components/MUI/MuiAutoComplete';
import MuiCard from './components/MUI/MuiCard';
import MuiToggle from './components/MUI/MuiToggle';
import MuiAppBar from './components/MUI/MuiAppBar';
import MuiSwitch from './components/MUI/MuiSwitch';
import State from './components/State';
import Effect from './components/Effect';
import MuiNavbar from './components/MUI/MuiNavbar';
import Api from './components/Api';
import Recipe from './components/Recipe';
import Search from './components/MUI/Search';


function App() {
  // const mystyle = { color: "lightgray", backgroundColor: "darkcyan" }

  return (
    // <div>
    //   <h2 style={{color:"darkcyan",backgroundColor:"lightgray"}}>My name is Punya</h2>

    //   <h3 style={mystyle}>Lorem ipsum dolor sit amet.</h3>
    //   <Demo/>
    //   <Arrow/>
    //   <Array/>
    //   <Destructuring/>    
    //   <Spread/>
    //   <Ternary/>
    //   <Props/>
    // </div>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arrow" element={<Arrow />} />
        <Route path="/array" element={<Array />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/destructuring" element={<Destructuring />} />
        <Route path="/props" element={<Props />} />
        <Route path="/spread" element={<Spread />} />
        <Route path="/ternary" element={<Ternary />} />
        <Route path="/mui" element={<MUI />} />
        <Route path="/muibutton" element={<MuiButton />} />
        <Route path="/muitable" element={<MuiTable />} />
        <Route path="/muiautocomplete" element={<MuiAutoComplete />} />
        <Route path="/muicard" element={<MuiCard />} />
        <Route path="/muitoggle" element={<MuiToggle />} />
        <Route path="/muiappbar" element={<MuiAppBar />} />
        <Route path="/muiswitch" element={<MuiSwitch />} />
        <Route path="/state" element={<State />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/muinavbar" element={<MuiNavbar />} />
        <Route path="/api" element={<Api />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/search" element={<Search />} />
        
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
