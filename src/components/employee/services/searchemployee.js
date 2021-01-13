import { render } from '@testing-library/react';
import React, { useState } from 'react'
import { Form, Table, Jumbotron, Button, Modal } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import SearchEmployeeAction from '../../../actions/employee/searchemployee_action'



const SearchEmployee = (props) => {

    var pathVar = null;
    let employee = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>SearchEmployeeAction_Function(), [])
        const SearchEmployeeAction_Function = () => {
            dispatcher(SearchEmployeeAction(pathVar));
        }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("pathVariable").value;
        dispatcher(SearchEmployeeAction(pathVar));
        renderData(employee);
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
                        <Form.Label>Search by valid name/id</Form.Label>
                        <Form.Control id="pathVariable" type="text" placeholder="Name or Employee ID" />
                    </Form.Group>
                    <Button variant="dark" type="button" call onClick={handleSubmit}>
                        Search
                    </Button>
                    <hr></hr>
                        {renderData(employee)}
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

    function renderData(employee) {   
        console.log("employee dispatcher object returned from the server : ", employee);
        if(employee!==undefined && employee!==null){
            return(
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{employee.data.employeeid}</td>
                            <td>{employee.data.name}</td>
                        </tr>
                    </tbody>
                </Table>
            );
        }
        if(employee!==undefined && employee===null){
            return(<Box/>);
        }
    }        
}


export default SearchEmployee;