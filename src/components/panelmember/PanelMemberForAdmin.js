//Panel Services Accessible By The Admin....
import SurrenderAsHR from './services/surrenderAsHr'

import { Accordion, Card, Button } from 'react-bootstrap'

const PanelMemberForAdmin = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Surrender As HR Panel
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        {/* Search an Employee component */}
                        <Card.Body><SurrenderAsHR></SurrenderAsHR></Card.Body>
                        {/* Search an Employee component */}
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
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
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