export function addCase (newCase) {
    return {
        type: "ADD_CASE",
        payload: newCase
    }
}

export function deleteCase (id) {
    return {
        type: "DELETE_CASE",
        payload: id
    }
}

export function toggleStatus (id) {
    return {
        type: "TOGGLE_STATUS",
        payload: id
    }
}

export function selectFilter (option) {
    return {
        type: "SELECT_FILTER",
        payload: option
    }
}