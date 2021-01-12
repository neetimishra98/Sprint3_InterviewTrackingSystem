//Admin Services Component : CHECK WARNING.info FOR NOTES.....

import EmployeeForAdmin from './employee/EmployeeForAdmin'
import CandidateForAdmin from './candidate/CandidateForAdmin'
import InterviewSchedulerForAdmin from './interviewscheduler/InterviewSchedulerForAdmin';
import PanelMemberForHR from './panelmember/PanelMemberForHR'
//import InterviewSchedulerForAdmin from './interviewscheduler/InterviewSchedulerForAdmin'

//import InterviewSchedulerForAdmin from './interviewscheduler/InterviewSchedulerForAdmin'
//import PanelMemberForAdmin from './panelmember/PanelMemberForAdmin'

// Bootstrap

import { Tab, Tabs } from 'react-bootstrap'

const HRComponent = () => {
    return (
        <div>
            <Tabs defaultActiveKey="Employee" id="uncontrolled-tab-example">
                <Tab eventKey="Candidate " title="Candidate Operations">
                    <CandidateForAdmin></CandidateForAdmin>
                </Tab>
                <Tab eventKey="Employee" title="Employee Operations">
                    <EmployeeForAdmin></EmployeeForAdmin>
                </Tab>
                <Tab eventKey="InterviewScheduler" title="Interview Scheduler Operations">
                    <InterviewSchedulerForAdmin></InterviewSchedulerForAdmin>
                </Tab>
                <Tab eventKey="PanelMember" title="Panel Member Operations">
                    <PanelMemberForHR></PanelMemberForHR>
                </Tab>
            </Tabs>
        </div>
    );
}



export default HRComponent;