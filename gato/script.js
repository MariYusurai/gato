const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const simBtn = document.querySelector(".sim-btn");
const naoBtn = document.querySelector(".nao-btn");

simBtn.addEventListener("click", () => {
  question.innerHTML = "eu ja sabia!";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

naoBtn.addEventListener("mouseover", () => {
  const naoBtnRect = naoBtn.getBoundingClientRect();
  const maxX = window.innerWidth - naoBtnRect.width;
  const maxY = window.innerHeight - naoBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  naoBtn.style.left = randomX + "px";
  naoBtn.style.top = randomY + "px";
});

