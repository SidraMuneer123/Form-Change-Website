import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <div className="bg-light clearfix"> */}

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.about}</a>
        </li>
         
      </ul>
      {/* </div> */}
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleme('primary')}} style={{height:'30px',width:'30px ',cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleme('danger')}} style={{height:'30px',width:'30px ',cursor:'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleme('success')}} style={{height:'30px',width:'30px ',cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleme('warning')}} style={{height:'30px',width:'30px ',cursor:'pointer'}}></div>
        <div className="bg-light rounded mx-2" onClick={()=>{props.toggleme('light')}} style={{height:'30px',width:'30px ',cursor:'pointer',border:'1px solid black'}}></div>
        <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleme('dark')}} style={{height:'30px',width:'30px ',cursor:'pointer'}}></div>
      </div>
      {/* <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input class="form-check-input"onClick={()=>{props.toggleme('null')}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Toggle Mode</label>
</div> */}
    
  </div>
    </div>
</nav>

)
};
Navbar.propTypes = {
    title: PropTypes.string
  };
Navbar.defaultProps = {
    title: "Hello world",
    about: "me ho na"
}