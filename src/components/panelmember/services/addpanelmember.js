import { Form, Table, Jumbotron, Button, Col, InputGroup, FormControl } from 'react-bootstrap'

const AddPanelMember = () => {
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
                        <Form.Label>What is the name of the Employee?</Form.Label>
                        {/* <Form.Control type="text" placeholder="Name of the Employee" id="searchParameter"/> */}
                        
                        <br></br>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Employee's Name"
                            aria-label="Employee's Name"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            {/* Check Button for Employee will run search employee..... */}
                                <Button variant="dark" type="button" call>
                                Check
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <hr></hr>
                        <Table size="sm">
                        <tbody id="table_content">
                            <tr>
                                <td>Select a Department</td>
                                <td>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Control as="select" defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>Human Resources (HR)</option>
                                            <option>Technical</option>
                                        </Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <br></br>
                            <tr>
                                <td>
                                    <Button variant="danger" type="reset" call>
                                        Reset
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="primary" type="submit" call>
                                        Add Member
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    </Form.Group>
                </Form>
            </Jumbotron>
        </div>
    );
}

export default AddPanelMember;