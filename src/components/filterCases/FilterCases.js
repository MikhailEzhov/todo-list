import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';



function FilterCases({onSelectFilter, counterAll, counterDone, counterNotDone}) {

    return(
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton id="tbg-radio-1" value={1} onClick={() => onSelectFilter('all')}>
                <div>
                    all
                </div>
                {counterAll}
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2} onClick={() => onSelectFilter('done')}>
                <div>
                    done
                </div>
                {counterDone}
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3} onClick={() => onSelectFilter('not done')}>
                <div>
                    not done
                </div>
                {counterNotDone}
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default FilterCases;