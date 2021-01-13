const globalReducer = (state=[], action) => {
    switch(action.type){
        case 'SEARCH_EMPLOYEE': return action.payload;

        //CASE TO VIEW CANDIDATE FOR HR
        case 'VIEW_A_CANDIDATE_FOR_HR': return action.payload;

        //CASE TO SURRENDER AS HR
        case 'SURRENDER_AS_A_HR': return action.payload;

        //default:
           // return [];

<<<<<<< HEAD
        //case to cancel the Interview
        case 'CANCEL_INTERVIEW': return action.payload;

    }
=======
        }
>>>>>>> 365d39571a3e7471dc4c8e30deddb15a30692b3b
}
export default globalReducer;