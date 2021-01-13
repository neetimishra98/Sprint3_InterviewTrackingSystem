const globalReducer = (state={interviewmembers: []}, action) => {
    switch(action.type){
        case 'GIVE_HR_RATING': return action.payload;

        
        //CASE TO SHOW INTERVIEW MEMBERS
        case 'SHOW_INTERVIEWMEMBER':
            state.interviewmembers = action.payload;
            return state;
    

        default:
            return [];
    }
}

/*export default globalReducer;
        //case to cancel the Interview
        case 'CANCEL_INTERVIEW': return action.payload;

        //CASE TO update the Interview
        case 'UPDATE_INTERVIEW': return action.payload;

        //Case to view interview member for tech
        case 'VIEW_INTERVIEW_MEMBER_FOR_TECH': return action.payload;

      
    }

}

export default globalReducer;
*/