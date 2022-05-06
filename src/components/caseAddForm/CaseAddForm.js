import { Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';



function CaseAddForm() {


    const [caseName, setCaseName] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();

        const newCase = {
            name: caseName
        }
        // console.log(newCase);

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