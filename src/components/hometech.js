//Home Component : CHECK WARNING.info FOR NOTES.....

import TechComponent from './tech';

//Installed Components
import { Route, Link, Switch } from 'react-router-dom';
//Bootstrap
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; 


const HomeTechComponent = () => {
    return (
        <div>
            {/* Some Logic To Check If User Logged In Is Admin Or A Panel Member.... */}
            {/*<AdminComponent></AdminComponent>*/}
           {/* <HRComponent></HRComponent>*/} 
            
            <TechComponent></TechComponent>
        
        </div>
    );
}



export default HomeTechComponent;