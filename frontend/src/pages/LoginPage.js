import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../style/LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
export default function LoginPage() {
  const navigate=useNavigate();
  return (
    <div className="loginPageHoldingDiv">
    <div className="OuterFormDiv1">
      <div className="InnerContentDic">
      <div className="typewriter">
              <h1>Login here to upload your updates</h1>
            </div>
      </div>
            
    </div>
    <div className="OuterFormDiv">
    <div className="form-border">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
          Choose your password
        </Form.Text>
      </Form.Group>
      <div className="loginFormButton">
      <Button variant="primary" type="submit" onClick={()=>navigate("/channelinfo")}>
        Submit
      </Button>
      </div>
    
    </Form>
    </div>
    </div>
    </div>
  )
}
