import { state } from "./game-state.js";
import { config } from "./game-cofig.js";
import { factory } from "./game-objects.js";
export { newFrame }; //

const gameScore = document.querySelector(".game-score");
const gameArea = document.querySelector(".game-area");

//game frames
function newFrame() {
  //move wizard
  const wizardElement = modifyWizardPosition();

  //wizard fire movement
  const fireballs = document.querySelectorAll(".fireball");
  for (const fireball of fireballs) {
    if (fireball.offsetLeft > gameArea.offsetWidth) {
      fireball.remove();
    } else {
      fireball.style.left = fireball.offsetLeft + config.magicSpeed + "px";
    }
  }

  //create bugs
  if (state.lastBugSpawn + state.maxBugSpawnTime * Math.random() < Date.now()) {
    factory.createBug();
    state.lastBugSpawn = Date.now();
  }

  //move bugs

  const bugs = document.querySelectorAll(".bug");
  bugs.forEach((bug) => {
    //remove outside Bugs
    if (bug.offsetLeft < 0) {
      return bug.remove();
    }

    //chek wizard collision
    const hasCollision = checkCollision(wizardElement, bug);
    if (hasCollision) {
      state.isGameOver = true;
    }

    //chek fireball colision

    const fireballs = document.querySelectorAll(".fireball");
    fireballs.forEach((fireball) => {
      if (checkCollision(fireball, bug)) {
        fireball.remove();
        bug.remove();
      }
    });

    //bug move
    bug.style.left = bug.offsetLeft - config.bugSpeed + "px";
  });

  //aplly score
  state.score += config.timePoints;
  gameScore.textContent = "Точки:" + state.score;

  if (!state.isGameOver) {
    window.requestAnimationFrame(newFrame);
  } else {
    const gameOverArea = document.querySelector(".game-over");
    gameOverArea.classList.remove("hidden");
  }
}
//colision detection
function checkCollision(firstElement, secondElement) {
  const first = firstElement.getBoundingClientRect();
  const second = secondElement.getBoundingClientRect();

  const hasCollision = !(
    first.top > second.bottom ||
    first.bottom < second.top ||
    first.right < second.left ||
    first.left > second.right
  );
  return hasCollision;
}

// TODO: Fix accelerration on diagonals
function modifyWizardPosition() {
  const wizardElement = document.querySelector(".wizard");
  const { wizard } = state;
  //wizard moves

  if ((state.controls.KeyA || state.controls.ArrowLeft) && wizard.x > 0) {
    wizardElement.style.left = `${(wizard.x -= config.speed)}px`;
  }
  if (
    (state.controls.KeyD || state.controls.ArrowRight) &&
    wizard.x + wizard.width < gameArea.offsetWidth
  ) {
    wizardElement.style.left = `${(wizard.x += config.speed)}px`;
  }
  if ((state.controls.KeyW || state.controls.ArrowUp) && wizard.y > 0) {
    wizardElement.style.top = `${(wizard.y -= config.speed)}px`;
  }
  if (
    (state.controls.KeyS || state.controls.ArrowDown) &&
    wizard.y + wizard.height < gameArea.offsetHeight
  ) {
    wizardElement.style.top = `${(wizard.y += config.speed)}px`;
  }

  if (state.controls.Space) {
    wizardElement.style.backgroundImage = 'url("images/wizard-fire.png")';
    //create fireball
    factory.createFireball(wizard);
  } else {
    wizardElement.style.backgroundImage = 'url("images/wizard.png")';
  }
  return wizardElement;
}
export const engine = {
  start() {
    window.requestAnimationFrame(newFrame);
  },
};
