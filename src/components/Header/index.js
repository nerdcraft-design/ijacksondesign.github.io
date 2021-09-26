import React from 'react';
import { Col, Container, Image, Nav, Row } from 'react-bootstrap';
import Logo from '../../assets/images/ian-jackson-logo.svg';

function Header() {
    return(
        <header>
            <Container className='align-items-center'>
                <Row className="justify-content-center">
                    <Image src={Logo} />
                </Row>
                <Row>
                    <Col>
                        <Nav className='m-4 justify-content-center'>
                            <Nav.Item>
                                <Nav.Link href='#about'>ABOUT</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='#about'>DESIGN</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='#about'>DEVELOPMENT</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href='#about'>CONTACT</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;