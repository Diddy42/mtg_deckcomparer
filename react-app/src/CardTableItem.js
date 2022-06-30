import React from 'react';
import missing_card from './images/missing_card.jpg';
import CardImagePopup from './CardImagePopup';

class CardTableItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {hover: false, mouseX: 0, mouseY: 0, imgSrc: missing_card};
    }

    //{ this.state.hover && <CardImagePopup imgSrc={missing_card}/> }

    render() {
        return <>
                
                <tr 
                    key={this.props.card_obj.name}
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    onMouseMove={this._onMouseMove.bind(this)}
                    onClick={this.handleClick.bind(this)}
                >
                    
                    <td style={{backgroundColor: this.get_style_color_from_qty(this.props.card_obj.quantity), width:50}}>{this.get_qty_string(this.props.card_obj.quantity)}</td>
                    <td style={{backgroundColor: this.get_color_str()}}>
                            {this.props.card_obj.name}
                    </td>
                    
                    
                </tr>

                { this.state.hover && <CardImagePopup imgSrc={this.state.imgSrc} mouseX={this.state.mouseX} mouseY={this.state.mouseY}/> }
        </>
    }

    handleClick = () => {
        window.open(this.props.card_obj.get_scryfall_url());
    }

    get_qty_string = (qty) => {
        if(this.props.quantitiesAsChanges === false){
            return qty.toString();
        }

        if(qty >= 0){
            return '+' + qty.toString();
        }
        else{
            return qty.toString();
        }
    }

    get_style_color_from_qty = (qty) => {
        if(this.props.quantitiesAsChanges === false){
            return 'white';
        }

        if(qty >= 0){
            return '#A6FF79';
        }
        else{
            return '#FF9770';
        }
    }

    get_color_str = () => {
        var result = this.props.card_obj.get_colors();

        if(result.length > 1){
            //this.setState({color: '#DCD130'});
            return '#DCD130';
        }
        else if(result.length === 0){
            return '#C0C0C0';
        }
        else{
            if(result[0] === 'G'){
                return '#46B642';
            }
            else if(result[0] === 'B'){
                return '#8A8A85';
            }
            else if(result[0] === 'U'){
                return '#6670FF';
            }
            else if(result[0] === 'R'){
                return '#F95252';
            }
            else if(result[0] === 'W'){
                return '#FFFFD5';
            }
        }
    }

    _onMouseMove(e) {
        this.setState({ mouseX: e.pageX, mouseY: e.pageY });
      }

    handleMouseOver = () => {
        this.setState({hover: true, imgSrc: this.props.card_obj.get_image_uri()});
    }

    handleMouseOut = () => {
        this.setState({hover: false});
    }
}


export default CardTableItem;

