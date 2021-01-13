import axios from 'axios';

const GiveHrRatingAction = () => {
    return async function (dispatch) {
        let error;
        const axios = require('axios').default;
        const url = '"http://localhost:9090/cgits/interviewscheduler';
        const serverResponse = await axios.get(url) //await can only be used with async function....
            .then(response => dispatch({ type: 'GIVE_HR_RATING', payload: response }))
            .catch(error => console.log(error));
    }
}

export default GiveHrRatingAction;
