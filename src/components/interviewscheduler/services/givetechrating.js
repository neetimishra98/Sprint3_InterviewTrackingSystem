import { Form, Table, Jumbotron, Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import GiveTechRatingAction from '../../../actions/interviewscheduler/givetechratingaction'

const GiveTechRating = (interviewId) => {

    var pathVar = null;
    let interviewscheduler = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>GiveTechRatingAction_Function(), [])
        const GiveTechRatingAction_Function = () => {
            dispatcher(GiveTechRatingAction(pathVar));
        }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("pathVariable").value;
        dispatcher(GiveTechRatingAction(pathVar));
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
                    <Table striped bordered hover size="sm">
                        <thead>
                            <th>Interview ID</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>TechRating</th>
                            <th>Final Status</th>
                            <th>Candidate Id</th>
                            <th>Panel Id</th>
                        </thead>
                        <tbody id="table_content">
                        {renderData(interviewscheduler)}
                        </tbody>
                    </Table>
                </Form>
            </Jumbotron>
        </div>
    );
    function renderData(interviewscheduler) {   
        console.log("interview member dispatcher object returned from the server : ", interviewscheduler);
        if(interviewscheduler!==undefined){
            return(
                <tr>
                    <td>{interviewscheduler.data.interviewid}</td>
                    <td>{interviewscheduler.data.location}</td>
                    <td>{interviewscheduler.data.date}</td>
                    <td>{interviewscheduler.data.start_time}</td>
                    <td>{interviewscheduler.data.end_time}</td>
                    <td>{interviewscheduler.data.techrating}</td>
                    <td>{interviewscheduler.data.finalstatus}</td>
                    <td>{interviewscheduler.data.candidateid}</td>
                    <td>{interviewscheduler.data.candidateid}</td>
                </tr>
            );
        }
    }        
}

export default GiveTechRating;