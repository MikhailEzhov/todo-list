import { Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch } from 'react-redux';
import { addCase } from '../../actions/actions';



function CaseAddForm(props) {

    const [caseName, setCaseName] = useState('');

    const dispatch = useDispatch();


    const onSubmit = (e) => {
        e.preventDefault();

        if(caseName.length < 1) {
            return;
        };

        const newCase = {
            name: caseName,
            id: uuidv4(),
            status: false
        };

        dispatch(addCase(newCase));

        setCaseName('');
    }


    return(
        <Form onSubmit={onSubmit}>
            <Row>
                <Col>
                    <Form.Control 
                        placeholder="Enter case name"
                        value={caseName}
                        onChange={(e) => setCaseName(e.target.value)}
                    />
                </Col>
                <Col>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default CaseAddForm;