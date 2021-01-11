//Interview Services Accessible By The Admin....


import GiveTechRating from './services/givetechrating';
import ViewInterviewMemberForTech from './services/viewinterviewmemberfortech';
import { Accordion, Card, Button } from 'react-bootstrap';
import CancelInterview from './services/cancelinterview.js'



const InterviewSchedulerForAdmin = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Search an Interview
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    {/* Search an Employee component */}
                    <Card.Body><CancelInterview></CancelInterview></Card.Body>
                    {/* Search an Employee component */}
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Cancel Interview
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    {/* Fetch all Employee component */}
                    <Card.Body><div></div></Card.Body>
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        View All Interview Members For Tech
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    {/* Fetch all Employee component */}
                    <Card.Body><div></div></Card.Body>
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        View All Candidates using Interview Id
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    {/* Fetch all Employee component */}
                    <Card.Body><ViewInterviewMemberForTech></ViewInterviewMemberForTech></Card.Body>
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                       Give Tech Rating to a Candidate
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
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