import { divCards } from "./htmlElement";

export const divDecks = (card, turn) => {
    const addNewcard = document.createElement('img');
    addNewcard.src = `/assets/deck/${card}.png`;
    addNewcard.classList.add("cards");
    divCards[turn].append( addNewcard );
  }