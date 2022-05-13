import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';



function FilterCases({onSelectFilter}) {

    return(
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton id="tbg-radio-1" value={1} onClick={() => onSelectFilter('all')}>
                all
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2} onClick={() => onSelectFilter('done')}>
                done
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3} onClick={() => onSelectFilter('not done')}>
                not done
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default FilterCases;