import { Form, Table, Jumbotron, Button } from 'react-bootstrap'

const HRUpdateInterview = () => {
    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Jumbotron style={{width: 500}}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>Enter Interview ID to Update</Form.Label>
                        <Form.Control type="text" placeholder="Interview Id" id="searchParameter"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Select Date</Form.Label>
                        <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>


                    <Form.Group controlId="formBasicName">
                        <Form.Label>Start Time </Form.Label>
                        <Form.Control type="time" />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>End Time </Form.Label>
                        <Form.Control type="time" />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>



                    <Table striped bordered hover size="sm">
                        <thead>
                           
                        </thead>
                        <tbody id="table_content">
                        </tbody>
                    </Table>
                    <Button variant="dark" type="submit" call>
                        Update
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    );
}

export default HRUpdateInterview;