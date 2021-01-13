
import axios from 'axios';

let ShowInterviewMemberAction = () => {
    return async function (dispatch) {
		//let error;
        const res = await axios.get(
            "http://localhost:9090/cgits/interviewmembers/"
          );
          dispatch({type: "SHOW_INTERVIEWMEMBER", payload: res.data});
    }
}

export default ShowInterviewMemberAction;





/*
import axios from 'axios';
let ShowInterviewMemberAction = () => {
    return async function (dispatch) {
        let error;
        const axios = require('axios').default;
        const url = 'http://localhost:9090/cgits/interviewmembers/'
        const serverResponse = await axios.get(url) //await can only be used with async function....
            .then(response => dispatch({ type: 'SHOW_INTERVIEWMEMBER', payload: response }))
            .catch(error => console.log(error));
    }
}

export default ShowInterviewMemberAction;
*/