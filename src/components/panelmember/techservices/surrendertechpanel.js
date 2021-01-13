import { render } from '@testing-library/react';
import React, { useState } from 'react'
import { Form, Table, Jumbotron, Button, Modal } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import SurrenderAsATechAction from '../../../actions/panelmember/surrender_as_tech_action';

const SurrenderAsTechPanel = (props) => {

    var pathVar = null;
    let panelMember = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>SurrenderAsATechAction_Func(), [])
        const SurrenderAsATechAction_Func = () => {
            dispatcher(SurrenderAsATechAction(pathVar));
        }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("pathVariable").value;
        dispatcher(SurrenderAsATechAction(pathVar));
        renderData(panelMember);
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
                        <Form.Label>Search by valid id</Form.Label>
                        <Form.Control id="pathVariable" type="text" placeholder="Panel ID" />
                    </Form.Group>
                    <Button variant="dark" type="button" call onClick={handleSubmit}>
                        View
                    </Button>
                    <hr></hr>
                        {renderData(panelMember)}
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
                <Modal.Title>Panel Not Found</Modal.Title>
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

    function renderData(panelMember) {   
        console.log("panel member dispatcher object returned from the server : ", panelMember);
        if(panelMember!==undefined && panelMember!==null){
            return(
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Employee ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{panelMember.data.panelid}</td>
                            <td>{panelMember.data.location}</td>
                            <td>{panelMember.data.type}</td>
                            <td>{panelMember.data.employeeid}</td>
                        </tr>
                    </tbody>
                </Table>
            );
        }
        if(panelMember!==undefined && panelMember===null){
            return(<Box/>);
        }
    }        
}

export default SurrenderAsTechPanel;