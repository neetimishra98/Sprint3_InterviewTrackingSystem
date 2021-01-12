const globalReducer = (state=[], action) => {
    switch(action.type){
        //case to view a candidate for tech
        case 'VIEW_A_CANDIDATE_FOR_TECH': return action.payload;

        //case to view a candidate for hr
        case 'VIEW_A_CANDIDATE_FOR_HR': return action.payload;
    }

}

export default globalReducer;