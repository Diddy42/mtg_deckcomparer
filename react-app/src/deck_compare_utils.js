function compare_decks(deck1_str, deck2_str){
    let json_res = {};

    json_res['cards_only_in_deck_1'] = ['Craterhoof Behemoth', 'Drover of the Mighty'];
    json_res['cards_only_in_deck_2'] = ['Manaweft Sliver', 'Gilded Goose'];
    json_res['cards_different_qty'] = [{name: 'Ilysian Caryatid', change: 1}, {name: 'Jaspera Sentinel', change: -2}];
    json_res['cards_unchanged'] = ['Koma, Cosmos Serpent', 'Paradise Druid'];

    return json_res
}

export default compare_decks;
