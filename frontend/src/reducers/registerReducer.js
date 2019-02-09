export default (state = false, action) => {
    switch(action.type){
        case 'REGISTER':
            return action.payload;
        default:
            return state;
    }
}