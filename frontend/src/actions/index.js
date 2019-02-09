import prakrida from '../apis/prakrida';
import history from '../history';

export const fetchCoordinators = () => async dispatch => {
    const response = await prakrida.get('/coordinator_list.php');
    dispatch({type: 'FETCH_COORDINATORS', payload: response.data.coordinator});
};
export const fetchColleges = () => async dispatch => {
    const response = await prakrida.get('/college_list.php');
    dispatch({type: 'FETCH_COLLEGES', payload: response.data.college});
};
export const fetchGames = () => async dispatch => {
    const response = await prakrida.get('/games_list.php');
    dispatch({type: 'FETCH_GAMES', payload: response.data.games});
};
export const fetchTeams = () => async dispatch => {
    const response = await prakrida.get('/our_team.php');
    dispatch({type: 'FETCH_TEAM', payload: response.data.ourteam});
};
export const fetchSponsors = () => async dispatch => {
    const response = await prakrida.get('/sponsrs.php');
    dispatch({type: 'FETCH_SPONSOR', payload: response.data.ourteam});
};
export const reset = ()=>{
    return {
        type: 'REGISTER',
        payload: false
    }
}
export const register = (formValues) => async (dispatch, getState) => {
    /*if(formValues.Game === 'Basketball' || formValues.Game === 'Football' || formValues.Game === 'Lawn Tennis' || formValues.Game === 'Volley Ball' || formValues.Game === 'Kabaddi'){
        formValues['Charge'] = '200';
    }else if(formValues.Game === 'Chess' || formValues.Game === 'Table Tennis' || formValues.Game === 'Badminton' || formValues.Game === 'Carrom'){
        formValues['Charge'] = '100';
    }else{
        formValues['Charge'] = '100';
    }*/
    let data = JSON.stringify(formValues);
    console.log(formValues);
    
    let config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
      'Access-Control-Allow-Credentials': true
      }
    }
    const response = await prakrida.post('/new_reg.php', formValues, config);
    console.log(response);
    if(response.data){
        dispatch({type: 'REGISTER', payload: true});
    }
};