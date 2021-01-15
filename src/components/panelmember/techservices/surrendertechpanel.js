import { render } from '@testing-library/react';
import React, { useState } from 'react'
import { Form, Table, Jumbotron, Button, Modal, Alert } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import SurrenderAsATechAction from '../../../actions/panelmember/surrender_as_tech_action';

const SurrenderAsTechPanel = (props) => {

    

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
                        <Form.Label>Enter your Panel ID</Form.Label>
                        <Form.Control id="pathVariable" type="text" placeholder="Panel ID" />
                    </Form.Group>
                    <Button variant="dark" type="button" call>
                        Surrender
                    </Button>
                    <hr></hr>
                </Form>
            </Jumbotron>
        </div>
    );

}

export default SurrenderAsTechPanel;


