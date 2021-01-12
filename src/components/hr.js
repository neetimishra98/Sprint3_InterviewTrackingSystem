//Admin Services Component : CHECK WARNING.info FOR NOTES.....

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

                <Tab eventKey="PanelMember" title="HR Operations">
                    <PanelMemberForHR></PanelMemberForHR>
                </Tab>
            </Tabs>
        </div>
    );
}



export default HRComponent;