import axios from 'axios'

const SearchEmployeeAction = (props)=> {
    return async function(dispatch){
        let error;
        const axios = require('axios').default;
        const url = 'http://localhost:8080/cgits/employee/'+props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'SEARCH_EMPLOYEE', payload: response}))
        .catch(error => console.log(error));
    }
}

export default SearchEmployeeAction;