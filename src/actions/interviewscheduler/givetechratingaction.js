import axios from 'axios'

//const GiveTechRatingAction = (props)=> {

let GiveTechRatingAction = (interviewId)=> {

    return async function (dispatch) {
        const res = await axios.get(
                    "http://localhost:8080/cgits/interviewscheduler/tech/rating/" + interviewId, { 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            console.log('Get Candidate serverResponse after giving techrating: ', res.data);
          dispatch({type: "GIVE_TECH_RATING", payload: res.data});
    }
}


    /*
    return async function(dispatch){
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
        const url = 'http://localhost:8080/cgits/interviewscheduler/tech/rating/'+props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'GIVE_TECH_RATING', payload: response}))
        .catch(error => console.log(err=error));
        if(err!==null && props!=undefined){
            console.log("No User Found");
            dispatch({type: 'GIVE_TECH_RATING', payload: null});
        }
    }*/


export default GiveTechRatingAction;