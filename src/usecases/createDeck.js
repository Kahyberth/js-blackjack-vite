
import _ from "underscore";
/**
 * This function is responsible for creating the deck of cards
 * @param {Array<String>} typeSpecial 
 * @param {Array<String>} typeClassic 
 * @returns Array<String> this array represent a shuffle deck
 */

export const createDeck = (typeSpecial, typeClassic) => {
  
    let deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let type of typeClassic) {
        deck.push(i + type);
      }
    }

    for (let type of typeClassic) {
      for (let special of typeSpecial) {
        deck.push(special + type);
      }
    }
    return _.shuffle(deck);

  };