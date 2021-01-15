/*//Hr Interview Scheduler Services Component : CHECK WARNING.info FOR NOTES.....
import React from 'react';
import { Form, Table, Jumbotron, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ShowInterviewMemberAction from '../../../actions/interviewscheduler/showinterviewmembers_action';



const ShowInterviewMember = (props) => {


    let interviewList= useSelector((state)=>state.interview);

    let dispatcher = useDispatch();
    React.useEffect(()=>InterviewList(), [])
        const InterviewList = () => {
            dispatcher(ShowInterviewMemberAction());
        }


       console.log("InterviewList: ", interviewList);


       if(!Array.isArray(interviewList)) {
        interviewList = [];
        console.log("Set interviewList to blank array");
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
                        <Form.Label> View List Of Interview Members</Form.Label>
                    </Form.Group>
                    <hr></hr>
                        {renderData(interviewList)}
                </Form>
            </Jumbotron>
        </div>
    );


function renderData(interviewList) {
    console.log("interviewmember dispatcher object returned from the server : ", interviewList);
      return 
      interviewList.map((interviewmember,index) =>{

        const {interviewid,location,date,start_time,end_time,hrrating,finalstatus} = interviewmember //destructuring
        const Candidateid = interviewmember.candidateEntity.candidateid;
        const Panelid = interviewmember.panelEntity.panelid;
        return(
    
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>interviewid</th>  
                        <th>location</th>
                        <th>date</th>
                        <th>start_time</th>
                        <th>end_time</th>
                        <th>hrrating</th>
                        <th>finalstatus</th>
                        <th>CandidateId</th> 
                       <th>PanelId</th>   
                        </tr>
                     </thead>
                     
                       <tbody>
                       <tr>
                        <td>{interviewid}</td>     
                        <td>{location}</td>
                        <td>{date}</td>
                        <td>{start_time}</td>
                        <td>{end_time}</td>
                        <td>{hrrating}</td>
                        <td>{finalstatus}</td> 
                        <td>{Candidateid}</td> 
                       <td>{Panelid} </td>    
                    </tr>
                    </tbody>
                    </Table>


    )
});
    }
}
export default ShowInterviewMember;
*/