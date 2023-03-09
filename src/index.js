import _ from "underscore";
import {
  createDeck,
  takeCard,
  bet,
  divDecks,
  pointsAccumulator,
  turnComputer,
  stop,
} from "./usecases/container";
import {
  btn_bet,
  btn_newGame,
  btn_request,
  btn_stop,
  divCards,
  points,
} from "./usecases/htmlElement";

export const elements = {
  playerCredits: 5000,
  quantity: 0,
};

const blackjack = (() => {
  "use strict";
  let deck = [],
    playersPoints = [];
  const types = ["C", "D", "H", "S"],
    specials = ["A", "J", "Q", "K"];

  const gameInitialization = (nPlayers = 2) => {
    playersPoints = [];

    btn_newGame.disabled = true;
    btn_bet.disabled = false;
    deck = createDeck(specials, types);

    for (let i = 0; i < nPlayers; i++) {
      playersPoints.push(0);
    }
    points.forEach((e) => (e.innerText = 0));
    divCards.forEach((e) => (e.innerHTML = ""));
  };

  btn_newGame.addEventListener("click", () => {
    gameInitialization();
  });

  btn_request.addEventListener("click", () => {
    const card = takeCard(deck);
    const addNewcard = document.createElement("img");
    const playerPoints = pointsAccumulator(0, card, playersPoints);
    divDecks(card, 0);
    if (playerPoints === 21) {
      turnComputer(playerPoints, deck, playersPoints);
    } else if (playerPoints > 21) {
      turnComputer(playerPoints, deck, playersPoints);
    }
    return playerPoints;
  });

  btn_bet.addEventListener("click", () => {
    bet();
  });

  btn_stop.addEventListener("click", () => {
    stop(playersPoints, deck);
  });
})();
