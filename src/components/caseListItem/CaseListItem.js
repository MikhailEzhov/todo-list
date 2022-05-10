import { ListGroup, Row, Col, Button } from 'react-bootstrap';



function CaseListItem({name, onDelete}) {

    return(
        <ListGroup.Item as="li">
            <Row>
                <Col>
                    {name}
                </Col>
                <Col>
                    <Button 
                        variant="outline-danger" 
                        size="sm"
                        onClick={onDelete}
                        >delete
                    </Button>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default CaseListItem;