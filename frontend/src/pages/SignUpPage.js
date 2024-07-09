import React from 'react'
import '../style/SignUpPage.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SignUpPageBackgroundImage from '../assets/SignUpPageBackgroundImage.jpeg'
export default function SignUpPage() {
  return (
    <div>
      <div className="outerSignUpDiv">
        <div className="innerSignUpDiv" id="innerSignUpDivId1">
          <img src={SignUpPageBackgroundImage} alt="" id="SignUpPageBackgroundImageId" />
        </div>
        <div className="innerSignUpDiv" id="innerSignUpDivId2">
          <div className="SignUpFormDiv">
            <div className="headingSignUpPage">
              <h1>CREATE YOUR CHANNEL</h1>
            </div>
            <div className="form-borderSignUpPage">
              <Form>
                <Form.Group className="SignUpFormmb-3" controlId="formBasicEmail">
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
                <div className="SignUpFormButton">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
