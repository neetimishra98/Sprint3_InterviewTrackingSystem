//Admin Services Component : CHECK WARNING.info FOR NOTES.....

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
            <Tabs defaultActiveKey="Employee" id="uncontrolled-tab-example">

                <Tab eventKey="PanelMember" title="HR Operations">
                    <SearchCandidate></SearchCandidate>
                    <PanelMemberForHR></PanelMemberForHR>
            <InterviewSchedulerForHr></InterviewSchedulerForHr>
                   
                </Tab>
            </Tabs>
        </div>
    );
}



export default HRComponent;