class Card {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
      this.scryfall_data = null;
    }

    get_type(){
      if(this.scryfall_data === null){
        return 'Basic Land';
      }

      var type_line = this.scryfall_data.type_line;

      var type = '';
      if(type_line.includes('—')){
        type = type_line.split('—')[0].trim();
      }
      else{
        type = type_line;
      }

      return type;
    }

    get_cmc(){
      if(this.scryfall_data === null){
        return 0;
      }

      return this.scryfall_data.cmc;
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

      if(myJson.object !== 'error'){
        this.scryfall_data = myJson;
      }
    }
  }


export default Card;
  


