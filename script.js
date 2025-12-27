const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    question: "Which programming language runs in a web browser?",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What is 5 + 3?",
    options: ["5", "8", "10", "15"],
    answer: "8"
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion() {
  if (currentQuestion >= quizData.length) {
    document.getElementById("question").innerText = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").innerText = `Your Score: ${score}/${quizData.length}`;
    return;
  }

  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;
  document.getElementById("options").innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("div");
    btn.innerText = option;
    btn.className = "option";
    btn.onclick = (event) => selectAnswer(option, event);
    document.getElementById("options").appendChild(btn);
  });
}

function selectAnswer(answer, event) {
  selectedAnswer = answer;
  const options = document.querySelectorAll(".option");
  options.forEach(opt => opt.style.background = "#fff");
  event.target.style.background = "#d1e7fd";
}

function nextQuestion() {
  if (selectedAnswer === quizData[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  selectedAnswer = null;
  loadQuestion();
}

// Load first question
loadQuestion();
