import { render } from '@testing-library/react';
import React, { useState } from 'react'
import { Form, Table, Jumbotron, Button, Alert } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import GiveTechRatingAction from '../../../actions/interviewscheduler/givetechratingaction'

const GiveTechRating = (props) => {

    var pathVariable = null;
    let candidate = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>GiveTechRatingAction_Function(), [])
    const GiveTechRatingAction_Function = () => {
            dispatcher(GiveTechRatingAction(pathVariable));
        }
    
    const handleSubmit = (event) =>{ 
        pathVariable = document.getElementById("interviewid").value;
        dispatcher(GiveTechRatingAction(pathVariable));
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
                        <Form.Control id="interviewid" type="text" placeholder="Interview ID" />
                        </Form.Group>
                    <Button variant="dark" type="button" call onClick={handleSubmit}>
                        Search
                    </Button>
                    <hr></hr>
                        {renderData(candidate)}
                </Form>
            </Jumbotron>
        </div>
    );

    //Alert
    function AlertMemberNotFound() {
        const [show, setShow] = useState(true);
        console.log(show, setShow);
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Interview Not Found</Alert.Heading>
              <p>
              Candidate with the mentioned id was not found. Maybe you entered wrong id. Please check once!
              </p>
            </Alert>
          );
        }
        else{
            return (
                <div></div>
            );
        }

    }
    function renderData(candidate) {   
        console.log("candidate dispatcher object returned from the server : ", candidate);
        if(candidate!==undefined && candidate!==null){
            return(
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Interview ID</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>TechRating</th>
                            <th>Final Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{candidate.data.interviewid}</td>
                            <td>{candidate.data.location}</td>
                            <td>{candidate.data.date}</td>
                            <td>{candidate.data.start_time}</td>
                            <td>{candidate.data.end_time}</td>
                            <td>{candidate.data.techrating}</td>
                            <td>{candidate.data.finalstatus}</td>
                            
                        </tr>
                        </tbody>
                </Table>
            );
        }

        if(candidate!==undefined && candidate===null){
            console.log("called the alert");
            return(<AlertMemberNotFound show="true"/>);
        }
    }        
    }

export default GiveTechRating;