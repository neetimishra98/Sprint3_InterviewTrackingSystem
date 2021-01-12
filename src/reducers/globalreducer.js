const globalReducer = (state=[], action) => {
    switch(action.type){
        case 'SEARCH_EMPLOYEE': return action.payload;
        case 'VIEW_ALL_INTERVIEW_MEMBERS_FOR_TECH': return action.payload;
        // JUST ADD ALL CASES OF REDUCER HERE....

        //CASE TO SHOW PANEL MEMBERS
        case 'SHOW_PANELMEMBER': return action.payload;

    }
}

export default globalReducer;
