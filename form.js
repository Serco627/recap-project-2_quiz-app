const form = document.querySelector('[data-js="formular"]');
console.log(form);

const question = document.querySelector('[data-js="question"]');
const answer = document.querySelector('[data-js="answer"]');
const tag = document.querySelector('[data-js="tag"]');

console.log(question, answer, tag);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  //   console.log(data);
  const newCard = document.createElement("div");
  newCard.classList.add("question-card");
  const questionInput = question.value;
  const answerInput = answer.value;
  const tagInput = tag.value;
  newCard.innerHTML = `
  
  <ul class="card-list">
        <li class="card-list__item">
          <article class="card">
            <h2 class="card__question">
              ${questionInput}
            </h2>
            <button class="card__button-answer" type="button">
              Show answer
            </button>
            <p class="card__answer">${answerInput}</p>
            <ul class="card__tag-list">
              <li class="card__tag-list-item">${tagInput}</li>
            </ul>
  `;

  form.append(newCard);
});

const questionCount = document.querySelector("[data-js='question-count']");
console.log(questionCount);
const answerCount = document.querySelector("[data-js='answer-count']");
console.log(answerCount);

question.addEventListener("input", () => {
  const questionInput = question.value.length;
  questionCount.textContent = 150 - questionInput + " characters left";
});

answer.addEventListener("input", () => {
  const answerInput = answer.value.length;
  answerCount.textContent = 150 - answerInput + " characters left";
});
