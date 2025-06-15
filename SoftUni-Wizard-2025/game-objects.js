//obj creation
const gameArea = document.querySelector(".game-area");
export const factory = {
  createWizard(wizard) {
    //create El
    const wizardElement = document.createElement("div");
    wizardElement.classList.add("wizard");

    //set styles
    wizardElement.style.width = wizard.width + "px";
    wizardElement.style.height = wizard.height + "px";
    wizardElement.style.backgroundImage = 'url("images/wizard.png")';
    wizardElement.style.backgroundSize = "contain";
    wizardElement.style.backgroundRepeat = "no-repeat";
    wizardElement.style.backgroundPosition = "center";

    //set position

    wizardElement.style.position = "absolute";
    wizardElement.style.left = wizard.x + "px";
    wizardElement.style.top = wizard.y + "px";

    //attach to dom
    gameArea.appendChild(wizardElement);
  },
  createFireball(wizard) {
    //checkCooldown
    if (wizard.lastMagicUse + wizard.coolDown > Date.now()) {
      return;
    }
    //createEl
    const fireballElement = document.createElement("div");
    fireballElement.classList.add("fireball");
    //styles
    fireballElement.style.backgroundImage = 'url("images/fire-ball.png")';
    fireballElement.style.backgroundSize = "contain";
    fireballElement.style.backgroundRepeat = "no-repeat";
    fireballElement.style.backgroundPosition = "center";
    fireballElement.style.width = "20px";
    fireballElement.style.height = "20px";
    fireballElement.style.position = "absolute";
    // TODO:adjustment fireball postition

    fireballElement.style.left = wizard.x + wizard.width + "px";
    fireballElement.style.top = wizard.y + wizard.width / 2 + "px";

    wizard.lastMagicUse = Date.now();

    gameArea.appendChild(fireballElement);
  },

  createBug() {
    const bugElement = document.createElement("div");
    bugElement.classList.add("bug");

    bugElement.style.backgroundImage = 'url("images/bug.png")';
    bugElement.style.backgroundSize = "contain";
    bugElement.style.backgroundRepeat = "no-repeat";
    bugElement.style.backgroundPosition = "center";
    bugElement.style.width = "20px";
    bugElement.style.height = "20px";
    bugElement.style.position = "absolute";

    //set positions
    bugElement.style.left = gameArea.offsetWidth + "px";
    bugElement.style.top = Math.random() * (gameArea.offsetHeight - 10) + "px";

    //append to dom
    gameArea.appendChild(bugElement);
  },
};
