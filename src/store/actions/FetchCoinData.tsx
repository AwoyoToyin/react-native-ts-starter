import axios from 'axios';
import { API_BASE_URL } from '../../constants/API';
import { FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL } from '../../Utils/ActionTypes';

export default function FetchCoinData() {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA });

        return axios.get(`${API_BASE_URL}/v1/ticker/?limit=10`)
            .then((res) => {
                dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
            })
            .catch((error) => {
                dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: error.data })
            });
    };
}
