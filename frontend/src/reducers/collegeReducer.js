export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_COLLEGES':
            return action.payload;
        default:
            return state;
    }
}