import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import LinkedIn from '../../assets/images/menu-icons/linked-in.svg';
import Github from '../../assets/images/menu-icons/github.svg';
import Instagram from '../../assets/images/menu-icons/instagram.svg';
import { motion } from 'framer-motion';

function Footer() {
    return(
        <footer>
            <Container className='justify-content-center' fluid='md'>
                <motion.div
                    animate={{ opacity: [0, 1], y: [-50, 0] }}
                    transition= {{ duration: 1, ease: 'easeOut' }}
                >
                    <Row className='justify-content-center'>
                        <a href='https://www.linkedin.com/in/ijacksondesign/' className='footer-icons' target='_blank'>
                            <Image src={LinkedIn} />
                        </a>
                        <a href='https://github.com/ijacksondesign' className='footer-icons' target='_blank'>
                            <Image src={Github} />
                        </a>
                        <a href='https://www.instagram.com/ijacksondesign/' className='footer-icons' target='_blank'>
                            <Image src={Instagram} />
                        </a>
                    </Row>
                </motion.div>
            </Container>
        </footer>
    );
}

export default Footer;