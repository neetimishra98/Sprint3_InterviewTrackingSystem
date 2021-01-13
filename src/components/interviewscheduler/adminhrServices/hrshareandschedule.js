//import { Form, Table, Jumbotron, Button } from 'react-bootstrap'
import { Nav, Spinner, Dropdown, Navbar, NavDropdown, MenuItem, Form, Jumbotron, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl } from 'react-bootstrap';

const HRShareandschedule = () => {

    return (
        // All Final Operations and Functions

        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Jumbotron style={{ width: 500 }}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>Share Candidate and Shecdule HR Interview</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Enter Candidate Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>


                    <Form.Group controlId="formBasicName">
                        <Form.Label>Enter Panel Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>


                    <Form.Group controlId="formBasicName">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" />
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


                    <Form.Group controlId="formBasicExperience">
                        <Form.Label>HR Interview Rating</Form.Label>
                        <Form.Control as="select">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label> Final Status </Form.Label>
                        <Form.Control as="select">
                            <option>Pending</option>
                            <option>Technical Completed</option>
                            <option>HR Completed</option>
                        </Form.Control>

                    </Form.Group>

                    <Button variant="success" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                         SCHEDULING HR INTERVIEW
                    </Button>

                </Form>
            </Jumbotron>
        </div>
    );
}
export default HRShareandschedule;