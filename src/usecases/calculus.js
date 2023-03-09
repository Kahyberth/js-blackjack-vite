import { btn_request, btn_newGame, btn_bet, btn_stop, credits } from "./htmlElement";
import { elements } from "..";
/**
 * This function is in charge of calculating the amount invested by the user.
 */
export const calculus = () => {
    btn_request.disabled = false;
    btn_newGame.disabled = true;
    btn_stop.disabled = false;
    elements.quantity = prompt("Please enter a quantity");
    if (elements.quantity > elements.playerCredits) {
      alert("Insufficient credits");
      btn_request.disabled = true;
      btn_newGame.disabled = false;
      btn_stop.disabled = true;
    } else {
      btn_request.disabled = false;
      btn_newGame.disabled = true;
      btn_stop.disabled = false;
      credits.innerText = elements.playerCredits - elements.quantity;
      elements.playerCredits -= elements.quantity;
      btn_bet.disabled = true;
    }
}
