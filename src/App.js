import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Simple Form
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Grid>
          <Row>
            <Col md={6}>
              <ContactForm />
            </Col>
            <Col md={6}>
              <ContactList />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
