//Employee Services Accessible By The Admin....

import SearchCandidate from './services/searchCandidate'
import ViewACandidateForTech from './services/viewatechcandidate'
import { Accordion, Card, Button } from 'react-bootstrap'

const CandidateForAdmin = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        View a Candidate
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    {/* Search an Candidate component */}
                    <Card.Body><SearchCandidate></SearchCandidate></Card.Body>
                    {/* Search an Candidate component */}
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        View a Candidate(Tech)
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    {/* Search an Candidate component */}
                    <Card.Body><ViewACandidateForTech></ViewACandidateForTech></Card.Body>
                    {/* Search an Candidate component */}
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default CandidateForAdmin;