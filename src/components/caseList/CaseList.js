import CaseListItem from '../caseListItem/CaseListItem';
import { ListGroup } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import { deleteCase, toggleStatus } from '../../actions/actions';



function CaseList() {

    const {cases, filter} = useSelector(state => state);

    const dispatch = useDispatch();


    const filteringCases = (cases, filter) => {
        switch (filter) {
            case 'done':
                return cases.filter(item => item.status === true);
            case 'not done':
                return cases.filter(item => item.status === false);
            default:
                return cases;
        }
    }

    const filteredСases = filteringCases(cases, filter);


    const elements = filteredСases.map(item => {
        const {id, ...itemProps} = item;
        return (
            <CaseListItem 
                key={id} 
                {...itemProps}
                deleteCase={() => dispatch(deleteCase(id))}
                toggleStatus={() => dispatch(toggleStatus(id))}
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