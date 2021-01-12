//Interview Services Accessible By The Admin....
import CancelInterview from './services/cancelinterview.js'
import UpdateInterview from "./services/updatescheduleinterview";
import GiveTechRating from './services/givetechrating';
import ViewInterviewMemberForTech from './services/viewinterviewmemberfortech';
import ViewAllInterviewMembers from './services/viewallinterviewmembers';
import { Accordion, Card, Button } from 'react-bootstrap';



const InterviewSchedulerForAdmin = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Accordion>
               
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        Cancel Interview
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    {/* Search an Employee component */}
                    <Card.Body><CancelInterview></CancelInterview></Card.Body>
                    {/* Search an Employee component */}
                    </Accordion.Collapse>
                </Card>




               


                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                        View All Interview Members For Tech
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                    {/* Fetch all Employee component */}
                    <Card.Body><ViewAllInterviewMembers></ViewAllInterviewMembers></Card.Body>
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>



                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="6">
                        View All Candidates using Interview Id
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                    {/* Fetch all Employee component */}
                    <Card.Body><ViewInterviewMemberForTech></ViewInterviewMemberForTech></Card.Body>
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>




                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="7">
                       Give Tech Rating to a Candidate
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
                    {/* Fetch all Employee component */}
                    <Card.Body><GiveTechRating></GiveTechRating></Card.Body>
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default InterviewSchedulerForAdmin;