import CancelInterview from './services/cancelinterview.js'
import UpdateInterview from "./services/updatescheduleinterview";
import GiveTechRating from './services/givetechrating';
import ViewInterviewMemberForTech from './services/viewinterviewmemberfortech';
import ViewAllInterviewMembersForTech from './services/viewallinterviewmembers';
import { Accordion, Card, Button } from 'react-bootstrap';

const TechServices = () => {
    return (
        <div>
             <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                        View All Interview Members For Tech
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                    {/* Fetch all Employee component */}
                    <Card.Body><ViewAllInterviewMembersForTech></ViewAllInterviewMembersForTech></Card.Body>
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
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                        Update Schedule Interview
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                    {/* Fetch all Employee component */}
                    <Card.Body><UpdateInterview></UpdateInterview></Card.Body>
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>


                
            </Accordion>
        </div>
    );
}

export default TechServices;