import React from 'react';
import Table from 'react-bootstrap/Table';
import CardTableItem from './CardTableItem';

class CardList extends React.Component {
    render() {
      return <>
      <Table striped bordered hover style={{width:350}}>
        <tbody>
        {this.props.cardList.map( card => this.table_element_from_card(card) )}
        </tbody>
      </Table>
    </>
  }

  table_element_from_card = (card_obj) => {
    return <>
        <CardTableItem card_obj={card_obj} quantitiesAsChanges={this.props.quantitiesAsChanges}/>
    </>
}
}


export default CardList;
