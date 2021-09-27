import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

function Dev() {
    const [projects] = useState([
        {
            name: 'h.e.a.t. one-layer',
            description: 'HTML/CSS/JS/Liquid-Shopify',
            thumbnail: 'heat.png',
            url: 'https://heatinc.com/'
        },
        {
            name: 'project gaia',
            description: 'MongoDB/Express/React/Node/GraphQL/Bootstrap/SCSS',
            thumbnail: 'project-gaia-desktop.png',
            url: 'https://projectgaia.herokuapp.com/'
        },
        {
            name: 'killer reads',
            description: 'Express/MySQL/Sequelize/Handlebars/HTML/CSS/JS',
            thumbnail: 'killer-reads-screenshot.png',
            url: 'https://killer-reads.herokuapp.com/'
        },
        {
            name: 'weather dashboard',
            description: 'HTML/CSS/JS/Weather API',
            thumbnail: 'weather-dashboard.jpg',
            url: 'https://ianjacksondesign.com/weather-dashboard/'
        },
        {
            name: 'D&D Character Generator',
            description: 'HTML/CSS/JS/MATERIALIZE/APIs',
            thumbnail: 'character-generator.jpg',
            url: 'https://ianjacksondesign.com/character-generator/'
        },
        {
            name: 'tech exchange',
            description: 'Express/MySQL/Handlebars/HTML/CSS/JS',
            thumbnail: 'tech-exchange-dashboard.jfif',
            url: 'https://ianjacksondesign.com/character-generator/'
        }
    ]);

    return(
        <Container fluid>
            <Row className='justify-content-center'>
                {projects.map((project) => (
                    <Col md={6} lg={3} className='m-3 d-flex justify-content-center'>
                        <Image 
                            src={require(`../../assets/images/portfolio/web-development/${project.thumbnail}`).default}
                            alt={project.name + ' ' + project.description}
                            className='project-thumbnail'
                            key={project.name}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Dev;