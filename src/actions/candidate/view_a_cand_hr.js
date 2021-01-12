//Action for viewing a candidate for tech panel
const ViewaCandidateForHrAction = (pathVar) => {
   
    return async function(dispatch){
        const serverResponse = await fetch(''); //await can only be used with async function....
        const data = await serverResponse.json();
        console.log("Server Response / View a candidate for hr panel  "+ data);
        dispatch({type: 'VIEW_A_CANDIDATE_FOR_HR', payload: data});
    }
 }
 
 export default ViewaCandidateForHrAction;