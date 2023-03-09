import { turnComputer } from "./turnComputer";

export const stop = (playersPoints, deck) => {
    console.log("FUNCIONA");
    turnComputer(playersPoints[0], deck, playersPoints);
  };