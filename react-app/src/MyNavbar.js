import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import Container from 'react-bootstrap/Container'

class MyNavbar extends React.Component {
    render() {
      return <>
          <Navbar bg="dark" variant="dark">
      <Container fluid>
      <Navbar.Brand href="#home">MTG Deck Comparer</Navbar.Brand>
      </Container>
    </Navbar>
    </>
  }
}


export default MyNavbar;
