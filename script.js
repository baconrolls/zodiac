const questions = document.querySelectorAll('.question');
const answer = 'Gemini'; // Replace this with the correct answer for the quiz

questions.forEach(question => {
  question.addEventListener('click', () => {
    const userAnswer = question.getAttribute('data-question');
    if (userAnswer === answer) {
      question.style.color = 'green';
    } else {
      question.style.color = 'red';
    }
  });
});
