import { Form, Table, Jumbotron, Button } from 'react-bootstrap'

const ViewInterviewMemberForTech = () => {
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
                        <Form.Label>View Candidate details by entering Interview Id</Form.Label>
                        <Form.Control type="text" placeholder="Interview ID" id="searchParameter"/>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <th>Interview ID</th>
                            
                        </thead>
                        <tbody id="table_content">
                        </tbody>
                    </Table>
                    <Button variant="dark" type="submit" call>
                        Search
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    );
}

export default ViewInterviewMemberForTech;