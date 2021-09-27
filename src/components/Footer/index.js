import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import LinkedIn from '../../assets/images/menu-icons/linked-in.svg';
import Github from '../../assets/images/menu-icons/github.svg';
import Instagram from '../../assets/images/menu-icons/instagram.svg';

function Footer() {
    return(
        <footer>
            <Container className='justify-content-center' fluid='md'>
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
            </Container>
        </footer>
    );
}

export default Footer;