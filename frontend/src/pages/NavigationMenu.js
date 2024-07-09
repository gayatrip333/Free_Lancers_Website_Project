import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../style/NavigationMenu.css'
export default function NavigationMenu() {
  return (
    <div>
      <Nav className="justify-content-end" activeKey="/">
      <Nav.Item>
          <Nav.Link href="/" className='nav_items_content'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item></Nav.Item>
        <Nav.Item>
          <Nav.Link href="/loginpage" className='nav_items_content'>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/aboutpage" className='nav_items_content'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/signuppage" className='nav_items_content' id="createAccountOptionId">Create Account</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
