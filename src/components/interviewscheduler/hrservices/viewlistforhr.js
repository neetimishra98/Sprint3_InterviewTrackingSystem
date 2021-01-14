//Hr Interview Scheduler Services Component : CHECK WARNING.info FOR NOTES.....
import React from 'react'
import { Form, Table, Jumbotron, Button ,Modal} from 'react-bootstrap';
import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ShowListForHrAction from '../../../actions/interviewscheduler/showlistforhr_action';



const ViewListForHr = (props) => {

    var pathVar = null;
    let member = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>ShowListForHrAction_Function(), [])
        const ShowListForHrAction_Function = () => {
            dispatcher(ShowListForHrAction(pathVar));
        }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("vareab").value;
        dispatcher(ShowListForHrAction(pathVar));
        renderTableDataHr(member);
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
                        <Form.Label> View Candidate Using interviewid</Form.Label>
                        <Form.Control id="vareab" type="text" placeholder="Interview ID"/>
                        <br></br>
                        <br></br>
                        <Button variant="dark" type="button" call onClick={handleSubmit}>
                            Search
                        </Button>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <th>Candidate ID</th>
                            <th>Candidate Name</th>
                            <th>Location</th>
                            <th>Qualification</th>
                            <th>Designation</th>
                            <th>Experience</th>
                            <th>Primary<br></br>Skills</th>
                            <th>Secondary <br></br>Skills</th>
                            <th>Notice <br></br>Period</th>
                        </thead>
                        <tbody id="table_content">
                        {renderTableDataHr(member)}
                        </tbody>
                    </Table>
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
            <Modal.Title>InterviewMember Not Found</Modal.Title>
          </Modal.Header>
          <Modal.Body>Entered incorrect or blank interviewid</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }



    function renderTableDataHr(member) {   
        console.log("interview member dispatcher object returned from the server : ", member);
        if(member!==undefined){
            return(
                <tr>
                    <td>{member.data.candidateid}</td>
                    <td>{member.data.candidatename}</td>
                    <td>{member.data.location}</td>
                    <td>{member.data.qualification}</td>
                    <td>{member.data.designation}</td>
                    <td>{member.data.experience}</td>
                    <td>{member.data.primaryskills}</td>
                    <td>{member.data.secondaryskills}</td>
                    <td>{member.data.noticeperiod}</td>
                </tr>
            );
        }

            if(member!==undefined && member===null){
                return(<Box/>);
        }
    
    }        
}

export default ViewListForHr;