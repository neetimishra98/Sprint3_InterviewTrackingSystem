const globalReducer = (state=[], action) => {
    switch(action.type){
    
        case 'SEARCH_EMPLOYEE': return action.payload;
        case 'ADD_PANEL_MEMBER': return action.payload;
        case 'SHOW_EMPLOYEES': return action.payload;

      

<<<<<<< HEAD
        //case to give techrating
        case 'GIVE_TECH_RATING' : return action.payload;

        //case to view all members
        case 'VIEW_INTERVIEW_MEMBER_FOR_TECH': return action.payload;

=======
}
>>>>>>> 662842d05b06d139ec54285e1caf5e7ab189689a
}
}
export default globalReducer;
