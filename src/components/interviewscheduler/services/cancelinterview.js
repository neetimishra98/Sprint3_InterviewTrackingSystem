import { Form, Table, Jumbotron, Button } from 'react-bootstrap'

const CancelInterview = () => {
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
                        <Form.Label>Enter Interview ID to Cancel</Form.Label>
                        <Form.Control type="text" placeholder="Interview Id" id="searchParameter"/>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                           
                        </thead>
                        <tbody id="table_content">
                        </tbody>
                    </Table>
                    <Button variant="dark" type="submit" call>
                        Cancel
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    );
}

export default CancelInterview;