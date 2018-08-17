import {FETCH_TAG_CLOUD_DATA} from '../constansts/actionTypes';
import {STATUS_SUCCESS} from '../constansts/httpStatuses';
import api from '../api';
import transformArrayIntoObject from '../helpers/transformArrayIntoObject';

export const loadTagCloudDataRequest = (payload) => ({
    type: FETCH_TAG_CLOUD_DATA,
    payload
});

export const loadTagCloudData = () => (dispatch) => {
    api.getData('https://gist.githubusercontent.com/snownoop/e6ca04705cf03cbe6ef9beaf16a306ab/raw/07906333730ca961a8091a8c16b05d26a8ee7cd9/Tags%2520Cloud%2520Data').then(res => {
        if (res.status === STATUS_SUCCESS) {
            const normalizedData = transformArrayIntoObject(res.data, 'id');
            dispatch(loadTagCloudDataRequest(normalizedData));
        }
    });
}
