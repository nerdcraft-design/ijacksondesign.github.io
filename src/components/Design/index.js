import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
            name: 'fgcu athletics',
            description: 'marketing assets',
            thumbnail: 'Schedule-Poster-Mockup.jpg'
        },
        {
            name: 'mud ready apparel',
            description: 'brand identity',
            thumbnail: 'Mud-Ready-Logo.jpg'
        },
        {
            name: 'horstein solutions',
            description: 'brand identity',
            thumbnail: 'Hornstein-Solutions-Penrose-Mockup.jpg'
        },
        {
            name: "devil's brew",
            description: 'brand identity',
            thumbnail: 'Devils-Brew-logo.jpg'
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
            <Row className='justify-content-between w-100'>
                {projects.map((project) => (
                    <Col xs={12} md={5} lg={3} className='p-0 d-flex justify-content-center position-relative' style={{ overflow: 'hidden' }} >
                        <Image 
                            src={require(`../../assets/images/portfolio/graphic-design/${project.thumbnail}`).default}
                            alt={project.name + ' ' + project.description}
                            className='position-relative project-thumbnail w-100'
                            key={project.name}
                        />
                        <motion.div
                            className='position-absolute top-50 start-50 translate-middle text-center project-info w-100 h-100'
                            whileHover={{
                                opacity: [0, 0.8], 
                                transition: { duration: 0.5 }
                            }}
                        >
                            <Container className='d-flex flex-column justify-content-center align-items-center h-100' fluid>
                                <h1>
                                    {project.name}
                                </h1>
                                <hr />
                                <h2>
                                    {project.description}
                                </h2>
                            </Container>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Design;