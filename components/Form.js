import React, { useState } from "react";


export default function Form() {
  const [Dark, setDark] = useState("light")
  const DarkMe = () => {
    if (Dark === "light") {
      setDark("Dark")
      document.body.style.background = " black";
    }
    else {
      setDark("light")
      document.body.style.background = "white";
    }
  }
  const [Red, setRed] = useState("light")
  const RedMe = ()=>{
    if(Red == 'light'){
      setRed("Red")
      document.body.style.background = "Red";
    }
    else{
      setRed("light")
      document.body.style.background = "white";


    }
  }
  return (
    <div>

      <div class="form-check form-switch text-right">
        <label class="form-check-label text-right " for="flexSwitchCheckDefault" style={{color:Dark === 'light'?'black':'white'}}>Enable Dark Mode</label>
        <input class="form-check-input" onClick={DarkMe} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      </div>
      <div class="form-check form-switch text-right">
        <label class="form-check-label text-right " for="flexSwitchCheckDefault"style={{color:Dark === 'light'?'black':'white'}} >Enable Red Mode</label>
        <input class="form-check-input" onClick={RedMe} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      </div>
      <div className="mx-auto col-10 col-md-8 col-lg-6 my-4 " style={{color:Red === 'light'?'black':'white' }}> 
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label" style={{color:Dark === 'light'?'black':'white'}} >
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{backgroundColor:Dark === 'light'?'white':'black',color:Dark === 'light'?'black':'white',backgroundColor:Red === 'light'?'white':'red'}}
            />
            <div id="emailHelp" class="form-text" style={{color:Dark === "light"?'black':'white'}}>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label " style={{color:Dark === 'light'?'black':'white'}}>
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              style={{backgroundColor:Dark === 'light'?'white':'black',color:Dark === 'light'?'black':'white', backgroundColor:Red === 'light'?'white':'red'}}
          />  
          </div>

          <button type="submit" class="btn btn-light" style={{backgroundColor:Dark === 'light'?'white':'black' , color:Dark === 'light'?'black':'white'}}>
            
            Submit
          </button>
        </form>

      </div>

    </div>
  );
}
