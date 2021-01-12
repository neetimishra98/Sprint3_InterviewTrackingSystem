const globalReducer = (state=[], action) => {
    switch(action.type){
        case 'SEARCH_EMPLOYEE': return action.payload;
<<<<<<< HEAD
        case 'VIEW_ALL_INTERVIEW_MEMBERS_FOR_TECH': return action.payload;
        // JUST ADD ALL CASES OF REDUCER HERE....
    }
=======
>>>>>>> 35e02a6c2c66b8e419cada6cc51ec6740b1b0ee4

        
        //CASE TO SHOW PANEL MEMBERS
        case 'SHOW_PANELMEMBER': return action.payload;

    }
}

export default globalReducer;
