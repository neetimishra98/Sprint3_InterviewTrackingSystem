import { Form, Jumbotron, Button } from 'react-bootstrap'

const SurrenderAsTechPanel = () => {
    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Jumbotron style={{width: 700}}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>Surrender As Tech Panel</Form.Label>
                        <Form.Control type="text" placeholder="Panel ID" id="searchParameter"/>
                    </Form.Group>
                    <Button variant="dark" type="submit" call>
                        Surrender
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    );
}

export default SurrenderAsTechPanel;