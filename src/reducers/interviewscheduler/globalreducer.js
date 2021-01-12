const globalReducer = (state=[], action) => {
    switch(action.type){
        //case to cancel the Interview
        case 'CANCEL_INTERVIEW': return action.payload;

        //CASE TO update the Interview
        case 'UPDATE_INTERVIEW': return action.payload;

        //Case to view interview member for tech
        case 'VIEW_INTERVIEW_MEMBER_FOR_TECH': return action.payload;

        //case to give techrating
        case 'GIVE_TECH_RATING' : return action.payload;
    }

}

export default globalReducer;