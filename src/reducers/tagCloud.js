import {FETCH_TAG_CLOUD_DATA} from '../constansts/actionTypes';


export default (state = {}, action = {}) => {
    switch (action.type) {
        case FETCH_TAG_CLOUD_DATA:
            return action.payload;
        default:
            return state;
    }
}