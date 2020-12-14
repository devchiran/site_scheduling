import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTh } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <header className="d-flex bg-primary border-dark border-bottom sticky-top">
            <Container className="p-0">
                <Navbar bg="primary" variant="dark" fixed="" className="p-0">
                    <div className="col-3 text-left p-0">
                        <Button className="btn-light btn-lg bg-primary border-0">
                            <FontAwesomeIcon icon={faBars} />
                        </Button>
                    </div>
                    <Navbar.Brand href="#home" className="col-6 mr-0 text-center"><h4>Scheduling</h4></Navbar.Brand>

                    <div className="col-2 text-right p-0">
                        <Button className="btn-light btn-lg bg-primary border-0">
                            <FontAwesomeIcon icon={faTh} />
                        </Button>
                    </div>
                    <div className="col-1 p-0 text-center">
                        <Button className="btn btn-light btn-sm rounded-circle border-dark mr-2">D</Button>
                    </div>
                </Navbar>
            </Container>
        </header>
    )
}

export default Header;
