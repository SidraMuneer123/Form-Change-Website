// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import About from './components/About';
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
  const toggleme = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.background = '#042743';
      showalert("You Enable the Dark Mode" , "success")
    }
    else{
      setMode('light')
      document.body.style.background = 'white';
      showalert("You Enable the Light Mode" , "success")
    }
  }
  return (
    <>
    
<Navbar title = "My React App" about = "About" mode = {mode} toggleme = {toggleme}></Navbar>
  <Alert alert = {alert}></Alert>
{/* <Alert></Alert> */}
<div className="container my-3">
  <div className="container my-8">

  <TextForm heading = "Enter the text u analyzed" mode = {mode} alerti = {showalert} ></TextForm>
  </div>


</div>
    </>
  );
}

export default App;