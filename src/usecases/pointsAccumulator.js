import { points } from "./htmlElement";
import { showValue } from "./showValue";

/**
 * This function stores the points of all players
 * @param {Number} turn 
 * @param {String} card 
 * @returns Array<Number>
 */

export const pointsAccumulator = (turn, card, playersPoints) => {
    playersPoints[turn] += showValue(card);
    points[turn].innerText = playersPoints[turn];
    return playersPoints[turn];
  }