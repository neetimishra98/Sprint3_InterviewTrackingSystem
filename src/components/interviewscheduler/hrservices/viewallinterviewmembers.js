//Hr Interview Scheduler Services Component : CHECK WARNING.info FOR NOTES.....
import React from 'react';
import { Form, Table, Jumbotron, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ShowInterviewMemberAction from '../../../actions/interviewscheduler/showinterviewmembers_action';


const ViewInterviewMembersForHr = (props) => {


    let interviewmemberList = useSelector(state => state);

    const dispatch = useDispatch();

    React.useEffect(() => {
        InterviewmemberList()
      }, []);
    
      const InterviewmemberList = () => {
        dispatch(ShowInterviewMemberAction())
      }


    console.log("interviewmemberList: ", interviewmemberList);
    if(!Array.isArray(interviewmemberList)) {
        interviewmemberList = [];
        console.log("Set employeeList to blank array");
    }
 
    return (
    
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Jumbotron style={{ width: 700 }}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label> View List of Interview Members</Form.Label>
                        <br></br>
                        <br></br>
                        <Button variant="dark" type="submit" call>
                            SHOW
                        </Button>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <th>interviewid</th>
                            <th>candidateid</th>
                            <th>panelid</th>
                            <th>location</th>
                            <th>date</th>
                            <th>start_time</th>
                            <th>end_time</th>
                            <th>hrrating</th>
                            <th>finalstatus</th>
                        </thead>
                        <tbody id="table_content">

                        {renderTableData(interviewmemberList)}
                        
                        </tbody>
                    </Table>
                </Form>
            </Jumbotron>
        </div>
    );
}


function renderTableData(interviewmemberList) {
    console.log("interviewmemberList: ", interviewmemberList);
    return interviewmemberList.map((interviewmember,index) => {
      //  const deptName = employee.department.name;
       const { interviewid, candidateid, panelid, location,date,start_time,end_time,hrrating,finalstatus} = interviewmember//destructuring
       return (
          <tr key={interviewid}>
             <td>{interviewid}</td>
             <td>{candidateid}</td>
             <td>{panelid}</td>
             <td>{location}</td>
             <td>{date}</td>
             <td>{start_time}</td>
             <td>{end_time}</td>
             <td>{hrrating}</td>
             <td>{finalstatus}</td>
            
          </tr>
       )
    })
 };


export default ViewInterviewMembersForHr;