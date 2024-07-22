import React from 'react'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'
import '../style/UploadNewsUpdates.css'
import { useNavigate } from 'react-router-dom'
export default function UploadUpdateNews() {
  const navigate=useNavigate();
  return (
    <div className="outerformDivNewsUpload">
      <div className="backGoingDivUploadNewsPage">
        <button onClick={()=>navigate("/channelinfo")}>{"🔙"}</button>
      </div>
      <div className="formDivNewsUpload">
          <Form>
              <Form.Group className="newsuploadUpFormmb-3" controlId="formBasicEmail">
                  <Form.Label className="newsuploadUpFormmbLabel">Title of News</Form.Label>
                  <Form.Control className="newsuploadUpFormmbInputs"  type="email" placeholder="Enter title of the news" />
                  <Form.Text className="text-muted">
                     </Form.Text>
                </Form.Group>

                <Form.Group className="newsuploadUpFormmb-3" controlId="formBasicEmail">
                  <Form.Label className="newsuploadUpFormmbLabel">Description of News</Form.Label>
                  <Form.Control className="newsuploadUpFormmbInputs" type="textarea" placeholder="Enter description of the news" id="newsuploadUpFormmbTextarea" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>

                <Form.Group className="newsuploadUpFormmb-3" controlId="formBasicPassword">
                  <Form.Label className="newsuploadUpFormmbLabel">Date</Form.Label>
                  <Form.Control className="newsuploadUpFormmbInputs" type="date" placeholder="" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>

                <Form.Group className="newsuploadUpFormmb-3" controlId="formBasicEmail">
                  <Form.Label className="newsuploadUpFormmbLabel">Reporter's name</Form.Label>
                  <Form.Control className="newsuploadUpFormmbInputs" type="text" placeholder="Enter name of reporter" />
                  <Form.Text className="text-muted">
                    
                  </Form.Text>
                </Form.Group>

                <Form.Group className="newsuploadUpFormmb-3" controlId="formBasicEmail">
                  <Form.Label className="newsuploadUpFormmbLabel">Images related to news</Form.Label>
                  <Form.Control className="newsuploadUpFormmbInputs" type="file"/>
                  <Form.Text className="text-muted">
                   </Form.Text>
                </Form.Group>

                <div className="newsuploadUpFormButton">
                  <Button variant="primary" type="submit">
                    POST NEWS
                  </Button>
                </div>
              </Form>
      </div>
    </div>
  )
}
