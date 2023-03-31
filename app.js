const gameBtn = () => {
  const btns = document.querySelectorAll(".btn");
  const gameWindow = document.querySelector(".game-btns");
  const gameResults = document.querySelector(".game-results");
  const resultBtn = document.querySelector(".result-btn");
  const resultImg = document.querySelector(".result-img");
  const resultText = document.querySelector(".result-box");
  const computer = document.querySelector(".comp-results");
  const compImg = document.querySelector(".comp-img");
  const scoreCount = document.querySelector(".score-count");
  let count = 0;
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let numPick = Math.floor(Math.random() * 3);
      console.log(e.currentTarget.classList);
      const styles = e.currentTarget.classList;
      gameWindow.style.display = "none";
      gameResults.style.display = "block";
      resultBtn.style.display = "flex";
      resultBtn.classList.add(styles[1].slice(0, styles[1].length - 4));
      resultImg.srcset = `./images/icon-${styles[1].slice(
        0,
        styles[1].length - 4
      )}.svg`;
      switch (numPick) {
        case 0:
          computer.style.display = "flex";
          computer.classList.add("paper");
          compImg.srcset = "./images/icon-paper.svg";
          break;
        case 1:
          computer.style.display = "flex";
          computer.classList.add("rock");
          compImg.srcset = "./images/icon-rock.svg";
          break;
        case 2:
          computer.style.display = "flex";
          computer.classList.add("scissors");
          compImg.srcset = "./images/icon-scissors.svg";
          break;
      }
      if (
        styles[1].slice(0, styles[1].length - 4) === "paper" &&
        numPick === 1
      ) {
        resultText.innerHTML = "YOU WIN";
        count++;
        confettiFunc();
      } else if (
        styles[1].slice(0, styles[1].length - 4) === "rock" &&
        numPick === 2
      ) {
        resultText.innerHTML = "YOU WIN";
        count++;
        confettiFunc();
      } else if (
        styles[1].slice(0, styles[1].length - 4) === "scissors" &&
        numPick === 0
      ) {
        resultText.innerHTML = "YOU WIN";
        count++;
        confettiFunc();
      } else if (
        styles[1].slice(0, styles[1].length - 4) === "paper" &&
        numPick === 0
      ) {
        resultText.innerHTML = "TIE";
        count;
      } else if (
        styles[1].slice(0, styles[1].length - 4) === "rock" &&
        numPick === 1
      ) {
        resultText.innerHTML = "TIE";
        count;
      } else if (
        styles[1].slice(0, styles[1].length - 4) === "scissors" &&
        numPick === 2
      ) {
        resultText.innerHTML = "TIE";
        count;
      } else {
        resultText.innerHTML = "YOU LOSE";
        count;
      }
      scoreCount.innerHTML = count;
    });
  });
  rulesBtn();
  resetFunction();
};

const resetFunction = () => {
  const resetBtn = document.querySelector(".reset-btn");
  const gameWindow = document.querySelector(".game-btns");
  const gameResults = document.querySelector(".game-results");
  const resultBtn = document.querySelector(".result-btn");
  const computer = document.querySelector(".comp-results");
  const confettiBox = document.querySelector(".confetti-box");
  resetBtn.addEventListener("click", (e) => {
    console.log(e.currentTarget.classList);
    gameWindow.style.display = "flex";
    gameResults.style.display = "none";
    if (resultBtn.classList.contains("paper")) {
      resultBtn.classList.remove("paper");
    } else if (resultBtn.classList.contains("rock")) {
      resultBtn.classList.remove("rock");
    } else if (resultBtn.classList.contains("scissors")) {
      resultBtn.classList.remove("scissors");
    }
    if (computer.classList.contains("paper")) {
      computer.classList.remove("paper");
    } else if (computer.classList.contains("rock")) {
      computer.classList.remove("rock");
    } else if (computer.classList.contains("scissors")) {
      computer.classList.remove("scissors");
    }
    confettiBox.style.bottom = "-200px";
  });
};

const rulesBtn = () => {
  const rules = document.querySelector(".rules-btn");
  const overlay = document.querySelector(".rules-overlay");
  const closeBtn = document.querySelector(".close-btn");
  rules.addEventListener("click", () => {
    overlay.style.display = "flex";
  });
  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
  });
};

const confettiFunc = () => {
  const confettiBox = document.querySelector(".confetti-box");
  confettiBox.innerHTML = "🎉";
  confettiBox.style.bottom = "30px";
};

gameBtn();
