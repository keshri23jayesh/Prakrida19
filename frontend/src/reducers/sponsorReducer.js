export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_SPONSOR':
            return action.payload;
        default:
            return state;
    }
}