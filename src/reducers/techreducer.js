const TechReducer = (state=[], action) => {
    switch(action.type){

        //case to view all members
        case 'VIEW_INTERVIEW_MEMBER_FOR_TECH': 
       // state.techmember=action.payload;
       // console.log('VIEW_INTERVIEW_MEMBER_FOR_TECH', state.techmember);
       // return state;
       return action.payload;

        //case to give techrating
        case 'GIVE_TECH_RATING' : return action.payload;
       // state.techmember=action.payload;
        //console.log('GIVE_TECH_RATING', state.techmember);
        //return state;
        return action.payload;
    
        //CASE TO update the Interview
        case 'UPDATE_INTERVIEW': return action.payload;

    
      
    }

}

export default TechReducer;