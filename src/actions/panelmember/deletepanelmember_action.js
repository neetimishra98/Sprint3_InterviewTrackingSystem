import axios from 'axios';

const DeletePanelMemberAction = (props) => {
    return async function (dispatch) {
        let error;
        const axios = require('axios').default;
        const url = 'http://localhost:8080/cgits/panelmember/' + props;
        const serverResponse = await axios.delete(url) //await can only be used with async function....
            .then(response => dispatch({ type: 'DELETE_PANELMEMBER', payload: response }))
            .catch(error => console.log(error));
    }
}

export default DeletePanelMemberAction;