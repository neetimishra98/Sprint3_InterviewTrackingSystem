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
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Update Interview
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    {/* Search an Employee component */}
                    <Card.Body><UpdateInterview></UpdateInterview></Card.Body>
                    {/* Search an Employee component */}
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default InterviewSchedulerForAdmin;