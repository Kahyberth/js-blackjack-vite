import { credits } from "./htmlElement";
import { elements } from "..";
import { btn_newGame } from "./htmlElement";

/**
 * This works defines the winner of the round
 * @param {Array<Number>} 
 * @returns  button_newGame
 */

export const win = (playersPoints) => {
    const [pointP, pointC] = playersPoints;
    setTimeout(() => {
      if (pointP > 21) {
        alert("LOSE");
      } else if (pointP === pointC) {
        elements.playerCredits += parseInt(elements.quantity);
        credits.innerText = elements.playerCredits;
        alert("DRAW");
      } else if (pointC > 21) {
        credits.innerText = elements.playerCredits += elements.quantity * 2;;
        alert("WIN");
      } else {
        alert("LOSE");
      }
    }, 100);
    return btn_newGame.enabled = true;
  };