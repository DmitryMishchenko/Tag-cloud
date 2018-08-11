import {FETCH_TAG_CLOUD_DATA} from '../constansts/actionTypes';
import {STATUS_SUCCESS} from '../constansts/httpStatuses';
import api from '../api';
import transformArrayIntoObject from '../helpers/transformArrayIntoObject';

export const loadTagCloudDataRequest = (payload) => ({
    type: FETCH_TAG_CLOUD_DATA,
    payload
});

export const loadTagCloudData = () => (dispatch) => {
    api.getData('https://gist.githubusercontent.com/ButuzGOL/d856ae6d70ffd02a8a37/raw/39c000bc4f57f2b56c2eb927acd48773e6a4e4a4/Data').then(res => {
        if (res.status === STATUS_SUCCESS) {
            const normalizedData = transformArrayIntoObject(res.data, 'id');
            dispatch(loadTagCloudDataRequest(normalizedData));
        }
    });
}
