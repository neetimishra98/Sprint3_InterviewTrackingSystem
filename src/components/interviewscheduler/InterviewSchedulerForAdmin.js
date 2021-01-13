//Interview Services Accessible By The Admin....
import techInterviewScheduleAdmin from '../interviewscheduler/techInterviewScheduleAdmin';
import hrInterviewScheduleAdmin from '../interviewscheduler/hrInterviewScheduleAdmin';

import HRShareandschedule from './adminhrServices/hrshareandschedule.js';
import HRCancelInterview from './adminhrServices/hrcancelinterview.js'
import HRUpdateInterview from "./adminhrServices/hrupdatescheduleinterview";

import TechShareandschedule from './adminTechServices/techshareandschedule.js';
import TechCancelInterview from './adminTechServices/techcancelinterview.js'
import TechUpdateInterview from "./adminTechServices/techupdatescheduleinterview";





import { Accordion, Card, Button } from 'react-bootstrap';



const InterviewSchedulerForAdmin = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Accordion>
            <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        Schedule technical Interview
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                  
                    <Card.Body><techInterviewScheduleAdmin>
                    <TechShareandschedule></TechShareandschedule>

                    <TechUpdateInterview></TechUpdateInterview>

                    <TechCancelInterview></TechCancelInterview>

                    </techInterviewScheduleAdmin></Card.Body>
                   
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    Schedule HR Interview
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                  
                    <Card.Body><hrInterviewScheduleAdmin>
                    <HRShareandschedule></HRShareandschedule>
                    
                    <HRUpdateInterview></HRUpdateInterview>

                    <HRCancelInterview></HRCancelInterview>

                    </hrInterviewScheduleAdmin></Card.Body>
                   
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default InterviewSchedulerForAdmin;