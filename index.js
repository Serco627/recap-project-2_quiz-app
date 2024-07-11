// phew… not a lot going on here. Please add some code!
const bookmarkButton = document.querySelector("[data-js='bookmark']");

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark-checked");
});

const cardAnswer = document.querySelector("[data-js='card-answer']");
console.log(cardAnswer);
const showAnswerButton = document.querySelector("[data-js='answer-button']");
console.log(showAnswerButton);

showAnswerButton.addEventListener("click", () => {
  // Toggle der Klasse 'card__answer--active', um die Antwort anzuzeigen oder zu verbergen
  cardAnswer.classList.toggle("card__answer--active");

  // Ändern Sie den Text des Buttons basierend auf dem aktuellen Zustand
  if (cardAnswer.classList.contains("card__answer--active")) {
    showAnswerButton.textContent = "Hide Answer";
  } else {
    showAnswerButton.textContent = "Show Answer";
  }
});
