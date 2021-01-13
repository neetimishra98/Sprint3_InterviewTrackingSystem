//Panel Services Accessible By The Admin....

import ShowPanelMembers from './services/showpanelmember'
import DeletePanelMember from './services/deletepanelmember'
import AddPanelMember from './services/addpanelmember'
import { Accordion, Card, Button } from 'react-bootstrap'

const PanelMemberForAdmin = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Accordion>
				<Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Add Panel Member
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        {/* Fetch all Employee component */}
                        <Card.Body><AddPanelMember></AddPanelMember></Card.Body>
                        {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Show All Panel Member
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        {/* Fetch all Employee component */}
                        <Card.Body><ShowPanelMembers></ShowPanelMembers></Card.Body>
                        {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Delete Panel Member
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        {/* Fetch all Employee component */}
                        <Card.Body><DeletePanelMember></DeletePanelMember></Card.Body>
                        {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default PanelMemberForAdmin;
