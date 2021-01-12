//Action for viewing a candidate for tech panel
const SurrenderAsATechAction = (pathVar) => {
   
    return async function(dispatch){
        const serverResponse = await fetch(''); //await can only be used with async function....
        const data = await serverResponse.json();
        console.log("Server Response / Surrender As A Tech Panel  "+ data);
        dispatch({type: 'SURRENDER_AS_A_TECH', payload: data});
    }
 }
 
 export default SurrenderAsATechAction;