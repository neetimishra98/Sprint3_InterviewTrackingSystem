//Admin Services Component : CHECK WARNING.info FOR NOTES.....

import PanelMemberForHR from './panelmember/PanelMemberForHR'
import SearchCandidate from './candidate/CandidateForHR';

// Bootstrap

import { Tab, Tabs } from 'react-bootstrap'

const HRComponent = () => {
    return (
        <div>
            <Tabs defaultActiveKey="PanelMember" id="uncontrolled-tab-example">

                <Tab eventKey="PanelMember" title="HR Operations">
                    <SearchCandidate></SearchCandidate>
                    <PanelMemberForHR></PanelMemberForHR>
                </Tab>
            </Tabs>
        </div>
    );
}

export default HRComponent;