const quizdb = [
  {
    question: "WWW stands for ?",
    answer: "World Wide Web",
  },

  {
    question: "Which software is used to view web pages ?",
    answer: "Web Browser",
  },

  {
    question: "ISP stands for ?",
    answer: "Internet Service Provider",
  },

  {
    question: "CSS stands for ?",
    answer: "Cascading Style Sheet",
  },

  {
    question: "HTML stands for ?",
    answer: "Hyper Text Markup Language",
  },

  {
    question: "The company behind Windows operating system ?",
    answer: "Microsoft",
  },

  {
    question: "Who created Javascript ?",
    answer: "Brendan Eich",
  },

  {
    question: "The company behind Chrome web browser ?",
    answer: "Google",
  },

  {
    question: "Name a popular version control system",
    answer: "Git",
  },

  {
    question: "Which tag is used to link an image in a HTML page?",
    answer: "img",
  },
];

/* const api_url = 
       "https://raw.githubusercontent.com/attainu/attainu-eagle/master/assignments/week-4/day-4/quiz.json";

       async function getapi(url) {
    
	  // Storing response
	  const response = await fetch(url);
	
	  // Storing data in form of JSON
	  var data = await response.json();
	  console.log(data);

	
     }

     getapi(api_url);*/

let questionCount = 0;
let qc = 1;

const question = document.querySelector(".question");
const answer = document.querySelector("#answer");
const submit = document.querySelector("#submit");
const next = document.querySelector("#next");
const inn = document.querySelector("#inn");

const showScore = document.querySelector("#showScore");
const showQ = document.querySelector('.showQuestion');

let score = 0;
const loadQuestion = () => {
  const questionList = quizdb[questionCount];
  if (questionCount < 10) {
    question.innerText = questionList.question;
	showQ.innerHTML = `<h3> Question No: ${qc}/10`;
  }
};

loadQuestion();

submit.addEventListener("click", () => {
  const ans = quizdb[questionCount].answer;

  if (answer.value.toLowerCase() == ans.toLowerCase()) {
    score++;
    questionCount++;
	qc++;
    answer.value = "";
    answer.focus();
    console.log(score);
	
  } 
  else if (answer.value.toLowerCase() != ans.toLowerCase()) {
    showScore.innerHTML = ` 
			<h3> Score : ${score}/10 ✌️✌️</h3>
			<button class="btn" onclick="location.reload()"> Retake Exam <button>
		`;
		
			document.getElementById("timer").innerHTML = "00" + ":" + "00";
	  
		  
    showScore.classList.remove("scoreArea");
  }

  if (questionCount < quizdb.length) {
    answer.value = "";
    loadQuestion();
  } else {
    showScore.innerHTML = ` 
			<h3> Score : ${score}/10 ✌️✌️</h3>
			<button class="btn" onclick="location.reload()"> Retake Exam <button>
		`;
    document.getElementById("timer").innerHTML = 00 + ":" + 00;
	
    showScore.classList.remove("scoreArea");
  }
});

sbmt.addEventListener("click", () => {
  if (questionCount < 10) {
    const ans = quizdb[questionCount].answer;

    if (questionCount <= 10) {
      if (answer.value.toLowerCase() == ans.toLowerCase()) {
        score++;
		qc++;
        questionCount++;
        answer.value = "";
        
        console.log(score);
        loadQuestion();
      } 
	  else if (answer.value.toLowerCase() != ans.toLowerCase()) {
        questionCount++;
		qc++;
        console.log(score);
        loadQuestion();
      }
    } else if (questionCount == quizdb.length) {
      showScore.innerHTML = ` 
			<h3> Score : ${score}/10 ✌️✌️</h3>
			<button class="btn" onclick="location.reload()"> Retake Exam <button>
		`;
      showScore.classList.remove("scoreArea");
    }
  }
});

next.addEventListener("click", () => {
  if (questionCount < 10) {
    questionCount++;
	qc++;
    answer.value = "";
    loadQuestion();
  }
});

document.getElementById("timer").innerHTML = 00 + ":" + 10;
startTimer();

function startTimer() {
  var presentTime = document.getElementById("timer").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);

  if (s == 59) {
    m = m - 1;
  }  

  if (m < 0) {
    return;
  }

  document.getElementById("timer").innerHTML = m + ":" + s;
  /* console.log(m); */
  setTimeout(startTimer, 1000);
  
  if (m == 0 && s == 0) {
    showScore.innerHTML = ` 
			<center><h2>Time Out !!!</h2></center>
			<h3> Score : ${score}/10 ✌️✌️</h3>
			<button class="btn" onclick="location.reload()"> Retake Exam <button>
		`;
    showScore.classList.remove("scoreArea");
  }
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}
