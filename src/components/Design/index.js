import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

function Design() {
    const [projects] = useState([
        {
            name: 'harley davidson',
            description: 'retail marketing',
            thumbnail: 'Harley-Davidson-posters.jpg'
        },
        {
            name: 'harley davidson',
            description: 'logo design',
            thumbnail: 'Harley-Davidson-logo-concept.jpg'
        },
        {
            name: 'mud ready apparel',
            description: 'brand identity',
            thumbnail: 'Mud-Ready-Logo.jpg'
        },
        {
            name: 'fgcu athletics',
            description: 'marketing assets',
            thumbnail: 'Schedule-Poster-Mockup.jpg'
        },
        {
            name: 'horstein solutions',
            description: 'brand identity',
            thumbnail: 'Hornstein-Solutions-Penrose-Mockup.jpg'
        },
        {
            name: 'roll20',
            description: 'ui redesign',
            thumbnail: 'Roll20-redesign.jpg'
        },
        {
            name: 'misc logos',
            description: 'logo design',
            thumbnail: 'Primal-logo-business-cards.jpg'
        }
    ]);

    return(
        <Container fluid>
            <Row className='justify-content-center'>
                {projects.map((project) => (
                    <Col md={6} lg={3} className='m-3 d-flex justify-content-center' >
                        <Image 
                            src={require(`../../assets/images/portfolio/graphic-design/${project.thumbnail}`).default}
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

export default Design;