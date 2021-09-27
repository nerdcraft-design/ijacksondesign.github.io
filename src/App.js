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
      <Container fluid className='pt-5 d-flex flex-column justify-content-center align-items-center'
        style={
          {
            minHeight: '100vh',
            backgroundImage: `-webkit-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(${Background})`,
            backgroundSize: 'no-repeat'
          }
        }
      >
        
        <Header />
        <main className='my-5 px-5'>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/about" component={About} />
            <Route exact path="/graphic-design" component={Design} />
            <Route exact path="/web-development" component={Dev} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </main>
        
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
