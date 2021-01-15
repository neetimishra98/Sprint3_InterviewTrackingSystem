import axios from 'axios';

let ViewAllInterviewMembersForTechAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:8080/cgits/interviewscheduler/tech/"
          );
          dispatch({type: "VIEW_ALL_MEMBERS_TECH", payload: res.data});
    }
}

export default ViewAllInterviewMembersForTechAction;
