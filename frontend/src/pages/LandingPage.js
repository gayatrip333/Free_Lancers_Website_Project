import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../style/LandingPage.css'

export default function LandingPage() {
  return (
    <div>
       <div>
      
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" className='nav_items_content'>Create Account</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className='nav_items_content'>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className='nav_items_content'>About</Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="titleHomePage">
        <div className="innerTitleDiv">
        <i><h1>NEWS CORE</h1>
        <h5>Get all the news and updates from different channels and up-to-date!!!</h5></i>
        <div className="browseNewsButton"> 
            <button><b> Browse News  ▶▶ </b> </button> 
        </div>
        </div>    
      </div>

      <div className="footerDiv">
        <div className="innerFooterDiv">
        <marquee behavior="" direction="">
        <h6>For any suggestion to the website, chat with us on the number +91 978674567</h6>
        </marquee>
        </div>
        </div>


    </div>
    </div>
  )
}
