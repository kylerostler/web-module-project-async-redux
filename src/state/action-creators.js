import * as types from './action-types'
import axios from 'axios'

export const getFactFromApi = () => dispatch => {
    axios.get('https://catfact.ninja/fact')
    .then(res => {
        dispatch({ type: types.ADD_NEW_FACT, payload: res.data.fact})
    })
    .catch(err => {
        debugger
    })
}