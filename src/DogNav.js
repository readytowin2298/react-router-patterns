import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function DogNav({dogs}){
    return (
        <React.Fragment>
            <Navbar bg="dark" expand="lg" variant="dark" >
                <Navbar.Brand href="#">React-Router-Dog-Finder</Navbar.Brand>
                <Navbar.Toggle aria-controls="nav" />
                <Navbar.Collapse id="nav">
                    <Nav className="mr-auto">
                        {dogs.map(dog => {
                            return <Nav.Link href={`/dogs/${dog.name}`}>{dog.name}</Nav.Link>
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
};

export default DogNav;