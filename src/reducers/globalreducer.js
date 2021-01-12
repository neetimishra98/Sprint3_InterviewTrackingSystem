const globalReducer = (state=[], action) => {
    switch(action.type){
        //case to view a candidate for tech
        case 'VIEW_A_CANDIDATE_FOR_TECH': return action.payload;
        //case to surrender as tech
        case 'SURRENDER_AS_A_TECH': return action.payload;
    }

}

export default globalReducer;