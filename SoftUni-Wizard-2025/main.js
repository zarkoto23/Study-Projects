import { state } from "./game-state.js";
import { factory } from "./game-objects.js";
import { engine } from "./game-engine.js";
import { newFrame } from "./game-engine.js";
import "./game-controls.js";

const startElement = document.querySelector(".game-start");
startElement.addEventListener("click", (e) => {
  e.currentTarget.classList.add("hidden");

  factory.createWizard(state.wizard);
  window.requestAnimationFrame(newFrame);
  engine.start();
});
