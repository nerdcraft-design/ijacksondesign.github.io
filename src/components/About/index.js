import React from 'react';
import { Col, Container, Image, Nav, Row } from 'react-bootstrap';
import { motion } from "framer-motion";

import Headshot from '../../assets/images/about-me/about-me-image-1920x1080.jpg';

function About() {
    return(
        <Container fluid='md'>
            <Row className='d-flex justify-content-center'>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 5, order: 1 }} className='d-flex align-items-center'>
                    <Container>
                        <h1>
                            Hello! 
                        </h1>
                        <p>
                            I'm Ian Jackson and welcome to my little slice of the internet! I'm a Graphic Designer and Web Developer with 10 years of experience in the marketing industry with a focus on the retail space.
                            <br /><br />
                            My goal is to connect you and your brand with your audience through stunning and practical designs. It is my job to learn your needs and find creative solutions to your problems.
                            <br /><br />
                            Over the course of my career I have worked both in print and digital mediums creating brand identities, point-of-purchase assets, landing pages, websites and social media marketing.
                        </p>
                    </Container>
                </Col>
                <Col xs={{ span: 12, order: 1}} md={{ span: 6, order: 2 }}>
                    <Image src={Headshot} fluid />
                </Col>
            </Row>
        </Container>
    );
}

export default About;