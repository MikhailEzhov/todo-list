import { ListGroup } from 'react-bootstrap';



function CaseListItem({name}) {

    return(
        <ListGroup.Item as="li">
            {name}
        </ListGroup.Item>
    )
}

export default CaseListItem;