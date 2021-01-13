const globalReducer = (state=[], action) => {
    switch(action.type){
        case 'GIVE_HR_RATING': return action.payload;

        
        //CASE TO SHOW INTERVIEW MEMBERS
        case 'SHOW_INTERVIEWMEMBER': return action.payload;

        default:
            return [];
    }
}

export default globalReducer;
