import { ListGroup, Row, Col, Button, Badge } from 'react-bootstrap';



function CaseListItem({name, onDelete, status, onToggleStatus}) {


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
                        onClick={onToggleStatus} 
                        style={{ cursor: 'pointer' }}
                        >
                        {status ? 'done' : 'not done'}
                    </Badge>
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