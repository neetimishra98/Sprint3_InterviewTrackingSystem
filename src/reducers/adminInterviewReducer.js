const InterviewReducer = (state=[], action) => {
    switch(action.type){
        

        //CASE TO update the Interview
        case 'UPDATE_INTERVIEW': return action.payload;

         //case to cancel the Interview
         case 'CANCEL_INTERVIEW': return action.payload;

      
    }

}

export default InterviewReducer;