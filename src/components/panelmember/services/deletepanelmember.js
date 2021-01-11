import { Form, Table, Jumbotron, Button } from 'react-bootstrap';


const DeletePanelMember = () => {
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
                        <Form.Label>Delete by valid Name</Form.Label>
                        <Form.Control type="text" placeholder="Employee Name" id="searchParameter" />
                    </Form.Group>
                    <Button variant="dark" type="submit" call>
                        Delete
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    );
}

export default DeletePanelMember;
