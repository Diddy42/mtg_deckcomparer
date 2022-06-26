import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardList from './CardList';

class ComparisonResults extends React.Component {
    render() {
      return <>
      <Container fluid>
        <Row>
            <Col>
                <h4>Cards only in deck 1 ({this.props.comparisonResults.cards_only_in_deck_1.length} distinct):</h4>
                <CardList cardList={this.props.comparisonResults.cards_only_in_deck_1} quantitiesAsChanges={false}/>
            </Col>

            <Col>
                <h4>Cards only in deck 2 ({this.props.comparisonResults.cards_only_in_deck_2.length}  distinct):</h4>
                <CardList cardList={this.props.comparisonResults.cards_only_in_deck_2} quantitiesAsChanges={false}/>
            </Col>

            <Col>
                <h4>Cards that changed quantity:</h4>
                <CardList cardList={this.props.comparisonResults.cards_different_qty} quantitiesAsChanges={true}/>
            </Col>

            <Col>
                <h4>Cards unchanged:</h4>
                <CardList cardList={this.props.comparisonResults.cards_unchanged} quantitiesAsChanges={false}/>
            </Col>
        </Row>
      </Container>
    </>
  }
}


export default ComparisonResults;

