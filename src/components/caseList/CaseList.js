import CaseListItem from '../caseListItem/CaseListItem';
import { ListGroup } from 'react-bootstrap';



function CaseList({cases, onDelete}) {

    const elements = cases.map(item => {
        const {id, ...itemProps} = item;
        return (
            <CaseListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
            />
        )
    })


    return(
        <ListGroup as="ul">
            <span>List:</span>
            {elements}
        </ListGroup>
    )
}

export default CaseList;