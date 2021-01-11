import { Form, Table, Jumbotron, Button } from 'react-bootstrap';


const ShowPanelMembers = () => {
    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Jumbotron style={{ width: 700 }}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>List of Panel Members</Form.Label>
                        <br></br>
                        <br></br>
                        <Button variant="dark" type="submit" call>
                            Search
                        </Button>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <th>Panel ID</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Employee</th>
                        </thead>
                        <tbody id="table_content">
                        </tbody>
                    </Table>
                </Form>
            </Jumbotron>
        </div>
    );
}

export default ShowPanelMembers;
