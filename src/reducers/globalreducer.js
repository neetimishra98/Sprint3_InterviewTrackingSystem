const globalReducer = (state=[], action) => {
    switch(action.type){
        case 'SEARCH_EMPLOYEE': return action.payload;
        // JUST ADD ALL CASES OF REDUCER HERE....
    }

}

export default globalReducer;