/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

const URL = 'http://localhost:3333/smurfs';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => async dispatch => {
  dispatch({ type: FETCHING_DATA });
  try {
    const { data } = await axios.get(`${URL}`);
    dispatch({ type: FETCHING_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCHING_FAILURE, payload: err });
  }
};

export const addSmurf = smurf => async dispatch => {
  dispatch({ type: FETCHING_DATA });
  try {
    const { data } = await axios.post(`${URL}`, smurf);
    dispatch({ type: FETCHING_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCHING_FAILURE, payload: err });
  }
};
