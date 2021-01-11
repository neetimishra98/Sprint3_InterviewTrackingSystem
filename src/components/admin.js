//Admin Services Component : CHECK WARNING.info FOR NOTES.....

import EmployeeForAdmin from './employee/EmployeeForAdmin'
import CandidateForAdmin from './candidate/CandidateForAdmin'
<<<<<<< HEAD
import PanelMemberForAdmin from './interviewscheduler/InterviewSchedulerForAdmin'
//import InterviewSchedulerForAdmin from './panelmember/PanelMemberForAdmin'
import InterviewSchedulerForAdmin from './interviewscheduler/InterviewSchedulerForAdmin';
=======
<<<<<<< HEAD
import PanelMemberForAdmin from './panelmember/PanelMemberForAdmin'
import InterviewSchedulerForAdmin from './interviewscheduler/InterviewSchedulerForAdmin'
=======
import InterviewSchedulerForAdmin from './interviewscheduler/InterviewSchedulerForAdmin'
import PanelMemberForAdmin from './panelmember/PanelMemberForAdmin'
>>>>>>> 4abb6e8bc3fbc298f93907a73bfac0f0bd6b23ff
>>>>>>> 2e396b29a0c3f734eef5f0aed8d7df644907cede

// Bootstrap

import { Tab, Tabs } from 'react-bootstrap'

const AdminComponent = () => {
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
                    <PanelMemberForAdmin></PanelMemberForAdmin>
                </Tab>
            </Tabs>
        </div>
    );
}



export default AdminComponent;