import axios from 'axios';
import { GET_LEAVES } from '../actionTypes';

const getLeaves = () => dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .get('/api/leave/get-leaves')
      .then(res => {
        dispatch({ type: GET_LEAVES, payload: res.data });
        resolve();
      })
      .catch(err => {
        dispatch({ type: GET_LEAVES, payload: [] });
        reject();
      });
  });
};

export default getLeaves;
