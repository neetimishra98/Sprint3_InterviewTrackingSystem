const globalReducer = (state=[], action) => {
    switch(action.type){
        

        //CASE TO update the Interview
        case 'UPDATE_INTERVIEW': return action.payload;
/*
        //Case to view interview member for tech
        case 'VIEW_INTERVIEW_MEMBER_FOR_TECH': return action.payload;
*/
      
    }

}

export default globalReducer;