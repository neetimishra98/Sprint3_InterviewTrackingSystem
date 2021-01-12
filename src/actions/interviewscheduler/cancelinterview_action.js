import axios from 'axios'

const CancelInterviewAction = (props)=> {
    return async function(dispatch){
        let error;
        const axios = require('axios').default;
        const url = 'http://localhost:8080/cgits/interviewschedulerdel/1'+props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'CANCEL_INTERVIEW', payload: response}))
        .catch(error => console.log(error));
    }
}

export default CancelInterviewAction;