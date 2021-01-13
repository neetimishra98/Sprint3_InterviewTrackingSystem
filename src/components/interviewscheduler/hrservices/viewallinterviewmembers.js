//Hr Interview Scheduler Services Component : CHECK WARNING.info FOR NOTES.....
import React from 'react';
import { Form, Table, Jumbotron, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ShowInterviewMemberAction from '../../../actions/interviewscheduler/showinterviewmembers_action';



const ShowInterviewMember = (props) => {

    var pathVaria = null;
    let interviewmember = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>ShowInterviewMemberAction_Function(), [])
        const ShowInterviewMemberAction_Function = () => {
            dispatcher(ShowInterviewMemberAction(pathVaria));
        }

        const handleSubmit = (event) =>{ 
          pathVaria = document.getElementById("vare").value;
            dispatcher(ShowInterviewMemberAction(pathVaria));
            renderData(interviewmember);
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
                        <Button variant="dark" id = "vare" type="button" call onClick={handleSubmit} >
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

                        {renderData(interviewmember)}
                        </tbody>
                    </Table>
                </Form>
            </Jumbotron>
        </div>
    );

function renderData(interviewmember) {
    console.log("interviewmember dispatcher object returned from the server : ", interviewmember);
    if(interviewmember!==undefined){
    return(
                <tr>
                    <td>{interviewmember.data.interviewid}</td>
                    <td>{interviewmember.data.candidateid}</td>
                    <td>{interviewmember.data.panelid}</td>
                    <td>{interviewmember.data.location}</td>
                    <td>{interviewmember.data.date}</td>
                    <td>{interviewmember.data.start_time}</td>
                    <td>{interviewmember.data.end_time}</td>
                    <td>{interviewmember.data.hrrating}</td>
                    <td>{interviewmember.data.finalstatus}</td>
                    
                </tr>
    );

    }
}
}
export default ShowInterviewMember;
