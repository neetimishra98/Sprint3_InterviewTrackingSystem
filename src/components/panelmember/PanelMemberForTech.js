//Panel Services Accessible By The Admin....
//import SurrenderAsTechPanel from './services/surrendertechpanel'

import { Accordion, Card, Button } from 'react-bootstrap'

const PanelMemberForTech = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Surrender As Tech Panel
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    {/* Search an Panel component */}
                    <Card.Body>{/*<SurrenderAsTechPanel></SurrenderAsTechPanel>*/}</Card.Body>
                    {/* Search an Panel component */}
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default PanelMemberForTech;