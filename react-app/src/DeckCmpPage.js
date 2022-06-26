import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DeckForm from './DeckForm';
import ComparisonResults from './ComparisonResults';
import compare_decks from './deck_compare_utils';

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

        <Row>
          <Col><ComparisonResults comparisonResults={compare_decks(this.state.deck1_str, this.state.deck2_str)}/></Col>
        </Row>
      </Container>
    </>
  }
}


export default DeckCmpPage;
