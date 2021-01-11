//Interview Services Accessible By The Admin....
import GiveHrRating from './services/givehrrating'
import ViewInterviewMembersForHr from './services/viewinterviewmembersforhr'
import ViewListForHr from './services/viewlistforhr'

import { Accordion, Card, Button } from 'react-bootstrap'


const InterviewSchedulerForAdmin = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Give HrRating To a Candidate
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    {/* givehrrating to InterviewScheduler component */}
                    <Card.Body><GiveHrRating></GiveHrRating></Card.Body>
                    {/* givehrrating to InterviewScheduler component */}
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        View All Candidates using Interview id
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    {/* Fetch all interview members from  InterviewScheduler component  using interviewid*/}
                    <Card.Body><ViewInterviewMembersForHr></ViewInterviewMembersForHr></Card.Body>
                    {/* Fetch all interview members from  InterviewScheduler component  using interviewid*/}
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        View All HrInterview Members
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    {/* Fetch all Interview Members from InterviewScheduler component */}
                    <Card.Body><ViewListForHr></ViewListForHr></Card.Body>
                    {/* Fetch all Interview Members from InterviewScheduler component */}
                    </Accordion.Collapse>
                </Card>
                </Accordion>
        </div>
    );
}

export default InterviewSchedulerForAdmin;