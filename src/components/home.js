//Home Component : CHECK WARNING.info FOR NOTES.....

import AdminComponent from './admin';
import TechComponent from './techpanelmember';
import HRComponent from './hrpanelmember';


//Installed Components
import { Route, Link, Switch } from 'react-router-dom';
//Bootstrap
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; 


const HomeComponent = () => {
    return (
        <div>
            {/* Some Logic To Check If User Logged In Is Admin Or A Panel Member.... */}
            <AdminComponent></AdminComponent>

            {/* <HRComponent></HRComponent>
            <TechComponent></TechComponent> */}
        
        </div>
    );
}



export default HomeComponent;