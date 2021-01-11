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
            </Accordion>
        </div>
    );
}

export default PanelMemberForAdmin;