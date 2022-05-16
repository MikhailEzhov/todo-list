const initialState = {
    cases: [],
    filter: 'all'
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_CASE":
            const arrayWithNewCase = [...state.cases, action.payload];
            return {
                ...state,
                cases: arrayWithNewCase
            }

        case "DELETE_CASE":
            const arrayWithoutCase = state.cases.filter(item => item.id !== action.payload);
            return {
                ...state,
                cases: arrayWithoutCase
            }

        case "TOGGLE_STATUS":
            const arrayWithNewCaseStatuses = state.cases.map(item => {
                if (item.id === action.payload) {
                    return {...item, status: !item.status}
                }
                return item;
            })
            return {
                ...state,
                cases: arrayWithNewCaseStatuses
            }

        case "SELECT_FILTER":
        return {
            ...state,
            filter: action.payload
        }

        default:
            return state
    }
}

export default reducer;