import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Form from './components/Form';
import Alert from './components/Alert';
// import { Link } from "react-router-dom";

import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// let name="Harry";

function App() {
  const [mode,setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showalert = (message,type) => {
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);
    
    
  }
  const removeBodyClasses=()=>{
    // document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }
  const toggleme = () =>{
    removeBodyClasses();
    if(mode==='light'){

      // document.body.classList.add('bg-'+cls)
      setMode('dark')
      document.body.style.background = '#042743';
      showalert("You Enable the Dark Mode" , "success")
      document.title = "TextUtils-Dark Mode"
      // setInterval(() => {
      //   document.title = "TextUtils is amazing"
        
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils"
        
      // }, 1500);

    }
    else{
      setMode('light')
      document.body.style.background = 'white';
      showalert("You Enable the Light Mode" , "success")
      document.title = "TextUtils-Light Mode"
    }
  }
  return (
    <>

<Router>
  <Navbar title = "My React App" about = "About" mode = {mode} toggleme = {toggleme}></Navbar>
  {/* <Alert alert = {alert}></Alert> */}
{/* <Alert></Alert> */}
<div className="container my-3">
  <Switch>
          <Route exact path="/about">
            <About mode = {mode} />
          </Route>
          <Route path="/">
          <TextForm exact heading = "Enter the text u analyzed" mode = {mode} alerti = {showalert} ></TextForm>

          </Route>
          <Route path ="/form">
            <Form></Form>

          </Route>
        </Switch>
        

  {/* <About></About> */}
  </div>
</Router>



      


    </>
  );
}

export default App;