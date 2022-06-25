import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DeckForm from './DeckForm';

class DeckCmpPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {deck1_str: '', deck2_str: ''};
    }

    render() {
      return <>
      <Container fluid>
        <Row>
            <Col><DeckForm deck_num={1} changeTextHandler={e => this.setState({ deck1_str: e.target.value })}/></Col>
            <Col><DeckForm deck_num={2} changeTextHandler={e => this.setState({ deck2_str: e.target.value })}/></Col>
        </Row>
      </Container>
    </>
  }
}


export default DeckCmpPage;
