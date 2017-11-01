import axios from 'axios';


export function searchCity(city) {
    return axios.get('/api/search/' + city).then(function({ data }) {
        return {
            type: 'SEARCH_RESULTS',
            results: data.results
        };
    });
}

export function loggedIn(data) {
    return {
        type: 'LOG_IN',
        data
    };
}

export function loggedOut() {
    return {
        type: 'LOG_OUT'
    };
}
