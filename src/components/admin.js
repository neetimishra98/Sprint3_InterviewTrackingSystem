//Admin Services Component : CHECK WARNING.info FOR NOTES.....

import EmployeeForAdmin from './employee/EmployeeForAdmin'
import CandidateForAdmin from './candidate/CandidateForAdmin'
import PanelMemberForAdmin from './interviewscheduler/InterviewSchedulerForAdmin'
//import InterviewSchedulerForAdmin from './panelmember/PanelMemberForAdmin'
import InterviewSchedulerForAdmin from './interviewscheduler/InterviewSchedulerForAdmin';

// Bootstrap

import { Tab, Tabs } from 'react-bootstrap'

const AdminComponent = () => {
    return (
        <div>
            <Tabs defaultActiveKey="Employee" id="uncontrolled-tab-example">
                <Tab eventKey="Employee" title="Candidate Operations">
                    <CandidateForAdmin></CandidateForAdmin>
                </Tab>
                <Tab eventKey="PanelMember" title="Employee Operations">
                    <EmployeeForAdmin></EmployeeForAdmin>
                </Tab>
                <Tab eventKey="Candidate" title="Interview Scheduler Operations">
                    <InterviewSchedulerForAdmin></InterviewSchedulerForAdmin>
                </Tab>
                <Tab eventKey="InterviewScheduler" title="Panel Member Operations">
                    <PanelMemberForAdmin></PanelMemberForAdmin>
                </Tab>
            </Tabs>
        </div>
    );
}



export default AdminComponent;