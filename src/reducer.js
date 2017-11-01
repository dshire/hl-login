export function reducer(state = {}, action) {

    if (action.type === 'LOG_IN') {
        return Object.assign({}, state, {
            isLoggedIn: true,
            user: action.data.user
        });
    }

    if (action.type === 'LOG_OUT') {
        return Object.assign({}, state, {
            isLoggedIn: false,
            user: null
        });
    }

    if (action.type === 'SEARCH_RESULTS') {
        return Object.assign({}, state, {
            results: action.results
        });
    }

    return state;
}
