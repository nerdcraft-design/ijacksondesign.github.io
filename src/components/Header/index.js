import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { motion } from "framer-motion"
import Logo from '../../assets/images/ian-jackson-logo.svg';

function Header() {
    return(
        <header>
            <Container className='align-items-center'>
                <Row className="justify-content-center">
                    <a href='/' className='d-flex justify-content-center'>
                        <motion.img 
                            src={Logo} 
                            animate={{ opacity: [0, 1], y: [100, 0] }}
                            transition= {{ duration: 1, ease: 'easeOut' }}
                            style={{ maxWidth: '450px' }}
                        />
                    </a>
                </Row>
                <Row>
                    <motion.div 
                        animate={{ opacity: [0, 1], y: [100, 0] }}
                        transition= {{ duration: 1, ease: 'easeOut' }}
                    >
                        <Col>
                            <Nav className='m-4 justify-content-center'>
                                <Nav.Item>
                                    <Nav.Link href='/about'>ABOUT</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href='/graphic-design'>DESIGN</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href='/web-development'>DEVELOPMENT</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href='/contact'>CONTACT</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </motion.div>
                </Row>
            </Container>
        </header>
    );
}

export default Header;