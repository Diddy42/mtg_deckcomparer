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

        this.state = {deck1_str: '', deck2_str: '', comparisonResults: compare_decks('', ''), comparisonResultsSideboard: compare_decks('', '')};
    }

    render() {
      return <>
      <Container fluid>
        <Row>
            <Col><DeckForm deck_num={1} changeTextHandler={e => this.handle_new_deck1_str(e)}/></Col>
            <Col><DeckForm deck_num={2} changeTextHandler={e => this.handle_new_deck2_str(e)}/></Col>
        </Row>

        <Row>
          <h2>Main deck:</h2>
          <Col><ComparisonResults comparisonResults={this.state.comparisonResults}/></Col>
        </Row>

        <Row>
          <h2>Sideboard:</h2>
          <Col><ComparisonResults comparisonResults={this.state.comparisonResultsSideboard}/></Col>
        </Row>
      </Container>
    </>
  }

  download_card_data = async (comparisonResults) => {
      const results_properties = ['cards_only_in_deck_1', 'cards_only_in_deck_2', 'cards_different_qty', 'cards_unchanged'];

      for(var i = 0; i < results_properties.length; i++){
        for(var j = 0; j < comparisonResults[results_properties[i]].length; j++){
          comparisonResults[results_properties[i]][j].get_scryfall_data().then(() => {
              this.setState({comparisonResults: this.state.comparisonResults});  //just to trigger a re-render
          });
        }
      }
  }

  split_sideboard_and_deck = (full_deck_str) => {
    var deck = '';
    var sideboard = '';

    if(full_deck_str.includes('Sideboard')){
      deck = full_deck_str.split('Sideboard')[0];
      sideboard = full_deck_str.split('Sideboard')[1];
    }
    else{
      deck = full_deck_str;
    }

    return [deck, sideboard];
  }

  handle_new_deck1_str = (e) => {
    var deck1, sideboard1;
    var deck2, sideboard2;
  
    [deck1, sideboard1] = this.split_sideboard_and_deck(e.target.value);
    [deck2, sideboard2] = this.split_sideboard_and_deck(this.state.deck2_str);

    var comparisonResults = compare_decks(deck1, deck2);
    var comparisonResultsSideboard = compare_decks(sideboard1, sideboard2);

    this.setState({deck1_str: e.target.value, comparisonResults: comparisonResults, comparisonResultsSideboard: comparisonResultsSideboard });

    this.download_card_data(comparisonResults);
    this.download_card_data(comparisonResultsSideboard);
  }

  handle_new_deck2_str = (e) => {
    var deck1, sideboard1;
    var deck2, sideboard2;
  
    [deck1, sideboard1] = this.split_sideboard_and_deck(this.state.deck1_str);
    [deck2, sideboard2] = this.split_sideboard_and_deck(e.target.value);

    var comparisonResults = compare_decks(deck1, deck2);
    var comparisonResultsSideboard = compare_decks(sideboard1, sideboard2);

    this.setState({deck2_str: e.target.value, comparisonResults: comparisonResults, comparisonResultsSideboard: comparisonResultsSideboard });

    this.download_card_data(comparisonResults);
    this.download_card_data(comparisonResultsSideboard);
  }
}


export default DeckCmpPage;
