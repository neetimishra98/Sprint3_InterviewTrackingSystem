import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowEmployeeAction from '../../../actions/employee/showemployees_action'

import Table from 'react-bootstrap/Table'

import Jumbotron from 'react-bootstrap/Jumbotron'

const ShowEmployeeComponent = (props)=>{
    
    let employeeList = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>ShowEmployeeAction_Function(), [])
    const ShowEmployeeAction_Function = () => {
        dispatcher(ShowEmployeeAction());
    }
    
    console.log(employeeList);
    return (
        <div>
            <h1>Show Employees</h1>
            <br></br>
            <center>
            <Jumbotron style={{width:700}}>
            <Table variant="primary" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData(employeeList)}
                </tbody>
            </Table>
            </Jumbotron>
            </center>
        </div>

    );

    function renderData(employeeList) {   
        console.log("employeeList: ", employeeList);
        if(employeeList!==undefined){
        return employeeList.data.map((employee, index) => {
            const { employeeid, name } = employee //destructuring
            return (
              <tr key={employeeid}>
                 <td>{employeeid}</td>
                 <td>{name}</td>
              </tr>
           )   
        })
        }
     };
}

export default ShowEmployeeComponent;
