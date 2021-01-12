const globalReducer = (state=[], action) => {
    switch(action.type){
        case 'SEARCH_EMPLOYEE': return action.payload;

      

}

export default globalReducer;
