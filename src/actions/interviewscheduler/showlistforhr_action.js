import axios from 'axios'

const ShowListForHrAction  = (props)=> {
    return async function(dispatch){
        let error;
        const axios = require('axios').default;
        const url = 'http://localhost:9090/cgits/interviewscheduler/hr/'+ props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'VIEW_INTERVIEW_MEMBER_FOR_HR', payload: response}))
        .catch(error => console.log(error));
    }
}

export default ShowListForHrAction;