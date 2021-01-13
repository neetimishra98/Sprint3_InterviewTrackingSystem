const globalReducer = (state=[], action) => {
    switch(action.type){
        case 'SEARCH_EMPLOYEE': return action.payload;
        case 'ADD_PANEL_MEMBER': return action.payload;
        case 'SHOW_EMPLOYEES': return action.payload;

      

<<<<<<< HEAD
        //CASE TO SURRENDER AS HR
        case 'SURRENDER_AS_A_HR': return action.payload;

        //default:
           // return [];

        //case to cancel the Interview
        case 'CANCEL_INTERVIEW': return action.payload;

    }
=======
>>>>>>> 662842d05b06d139ec54285e1caf5e7ab189689a
}
}

export default globalReducer;
