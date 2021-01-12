//Admin Services Component : CHECK WARNING.info FOR NOTES.....

import EmployeeForAdmin from './employee/EmployeeForAdmin'
import CandidateForAdmin from './candidate/CandidateForAdmin'
import CancelInterviewForHr from './interviewscheduler/hrservices/cancelinterviewforhr';
import PanelMemberForHR from './panelmember/PanelMemberForHR'
import SearchCandidate from './candidate/CandidateForHR';
import UpdateInterviewForHr from "./interviewscheduler/hrservices/updatescheduleinterviewforhr";

// Bootstrap

import { Tab, Tabs } from 'react-bootstrap'

const HRComponent = () => {
    return (
        <div>
            <Tabs defaultActiveKey="PanelMember" id="uncontrolled-tab-example">

                <Tab eventKey="PanelMember" title="HR">

                    <SearchCandidate></SearchCandidate>

                    <PanelMemberForHR></PanelMemberForHR>
                    
                    <CancelInterviewForHr></CancelInterviewForHr>

                    <UpdateInterviewForHr></UpdateInterviewForHr>
                </Tab>

            </Tabs>
        </div>
    );
}

export default HRComponent;