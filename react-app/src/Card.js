class Card {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
      this.scryfall_data = null;
    }

    async get_scryfall_url(){
      if (this.scryfall_data == null){
        await this.get_scryfall_data();
      }

      return this.scryfall_data.scryfall_uri;
    }

    async get_colors(){
      if (this.scryfall_data == null){
        await this.get_scryfall_data();
      }

      return this.scryfall_data.color_identity;
    }

    async get_image_uri(){
      if (this.scryfall_data == null){
        await this.get_scryfall_data();
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
      console.log('calling ' + url);
      const myJson = await response.json();
      this.scryfall_data = myJson;
    }
  }


export default Card;
  


