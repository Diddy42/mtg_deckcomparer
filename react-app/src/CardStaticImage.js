import React from 'react';

class CardStaticImage extends React.Component {
    render() {
        const card_pixel_height = 200;
      return <>
      <img src={this.props.imgSrc} alt='?' width={this.getWidthFromHeight(card_pixel_height)} height={card_pixel_height}/>
    </>
  }

  getWidthFromHeight(height){
    const magic_card_ratio = 88/63;

    return height/magic_card_ratio;
  }
}


export default CardStaticImage;

