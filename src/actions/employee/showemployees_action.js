import axios from "axios";

const ShowEmployeeAction = () => {
    return async function(dispatch){
        var err = null;
        const axios = require('axios').default;
        const url = 'http://localhost:8080/cgits/employees/'; //await can only be used with async function....
        const serverResponse = await axios.get(url) //await can only be used with async function....
            .then(response => dispatch({type: 'SHOW_EMPLOYEES', payload: response}))
            .catch(error => console.log(err=error));
        if(err!==null || serverResponse===null){
            console.log("Something went wrong while connecting to the server");
        }
    }
 }


 export default ShowEmployeeAction;