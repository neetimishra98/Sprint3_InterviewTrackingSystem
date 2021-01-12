//Action for viewing a candidate for tech panel
const SurrenderAsHRAction = (pathVar) => {
   
    return async function(dispatch){
        const serverResponse = await fetch(''); //await can only be used with async function....
        const data = await serverResponse.json();
        console.log("Server Response / Surrender As HR Panel  "+ data);
        dispatch({type: 'SURRENDER_AS_HR', payload: data});
    }
 }
 
 export default SurrenderAsHRAction;