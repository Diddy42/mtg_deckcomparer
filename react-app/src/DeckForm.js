import React from 'react';
import Form from 'react-bootstrap/Form'

class DeckForm extends React.Component {
    render() {
      return <>
      <Form.Label><h3>Deck {this.props.deck_num}</h3></Form.Label>
      <Form.Control as="textarea" rows={10} onChange={this.props.changeTextHandler} placeholder="Paste your deck here..." />
    </>
  }
}

export default DeckForm;
