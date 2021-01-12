//Panel Services Accessible By The Admin....
import SurrenderAsHR from './hrservices/surrenderashr'
import ShowPanelMembers from './services/showpanelmember'
import DeletePanelMember from './services/deletepanelmember'
import SurrenderAsTechPanel from './services/surrenderastechpanel'

import { Accordion, Card, Button } from 'react-bootstrap'

const PanelMemberForHR = () => {
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
                    <Accordion.Collapse eventKey="1">
                    {/* Search an Panel component */}
                    <Card.Body><SurrenderAsHR></SurrenderAsHR></Card.Body>
                    {/* Search an Panel component */}
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default PanelMemberForHR;