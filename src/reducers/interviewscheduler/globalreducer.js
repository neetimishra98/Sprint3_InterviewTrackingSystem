const globalReducer = (state=[], action) => {
    switch(action.type){
        //case to cancel the Interview
        case 'CANCEL_INTERVIEW': return action.payload;

        //CASE TO update the Interview
        case 'UPDATE_INTERVIEW': return action.payload;

        //Case to view interview member for tech
        case 'VIEW_ALL_INTERVIEW_MEMBERS_FOR_TECH': return action.payload;
    }

}

export default globalReducer;