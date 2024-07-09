import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../style/LoginPage.css'
export default function LoginPage() {
  return (
    <div className="loginPageHoldingDiv">
    <div className="OuterFormDiv">
      <div className="InnerContentDic">
      <div className="contentHoldingDiv">
              <h1>Login here to upload the updates on your channel</h1>
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    
    </Form>
    </div>
    </div>
    </div>
  )
}
