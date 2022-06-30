import React from 'react';
import Table from 'react-bootstrap/Table';
import CardTableItem from './CardTableItem';

class CardList extends React.Component {
    render() {
      const local_card_list = this.get_sorted_card_list();

      return <>
      <Table striped bordered hover style={{width:350}}>
        <tbody>
        {local_card_list.map( card => this.table_element_from_card(card) )}
        </tbody>
      </Table>
    </>
  }

  get_sorted_card_list = () => {
    const local_card_list = [...this.props.cardList];

    local_card_list.sort((c1, c2) => c1.get_cmc() - c2.get_cmc());

    return local_card_list;
  }

  table_element_from_card = (card_obj) => {
    return <>
        <CardTableItem card_obj={card_obj} quantitiesAsChanges={this.props.quantitiesAsChanges}/>
    </>
}
}


export default CardList;
