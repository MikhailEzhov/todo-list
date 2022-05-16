import { ListGroup, Row, Col, Button, Badge } from 'react-bootstrap';



function CaseListItem({name, status, deleteCase, toggleStatus}) {

    return(
        <ListGroup.Item as="li">
            <Row>
                <Col>
                    {name}
                </Col>
                <Col>
                    <Badge 
                        pill 
                        bg="secondary"  
                        onClick={toggleStatus} 
                        style={{ cursor: 'pointer' }}
                        >
                        {status ? 'done' : 'not done'}
                    </Badge>
                </Col>
                <Col>
                    <Button 
                        variant="outline-danger" 
                        size="sm"
                        onClick={deleteCase}
                        >delete
                    </Button>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default CaseListItem;