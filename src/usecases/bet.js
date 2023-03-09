import { btn_request, credits } from "./htmlElement";
import { elements } from "..";
import { calculus } from "./calculus";

/**
 *  This function is in charge of managing the credits invested by the player
 */

export const bet = () => {
    console.log(elements.playerCredits);
    if (elements.playerCredits <= 0) {
      btn_request.disabled = true;
      credits.innerText = elements.playerCredits;
      alert("No credit 😢");
    } else {
        calculus();
    }
  };