import React, { useState } from 'react'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
import SignUpPageBackgroundImage from '../assets/SignUpPageBackgroundImage.jpeg'
import '../style/EditProfileInformation.css'
export default function EditProfileInformation() {
    const navigate = useNavigate();
    const [formDivChangeVariable, formDivChangeFunction]=useState({display:"none"});
    const [nameChangeVariable, nameChangeFunction]=useState({display:"none"});
    const [addressChangeVariable, addressChangeFunction]=useState({display:"none"});
    const [logoChangeVariable, logoChangeFunction]=useState({display:"none"});

    function changeNameStyle(){
        formDivChangeFunction({
             display:"flex"
        })
        nameChangeFunction({
            display:"flex"
        });
        addressChangeFunction({
            display:"none"
        })
        logoChangeFunction({
             display:"none"
        })
    }
    function changeAddressStyle(){
        formDivChangeFunction({
            display:"flex"
       })
        nameChangeFunction({
            display:"none"
        });
        addressChangeFunction({
            display:"flex"
        })
        logoChangeFunction({
             display:"none"
        })
    }
    function changeLogoStyle(){
        formDivChangeFunction({
            display:"flex"
       })
        nameChangeFunction({
            display:"none"
        });
        addressChangeFunction({
            display:"none"
        })
        logoChangeFunction({
             display:"flex"
        })
    }

    return (
        <div className='outerEditProfileInfoDiv'>
            <div className="innerEditProfileInfoDivs" id="innerEditProfileInfoDivsId1" >
                <div className="formEditProfileInfoDiv" id="formEditProfileInfoDivId1"  style={formDivChangeVariable} >
                    <div className="actualInnerFormDivs" id="actualInnerFormDivsId1" style={nameChangeVariable}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="editProfileFormText" >Enter new channel name</Form.Label>
                                <Form.Control type="text" placeholder="" className="editProfileFormInputField" />
                                <Form.Text className="text-muted">
                                    
                                </Form.Text>
                            </Form.Group>
                            <div className="loginFormButton">
                                <Button variant="primary" type="submit" onClick={() => navigate("/channelinfo")}>
                                    Submit
                                </Button>
                            </div>

                        </Form>
                    </div>

                    <div className="actualInnerFormDivs" id="actualInnerFormDivsId2" style={addressChangeVariable}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="editProfileFormText">Enter new office address</Form.Label>
                                <Form.Control type="text" placeholder="Enter new office address"  className="editProfileFormInputField" />
                                <Form.Text className="text-muted">
                                    
                                </Form.Text>
                            </Form.Group>
                            <div className="loginFormButton">
                                <Button variant="primary" type="submit" onClick={() => navigate("/channelinfo")}>
                                    Submit
                                </Button>
                            </div>

                        </Form>
                    </div>

                    <div className="actualInnerFormDivs" id="actualInnerFormDivsId3" style={logoChangeVariable}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="editProfileFormText" >Upload new Logo</Form.Label>
                                <Form.Control type="file" placeholder=""   className="editProfileFormInputField"/>
                                <Form.Text className="text-muted">
                                    
                                </Form.Text>
                            </Form.Group>

                            <div className="loginFormButton">
                                <Button variant="primary" type="submit" onClick={() => navigate("/channelinfo")}>
                                    Submit
                                </Button>
                            </div>

                        </Form>
                    </div>

                </div>
                <button className="backButtonEditProfileInfo" onClick={()=>navigate("/channelinfo")}>Back</button>
            </div>
            <div className="innerEditProfileInfoDivs" id="innerEditProfileInfoDivsId2">
                <div className="buttonholdingDiv">
                    <div className="buttonholdingDesignDiv">
                        <button className="editProfileButton" onClick={()=>changeNameStyle()}> Edit Name of the Channel </button>

                    </div>
                    <div className="buttonholdingDesignDiv">
                        <button className="editProfileButton" onClick={()=>changeAddressStyle()}> Edit Address of office </button>

                    </div>
                    <div className="buttonholdingDesignDiv">
                        <button className="editProfileButton" onClick={()=>changeLogoStyle()}> Edit Logo of Channel </button>

                    </div>
                </div>
            </div>

        </div>
    )
}
