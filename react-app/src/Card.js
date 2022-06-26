class Card {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
      this.scryfall_data = null;
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

      //const image_uri = this.scryfall_data.image_uris.small;     //small, less bandwidth
      const image_uri = this.scryfall_data.image_uris.normal;          //normal, higer quality
      return image_uri;
    }

    async get_scryfall_data(){
      const url = encodeURI('https://api.scryfall.com/cards/named?fuzzy=' + this.name);
      const response = await fetch(url);
      console.log('calling ' + url);
      const myJson = await response.json();
      this.scryfall_data = myJson;
      console.log(myJson);
    }
  }


export default Card;
  


