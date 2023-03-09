/**
 * 
 * @param {Array<String>} deck 
 * @returns String Return a card from the deck
 */

export const takeCard = (deck) => deck.length === 0 ? alert("There are no more cards in the deck") : deck.pop();
