import React from 'react'
import { Form, Table, Jumbotron, Button } from 'react-bootstrap'

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
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody id="table_content">
                            {renderData(employee)}
                        </tbody>
                    </Table>    
                </Form>
            </Jumbotron>
        </div>
    );

    function renderData(employee) {   
        console.log("employee dispatcher object returned from the server : ", employee);
        if(employee!==undefined){
            return(
                <tr>
                    <td>{employee.data.employeeid}</td>
                    <td>{employee.data.name}</td>
                </tr>
            );
        }
    }        
}


export default SearchEmployee;