const globalReducer = (state={interviewmembers:[]}, action) => {
    switch(action.type){
        case 'SEARCH_EMPLOYEE': return action.payload;
        
        // JUST ADD ALL CASES OF REDUCER HERE....

        //CASE TO SHOW PANEL MEMBERS
        case 'SHOW_PANELMEMBER': return action.payload;

        //case to give techrating
        case 'GIVE_TECH_RATING' : return action.payload;

        //case to view all members
        case 'VIEW_INTERVIEW_MEMBER_FOR_TECH': return action.payload;


        //case to view all interview members
        case 'SHOW_INTERVIEWMEMBER':
            state.interviewmembers = action.payload;
            console.log('SHOW_INTERVIEWMEMBER' , state.interview);
            return state;



        //case to view all members
        case 'VIEW_INTERVIEW_MEMBER_FOR_HR': return action.payload;


        
    }
}

export default globalReducer;
