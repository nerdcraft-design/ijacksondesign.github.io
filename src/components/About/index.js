import React from 'react';
import { Col, Container, Image, Nav, Row } from 'react-bootstrap';

import Headshot from '../../assets/images/about-me/about-me-image-1920x1080.jpg';

function About() {
    return(
        <Container fluid='xl'>
            <Row className='d-flex justify-content-center'>
                <Col className='d-flex align-items-center'>
                    <p>
                    Hello! My name is Ian Jackson and I'm a Graphic Designer and Web Developer with 10 years of experience in the marketing industry with a focus on the retail space.
                    <br /><br />
                    My goal is to connect you and your brand with your audience through stunning and practical designs. It is my job to learn your needs and find creative solutions to your problems.
                    <br /><br />
                    Over the course of my career I have worked both in print and digital mediums creating brand identities, point-of-purchase assets, landing pages, websites and social media marketing.
                    </p>
                </Col>
                <Col>
                    <Image src={Headshot} fluid />
                </Col>
            </Row>
        </Container>
    );
}

export default About;