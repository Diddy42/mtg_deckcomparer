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

        this.state = {deck1_str: '', deck2_str: '', comparisonResults: compare_decks('', '')};
    }

    render() {
      return <>
      <Container fluid>
        <Row>
            <Col><DeckForm deck_num={1} changeTextHandler={e => this.handle_new_deck1_str(e)}/></Col>
            <Col><DeckForm deck_num={2} changeTextHandler={e => this.handle_new_deck2_str(e)}/></Col>
        </Row>

        <Row>
          <Col><ComparisonResults comparisonResults={this.state.comparisonResults}/></Col>
        </Row>
      </Container>
    </>
  }

  download_card_data = async (comparisonResults) => {
      const results_properties = ['cards_only_in_deck_1', 'cards_only_in_deck_2', 'cards_different_qty', 'cards_unchanged'];

      for(var i = 0; i < results_properties.length; i++){
        for(var j = 0; j < comparisonResults[results_properties[i]].length; j++){
          comparisonResults[results_properties[i]][j].get_scryfall_data().then(() => {
              this.setState({comparisonResults: comparisonResults});
          });
        }
      }
  }

  handle_new_deck1_str = (e) => {
    var comparisonResults = compare_decks(e.target.value, this.state.deck2_str);

    this.setState({deck1_str: e.target.value, comparisonResults: comparisonResults });

    this.download_card_data(comparisonResults);
  }

  handle_new_deck2_str = (e) => {
    var comparisonResults = compare_decks(this.state.deck1_str, e.target.value);

    this.setState({deck2_str: e.target.value, comparisonResults: comparisonResults });

    this.download_card_data(comparisonResults);
  }
}


export default DeckCmpPage;
