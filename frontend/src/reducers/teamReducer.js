export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_TEAM':
            return action.payload;
        default:
            return state;
    }
}