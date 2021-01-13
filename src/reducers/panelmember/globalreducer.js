const globalReducer = (state=[], action) => {
    switch(action.type){
        //case to surrender as tech
        case 'SURRENDER_AS_A_TECH': return action.payload;

       
    }

}

export default globalReducer;