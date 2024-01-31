import { timerCounter } from "./TimerCounter.mjs";
import { bombCounter } from "./BombCounter.mjs";
import { game } from "./Game.mjs";
import { gameFeatures } from "./GameFeatures.mjs";

const face = document.querySelector(".interface__button__face");
face.addEventListener("click", () => {
  game.restartGame();
});

game.init();

timerCounter.startTimerCounter();
bombCounter.init();
gameFeatures.init();
