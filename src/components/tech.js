//Admin Services Component : CHECK WARNING.info FOR NOTES.....

import { Accordion, Card, Button } from 'react-bootstrap'
import PanelMemberForTech from './panelmember/PanelMemberForTech'
import CandidateForTech from './candidate/CandidateForTech'
import InterviewSchedulerForTech from './interviewscheduler/InterviewSchedulerForTech'
// Bootstrap

import { Tab, Tabs } from 'react-bootstrap'

const TechComponent = () => {
    return (
        <div>
            <Tabs defaultActiveKey="Home" id="uncontrolled-tab-example">
    
            <Tab eventKey="Interviewscheduler" title="TECH">
                <InterviewSchedulerForTech></InterviewSchedulerForTech>
                <PanelMemberForTech></PanelMemberForTech>
                <CandidateForTech></CandidateForTech>
            </Tab>
            </Tabs> 
        </div>
    );
}



export default TechComponent;