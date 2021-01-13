import axios from 'axios'

const ShowInterviewMemberAction = (props)=> {
    return async function(dispatch){
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
        const url = 'http://localhost:9090/cgits/interviewmembers';
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'SHOW_INTERVIEWMEMBER', payload: response}))
        .catch(error => console.log(err=error));
        if(err!==null && props!=undefined){
            console.log("No User Found");
            dispatch({type: 'SHOW_INTERVIEWMEMBER', payload: null});
        }
    }
}

export default ShowInterviewMemberAction;