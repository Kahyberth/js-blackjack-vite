import { btn_bet, btn_newGame, btn_request, btn_stop, points } from "./htmlElement";
import { takeCard } from "./takeCard";
import { divDecks } from "./divDecks";
import { win } from "./win";
import { pointsAccumulator } from "./pointsAccumulator";

export const turnComputer = (minimumPoints, deck, playersPoints) => {
  let pointsComputer = 0;
  do {
    let card = takeCard(deck);
    pointsComputer = pointsAccumulator(
      playersPoints.length - 1,
      card,
      playersPoints
    );
    divDecks(card, playersPoints.length - 1);
  } while (pointsComputer < minimumPoints && minimumPoints <= 21);

  btn_request.disabled = true;
  btn_newGame.disabled = false;
  btn_stop.disabled = true;
  btn_bet.disabled = true;
  points[1].innerText = pointsComputer;
  win(playersPoints);
};
