import axios from 'axios';

const ShowPanelMemberAction = () => {
    return async function (dispatch) {
        let error;
        const axios = require('axios').default;
        const url = 'http://localhost:8080/cgits/panelmembers/';
        const serverResponse = await axios.get(url) //await can only be used with async function....
            .then(response => dispatch({ type: 'SHOW_PANELMEMBER', payload: response }))
            .catch(error => console.log(error));
    }
}

export default ShowPanelMemberAction;