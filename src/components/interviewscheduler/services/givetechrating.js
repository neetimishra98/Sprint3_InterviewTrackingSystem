import { Form, Table, Jumbotron, Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import GiveTechRatingAction from '../../../actions/interviewscheduler/givetechratingaction'

const GiveTechRating = (props) => {

    var pathVartech = null;
    let candidate = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>GiveTechRatingAction_Function(), [])
        const GiveTechRatingAction_Function = () => {
            dispatcher(GiveTechRatingAction(pathVartech));
        }
    
    const handleSubmit = (event) =>{ 
        pathVartech = document.getElementById("pathVariable").value;
        dispatcher(GiveTechRatingAction(pathVartech));
        renderData(candidate);
    }


    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Jumbotron style={{width: 700}}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>Give TechRating to a Candidate by Interviewid</Form.Label>
                        <Form.Control type="text" placeholder="Interview ID" id="pathVariable"/>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <th>Interview ID</th>
                            
                        </thead>
                        <tbody id="table_content">
                        </tbody>
                    </Table>
                    <Button variant="dark" type="button" call onClick={handleSubmit}>
                        Search
                    </Button>
                    <hr></hr>
                    {renderData(candidate)}
                </Form>
            </Jumbotron>
        </div>
    );


    //MODAL
    function Box() {
        const [show, setShow] = useState(true);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Candidate Not Found</Modal.Title>
              </Modal.Header>
              <Modal.Body>Entered incorrect or blank id</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  OK
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }


    function renderData(candidate) {   
        console.log("candidate dispatcher object returned from the server : ", candidate);
        if(candidate!==undefined && candidate!==null){
            return(
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Interview ID</th>
                            <th>Date</th>
                            <th>End Time</th>
                            <th>Final Status</th>
                            <th>Location</th>
                            <th>Start Time</th>
                            <th>Tech Rating</th>
                            <th>Candidate ID</th>
                            <th>Panel ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{candidate.data.interviewid}</td>
                            <td>{candidate.data.date}</td>
                            <td>{candidate.data.end_time}</td>
                            <td>{candidate.data.finalstatus}</td>
                            <td>{candidate.data.location}</td>
                            <td>{candidate.data.start_time}</td>
                            <td>{candidate.data.techrating}</td>
                            <td>{candidate.data.candidateid}</td>
                            <td>{candidate.data.panelid}</td>
                        </tr>
                    </tbody>
                </Table>
            );
        }
        if(candidate!==undefined && candidate===null){
            return(<Box/>);
        }
    }        
}

export default GiveTechRating;