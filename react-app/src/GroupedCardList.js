import React from 'react';
import CardList from './CardList';

class GroupedCardList extends React.Component {
    render() {
        var grouped_cards = this.group_cards_by_type(this.props.cardList);

      return <>
        {Object.keys(grouped_cards).sort().map( type => this.get_element_from_type(type, grouped_cards[type]) )}
    </>
  }

  get_element_from_type = (type, element_card_list) => {
    return <>
        <h6>{type}:</h6>
        <CardList cardList={element_card_list} quantitiesAsChanges={this.props.quantitiesAsChanges}/>
    </>
  }

  group_cards_by_type = (cardList) => {
    var res = {};

    for(var i = 0; i < cardList.length; i++){
        var type = cardList[i].get_type();

        //all creatures grouped in the same group (for ex. Enchantment creatures, Legendary creatures...)
        if(type.includes('Creature')){
            type = 'Creature';
        }

        type = type.replace('Legendary', ''); //don't distinguish between legendary and non-legendary cards
        type = type.replace('Snow', '');
        type = type.replace('Basic', '');

        type = type.trim();

        console.log(type, res, type in res)

        if(type in res){
            res[type].push(cardList[i]);
        }
        else{
            res[type] = [];
            res[type].push(cardList[i]);
        }
    }

    return res;
  }
}

export default GroupedCardList;


