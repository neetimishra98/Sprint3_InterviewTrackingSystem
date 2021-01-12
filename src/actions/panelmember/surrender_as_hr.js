//Action for viewing a candidate for tech panel
const SurrenderAsHRAction = (props) => {
   
    return async function(dispatch){
        let error;
        const axios = require('axios').default;
        const url = 'http://localhost:9091/cgits/panelmember/hr/'+props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'SURRENDER_AS_HR', payload: response}))
        .catch(error => console.log(error));
    }
 }
 
 export default SurrenderAsHRAction;