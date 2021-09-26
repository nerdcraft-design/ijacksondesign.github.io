import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

import Header from './components/Header';
import About from './components/About';
import Design from './components/Design';
import Dev from './components/Dev';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './assets/images/hero-image/hero-image-1920x1080.jpg';

function App() {
  return (
    <Router>
      <Container fluid className='d-flex flex-column justify-content-center align-items-center'
        style={
          {
            minHeight: '100vh',
            backgroundImage: `url(${Background})`
          }
        }
      >
        
        <Header />
        <main className='my-5 px-5'>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/graphic-design" component={Design} />
            <Route exact path="/web-development" component={Dev} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </main>
      </Container>
      <Footer className='position-absolute bottom-0' />
    </Router>
  );
}

export default App;
