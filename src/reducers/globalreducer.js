const globalReducer = (state={interviewmembers:[]}, action) => {
    switch(action.type){
        case 'SEARCH_EMPLOYEE': return action.payload;
        case 'ADD_PANEL_MEMBER': return action.payload;
        case 'SHOW_EMPLOYEES': return action.payload;

        //CASE TO VIEW A CANDIDATE FOR HR
        case 'VIEW_A_CANDIDATE_FOR_HR': return action.payload;

        //CASE TO SURRENDER AS HR
        case 'SURRENDER_AS_HR': return action.payload;

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
