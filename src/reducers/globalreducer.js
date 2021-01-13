const globalReducer = (state=[], action) => {
    switch(action.type){
        case 'SEARCH_EMPLOYEE': return action.payload;
        //CASE TO SURRENDER AS HR
        case 'ADD_PANEL_MEMBER': return action.payload;

      

}
}

export default globalReducer;
