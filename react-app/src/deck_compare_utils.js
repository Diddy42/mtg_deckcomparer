import Card from "./Card";

function get_relevant_lines(deck_str){
    var d_lines = deck_str.split('\n');
    d_lines = d_lines.filter((l) => {return l.localeCompare('Deck') !== 0 && l.localeCompare('Commander') !== 0 && l.localeCompare('Sideboard') !== 0 && l.localeCompare('') !== 0})
    
    return d_lines
}

function get_name_and_qty_from_line(line){
    var spl = line.split(' ')

    var qty = parseInt(spl[0])

    var cName = '';
    for(var i = 1; i < spl.length; i++){
        cName = cName + spl[i]
        if(i !== spl.length - 1){
            cName = cName + ' '
        }
    }

    if(cName.includes('(')){
        var idx = cName.indexOf('(');
        cName = cName.substring(0, idx);
    }

    cName = cName.trim();

    return [qty, cName];
}

function get_deck_obj(deck_str){
    var d_obj = {};

    var d_lines = get_relevant_lines(deck_str);
    var qty;
    var cName;
    for(var i = 0; i < d_lines.length; i++){
        [qty, cName] = get_name_and_qty_from_line(d_lines[i]);
        
        if(cName in d_obj){
            d_obj[cName] = d_obj[cName] + qty;
        }
        else{
            d_obj[cName] = qty;
        }
    }

    return d_obj;
}

function compare_decks(deck1_str, deck2_str){
    let json_res = {};
    json_res['cards_only_in_deck_1'] = [];
    json_res['cards_only_in_deck_2'] = [];
    json_res['cards_different_qty'] = [];
    json_res['cards_unchanged'] = [];

    var d1 = get_deck_obj(deck1_str);
    var d2 = get_deck_obj(deck2_str);

    for(var d1_card in d1){
        if(d1_card in d2){
            if(d1[d1_card] === d2[d1_card]){
                json_res['cards_unchanged'].push(new Card(d1_card, d1[d1_card]));
            }
            else{
                json_res['cards_different_qty'].push(new Card(d1_card, d2[d1_card] - d1[d1_card]));
            }
        }
        else{
            json_res['cards_only_in_deck_1'].push(new Card(d1_card, d1[d1_card]));
        }
    }

    for(var d2_card in d2){
        if(!(d2_card in d1)){
            json_res['cards_only_in_deck_2'].push(new Card(d2_card, d2[d2_card]));
        }
    }

    return json_res
}

export default compare_decks;
