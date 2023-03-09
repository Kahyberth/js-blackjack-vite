/**
 * This function is responsible for returning the value of the card
 * @param {String} card 
 * @returns Number the value card
 */

export const showValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return value.includes('A') ? 11 : isNaN(value) ? 10 : parseInt(value);
  };