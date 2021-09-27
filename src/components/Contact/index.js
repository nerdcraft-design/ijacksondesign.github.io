import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

function Contact() {
    const [ formState, setFormState ] = useState({ name: '', email: '', subject: '', message: ''});
    const { name, email, subject, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Your email is invalid. Please try again.');
            }
            else {
                setErrorMessage('');
            }
        }        
        else {
            if (!e.target.value.length) {
                setErrorMessage(`A ${e.target.name} is required.`)
            }
            else {
                setErrorMessage('');
            }
        } 

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
    };

    return(
        <Container id='contact'>
            <Row>
                <Col>
                    <h2>thanks for stopping by.
                        <br />
                        <span>let's create something together.</span>
                    </h2>
                </Col>
                <Col onSubmit={handleSubmit}>
                    <Form action='https://formspree.io/f/mpzoovak' method='post'>
                        <Form.Group>
                            <FloatingLabel
                                controlId='floatingInput'
                                label="Name"
                            >
                                <Form.Control type='text' placeholder='Name' />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel
                                controlId='floatingInput'
                                label="Email Address"
                            >
                                <Form.Control type='email' placeholder='name@example.com' />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel
                                controlId='floatingInput'
                                label="Subject Line"
                            >
                                <Form.Control type='text' placeholder='Subject Line' />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel
                                controlId='floatingInput'
                                label="Message"
                            >
                                <Form.Control as='textarea' placeholder='Enter Message' style={{ height: '150px'}} />
                            </FloatingLabel>
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            submit
                        </Button>
                    </Form>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </Col>
            </Row>

        </Container>
    );
}

export default Contact;