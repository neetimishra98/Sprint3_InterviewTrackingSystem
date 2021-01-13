const globalReducer = (state={interviewscheduler: []}, action) => {
    switch(action.type){
    /*
        case 'SEARCH_EMPLOYEE': return action.payload;
        
        // JUST ADD ALL CASES OF REDUCER HERE....

        //CASE TO SHOW PANEL MEMBERS
        case 'SHOW_PANELMEMBER': return action.payload;

        //case to give techrating
        case 'GIVE_TECH_RATING' : return action.payload;

        //case to view all members
        case 'VIEW_INTERVIEW_MEMBER_FOR_TECH': return action.payload;

    }
    */
   case 'GIVE_TECH_RATING':
            state.interviewscheduler = action.payload;
            return state;
}
}
export default globalReducer;
