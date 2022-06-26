import React from 'react';

//can't make it work 

class CardImagePopup extends React.Component {
    constructor(props){
      super(props);

      this.img_height = 400;
    }

    render() {
      return <>
        <img src={this.props.imgSrc} alt='?' style={{
          position: 'absolute',
          height: this.img_height,
          width: getWidthFromHeight(this.img_height),
          top: this.props.mouseY + 10,
          left: this.props.mouseX + 10
          }}/>
        </>
  }
}

function getWidthFromHeight(height){
  const magic_card_ratio = 88/63;

  return height/magic_card_ratio;
}

//<img src={this.props.imgSrc} alt='?'/>

export default CardImagePopup;

