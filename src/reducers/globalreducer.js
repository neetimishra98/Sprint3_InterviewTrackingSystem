const globalReducer = (state=[], action) => {
    switch(action.type){
        case 'SEARCH_EMPLOYEE': return action.payload;
        
        // JUST ADD ALL CASES OF REDUCER HERE....

        //CASE TO SHOW PANEL MEMBERS
        case 'SHOW_PANELMEMBER': return action.payload;

    }
}

export default globalReducer;
