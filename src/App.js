
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// import { Switch, Route } from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';

// import React from "react";
// import {
//   BrowserRouter as Router,  
//   Switch,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>
  {
    setAlert({
        msg : message,
        type : type
    })

    setTimeout(() =>
    {
      setAlert(null);
    },2000);
  }

  const toggleMode =()=>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#064a86';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'Textutils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'textutils - Light Mode';
    }
  }
  return (
    <>
  {/* <Router> */}

<Navbar title= "Textutils" aboutText = "About" mode={mode} toggleMode = {toggleMode}/>

<Alert alert = {alert}/>

<div className='container my-3'>
{/* <Switch>
           <Route exact path="/about">
            <About/>
           </Route> */}
           {/* <Route exact path="/"> */}
            <TextForm showAlert  = {showAlert} heading = 'Enter the text to analyze below' mode ={mode}/>
           {/* </Route> */}
  {/* </Switch> */}
 
</div>
{/* </Router> */}
{/* <About/>  */}
    </>
   
  );
}

export default App;
