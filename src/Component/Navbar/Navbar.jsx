import React from 'react'
import './Navbar.comp.css'

function Navbar({imgstatus}) {

  const downloadfunc=()=>
  {
    if(imgstatus)
    {
      
    }

    else
    alert("Please add an Image")
  }
  return (
    <div className="navbar">
      <div className="logo">
        <a href=""><img src="./logo.png" alt="logo" /></a>
      </div>

      <div className="links-list">
        <ul>
          <div className="texts">
          <a href="">
          <li>
            Home
          </li>
          </a>
          <a href="">
          <li>
            Account
          </li>
          </a>
          <a href="">
          <li>
            Contact
          </li>
          </a>
          </div>
          <li>
            <button type="button" className="export-button" onClick={downloadfunc}>Download</button>          
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar