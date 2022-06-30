class Card {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
      this.scryfall_data = null;
    }

    get_scryfall_url(){
      if(this.scryfall_data === null){
        return encodeURI('https://scryfall.com/search?q=' + this.name);
      }
      return this.scryfall_data.scryfall_uri;
    }

    get_colors(){
      if(this.scryfall_data === null){
        return [];
      }
      return this.scryfall_data.color_identity;
    }

    get_image_uri(){
      if(this.scryfall_data === null){
        return 'https://media.magic.wizards.com/image_legacy_migration/magic/images/mtgcom/fcpics/making/mr224_back.jpg';
      }
      const quality = 'normal';   //'small' for less bandwidth

      if('image_uris' in this.scryfall_data){
        return this.scryfall_data.image_uris[quality];
      }
      else if('card_faces' in this.scryfall_data){
        return this.scryfall_data.card_faces[0].image_uris[quality];
      }
    }

    async get_scryfall_data(){
      const url = encodeURI('https://api.scryfall.com/cards/named?fuzzy=' + this.name);
      const response = await fetch(url);
      console.log('called ' + url);
      const myJson = await response.json();
      this.scryfall_data = myJson;
    }
  }


export default Card;
  


