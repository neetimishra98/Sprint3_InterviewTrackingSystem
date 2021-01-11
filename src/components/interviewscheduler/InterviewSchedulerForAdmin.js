//Interview Services Accessible By The Admin....

<<<<<<< HEAD
import GiveTechRating from './services/givetechrating';
import ViewInterviewMemberForTech from './services/viewinterviewmemberfortech';
import { Accordion, Card, Button } from 'react-bootstrap';


=======
import CancelInterview from './services/cancelinterview.js'

import { Accordion, Card, Button } from 'react-bootstrap'
>>>>>>> 2e396b29a0c3f734eef5f0aed8d7df644907cede

const InterviewSchedulerForAdmin = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
<<<<<<< HEAD
                        View All Interview Members For Tech
=======
                        Search an Interview
>>>>>>> 2e396b29a0c3f734eef5f0aed8d7df644907cede
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    {/* Search an Employee component */}
<<<<<<< HEAD
                    <Card.Body><div></div></Card.Body>
=======
                    <Card.Body><CancelInterview></CancelInterview></Card.Body>
>>>>>>> 2e396b29a0c3f734eef5f0aed8d7df644907cede
                    {/* Search an Employee component */}
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
<<<<<<< HEAD
                        View Interview Member(Candidate Details) For Tech Using Interview Id
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    {/* Search an Employee component */}
                    <Card.Body><ViewInterviewMemberForTech></ViewInterviewMemberForTech></Card.Body>
                    {/* Search an Employee component */}
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Give TechRating to a Candidate
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    {/* Fetch all Employee component */}
                    <Card.Body><GiveTechRating></GiveTechRating></Card.Body>
=======
                        Cancel Interview
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    {/* Fetch all Employee component */}
                    <Card.Body><div></div></Card.Body>
>>>>>>> 2e396b29a0c3f734eef5f0aed8d7df644907cede
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default InterviewSchedulerForAdmin;