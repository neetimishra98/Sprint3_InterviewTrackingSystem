const globalReducer = (state=[], action) => {
    switch(action.type){
        case 'SEARCH_EMPLOYEE': return action.payload;

        //CASE TO VIEW CANDIDATE FOR HR
        case 'VIEW_A_CANDIDATE_FOR_HR': return action.payload;

        //CASE TO SURRENDER AS HR
        case 'SURRENDER_AS_A_HR': return action.payload;
    }

}

export default globalReducer;