export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_COORDINATORS':
            return action.payload;
        default:
            return state;
    }
}