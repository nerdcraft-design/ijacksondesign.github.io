import React from 'react';
import { Col, Container, Image, Nav, Row } from 'react-bootstrap';
import LinkedIn from '../../assets/images/menu-icons/linked-in.svg';
import Github from '../../assets/images/menu-icons/github.svg';
import Instagram from '../../assets/images/menu-icons/instagram.svg';

function Footer() {
    return(
        <footer>
            <Container className='justify-content-center' fluid='md'>
                <Row className='justify-content-center'>
                    <Col md={1} className='d-flex justify-content-center'>
                        <Image src={LinkedIn} />
                    </Col>
                    <Col md={1} className='d-flex justify-content-center'>
                        <Image src={Github} />
                    </Col>
                    <Col md={1} className='d-flex justify-content-center'>
                        <Image src={Instagram} />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;