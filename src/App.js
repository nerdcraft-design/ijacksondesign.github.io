import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Header from './components/Header';
import Background from './assets/images/hero-image/hero-image-1920x1080.jpg';
import Logo from './assets/images/ian-jackson-logo.svg';

function App() {
  return (
    <Container fluid
      style={
        {
          backgroundColor: 'black', 
          minHeight: '100vh',
          backgroundImage: `url(${Background})`
        }
      }
    >
      
      <Header />
      <main>

      </main>
    </Container>
  );
}

export default App;
