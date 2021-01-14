const globalReducer = (state= { panelmember: [], candidate: [] }, action) => {
    switch(action.type){
        case 'SEARCH_EMPLOYEE': return action.payload;
        case 'ADD_PANEL_MEMBER': return action.payload;
        case 'SHOW_EMPLOYEES': return action.payload;

<<<<<<< HEAD
      
        //CASE TO SURRENDER AS HR
        case 'SURRENDER_AS_A_HR': return action.payload;
=======
        //CASE TO VIEW A CANDIDATE FOR HR
        case 'VIEW_A_CANDIDATE_FOR_HR': 
        //state.candidate = action.payload;
        //console.log('VIEW_A_CANDIDATE_FOR_HR', state.candidate);
        //return state;
        return action.payload;

        //CASE TO SURRENDER AS HR
<<<<<<< HEAD
        case 'SURRENDER_AS_HR': 
        //state.panelmember = action.payload;
        //console.log('SURRENDER_AS_HR', state.panelmember);
        //return state;
        return action.payload;
=======
        case 'SURRENDER_AS_HR': return action.payload;
>>>>>>> 5794f54c70a8097291cdf095ee5a732c0b295498

        //default:
           // return [];

        //case to cancel the Interview
        case 'CANCEL_INTERVIEW': return action.payload;

        //case to update the Interview
        case 'UPDATE_INTERVIEW': return action.payload;

    }
>>>>>>> 318886e907abef18e0079b85dcc17322515c626b
}


export default globalReducer;
