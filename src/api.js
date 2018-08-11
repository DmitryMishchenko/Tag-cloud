import axios from 'axios';

export default {
    getData(endpoint) {
        return axios({
            method: 'GET',
            url: endpoint,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}