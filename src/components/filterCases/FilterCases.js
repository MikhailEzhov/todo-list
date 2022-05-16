import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../actions/actions';



function FilterCases() {

    const cases = useSelector(state => state.cases);

    const dispatch = useDispatch();


    const counterAll = cases.length;
    const counterDone = cases.filter(item => item.status === true).length;
    const counterNotDone = cases.filter(item => item.status === false).length;


    return(
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton id="tbg-radio-1" value={1} onClick={() => dispatch(selectFilter('all'))}>
                <div>
                    all
                </div>
                {counterAll}
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2} onClick={() => dispatch(selectFilter('done'))}>
                <div>
                    done
                </div>
                {counterDone}
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3} onClick={() => dispatch(selectFilter('not done'))}>
                <div>
                    not done
                </div>
                {counterNotDone}
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default FilterCases;