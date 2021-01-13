import { Form, Table, Jumbotron, Button, Modal} from 'react-bootstrap'
import { render } from '@testing-library/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CancelInterviewAction from '../../../actions/interviewscheduler/cancelinterview_action'

const CancelInterview = (props) => {

    var pathVar = null;
    let interview = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>CancelInterviewAction_Function(), [])
        const CancelInterviewAction_Function = () => {
            dispatcher(CancelInterviewAction(pathVar));
        }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("pathVariable").value;
        dispatcher(CancelInterviewAction(pathVar));
        renderData(interview);
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
                        <Form.Label>Enter Interview ID to Cancel</Form.Label>
                        <Form.Control type="text" placeholder="Interview Id" id="searchParameter"/>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                           
                        </thead>
                        <tbody id="table_content">
                        </tbody>
                    </Table>
                    <Button variant="dark" type="submit" call>
                        Cancel
                    </Button>
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
                <Modal.Title>Employee Not Found</Modal.Title>
              </Modal.Header>
              <Modal.Body>Entered incorrect or blank name/id</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  OK
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }

    function renderData() {   
        console.log("interview dispatcher object returned from the server : ", interview);
        if(interview!==undefined && interview!==null){
            return(
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{interview.data.interviewid}</td>
                        </tr>
                    </tbody>
                </Table>
            );
        }
        if(interview!==undefined && interview===null){
            return(<Box/>);
        }
    }        

}

export default CancelInterview;