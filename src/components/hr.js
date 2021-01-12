//Admin Services Component : CHECK WARNING.info FOR NOTES.....

import EmployeeForAdmin from './employee/EmployeeForAdmin'
import CandidateForAdmin from './candidate/CandidateForAdmin'
import CancelInterviewForHr from './interviewscheduler/hrservices/cancelinterviewforhr';
import PanelMemberForHR from './panelmember/PanelMemberForHR'
import SearchCandidate from './candidate/CandidateForHR';
import InterviewSchedulerForHr from './interviewscheduler/InterviewSchedulerForHr';

// Bootstrap

import { Tab, Tabs } from 'react-bootstrap'
import GiveHrRating from './interviewscheduler/hrservices/givehrrating';
import ViewInterviewMembersForHr from './interviewscheduler/hrservices/viewallinterviewmembers';
import ViewListForHr from './interviewscheduler/hrservices/viewlistforhr';


const HRComponent = () => {
    return (
        <div>
            <Tabs defaultActiveKey="PanelMember" id="uncontrolled-tab-example">

                <Tab eventKey="PanelMember" title="HR">

                    <SearchCandidate></SearchCandidate>

                    <PanelMemberForHR></PanelMemberForHR>
            <InterviewSchedulerForHr></InterviewSchedulerForHr>
                   
                    
                </Tab>

            </Tabs>
        </div>
    );
}

export default HRComponent;