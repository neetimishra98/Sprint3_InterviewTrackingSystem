import { Form, Table, Jumbotron, Button } from 'react-bootstrap'

const SearchCandidate = () => {
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
                        <Form.Label>Search by valid name/id</Form.Label>
                        <Form.Control type="text" placeholder="Name or Candidate ID" id="searchParameter"/>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <th>Candidate ID</th>
                            <th>Candidate Name</th>
                            <th>Location</th>
                            <th>Qualification</th>
                            <th>Designation</th>
                            <th>Experience</th>
                            <th>Primary Skills</th>
                            <th>Secondary Skills</th>
                            <th>Notice Period</th>
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

export default SearchCandidate;