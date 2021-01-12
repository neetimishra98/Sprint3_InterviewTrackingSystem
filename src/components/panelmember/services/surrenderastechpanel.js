import { Form, Table, Jumbotron, Button } from 'react-bootstrap'

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
                        <Form.Label>Enter Panel id to surrender</Form.Label>
                        <Form.Control type="text" placeholder="Panel ID" id="searchParameter"/>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <th>Panel ID</th>
                        </thead>
                        <tbody id="table_content">
                        </tbody>
                    </Table>
                    <Button variant="dark" type="submit" call>
                        Surrender
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    );
}

export default SurrenderAsTechPanel;