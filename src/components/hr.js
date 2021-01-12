//Admin Services Component : CHECK WARNING.info FOR NOTES.....

<<<<<<< HEAD
import EmployeeForAdmin from './employee/EmployeeForAdmin'
import CandidateForAdmin from './candidate/CandidateForAdmin'
import CancelInterviewForHr from './interviewscheduler/hrservices/cancelinterviewforhr';
=======
>>>>>>> c410dd6688a2c1a0d7cd5fb2d4ac7dc69adbe6e7
import PanelMemberForHR from './panelmember/PanelMemberForHR'
import SearchCandidate from './candidate/CandidateForHR';

// Bootstrap

import { Tab, Tabs } from 'react-bootstrap'


const HRComponent = () => {
    return (
        <div>
            <Tabs defaultActiveKey="Employee" id="uncontrolled-tab-example">

                <Tab eventKey="PanelMember" title="HR">

                    <SearchCandidate></SearchCandidate>

                    <PanelMemberForHR></PanelMemberForHR>
                    <CancelInterviewForHr></CancelInterviewForHr>
                </Tab>

            </Tabs>
        </div>
    );
}



export default HRComponent;