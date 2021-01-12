//Panel Services Accessible By The Admin....
import SurrenderAsHR from './services/surrenderashr'
import ShowPanelMembers from './services/showpanelmember'
import DeletePanelMember from './services/deletepanelmember'
import SurrenderAsTechPanel from './services/surrenderastechpanel'

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
                    {/* Search an Panel component */}
                    <Card.Body><SurrenderAsHR></SurrenderAsHR></Card.Body>
                    {/* Search an Panel component */}
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Surrender As Tech panel
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    {/* Surrender as tech panel component */}
                    <Card.Body><SurrenderAsTechPanel></SurrenderAsTechPanel></Card.Body>
                    {/* Surrender as tech panel component */}
                    </Accordion.Collapse>
                </Card>


                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Show All Panel Member
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        {/* Fetch all Employee component */}
                        <Card.Body><ShowPanelMembers></ShowPanelMembers></Card.Body>
                        {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>
                
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            Delete Panel Member
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
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