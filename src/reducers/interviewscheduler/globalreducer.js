const globalReducer = (state=[], action) => {
    switch(action.type){
        //case to cancel the Interview
        case 'CANCEL_INTERVIEW': return action.payload;

        //CASE TO update the Interview
        case 'UPDATE_INTERVIEW': return action.payload;
    }

}

export default globalReducer;