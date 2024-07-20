const quiz = [
    {
        question: "Which team won the ICC T20WC 2024?",
        answers: ["India", "Pakistan", "USA", "South Africa"],
        correct: "India"
    },
    {
        question: "What is 2+30?",
        answers: ["33", "60", "31", "32"],
        correct: "32"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: "Pacific"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    showQuestion();
});

let x = 0, mark = 0;
let intervalId;

function showQuestion() {
    document.getElementById("question-section").innerHTML = quiz[x].question;

    for (let i = 0; i < quiz[x].answers.length; i++) {
        const radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", "answer");
        radio.setAttribute("value", quiz[x].answers[i]);
        const label = document.createElement("label");
        label.innerHTML = quiz[x].answers[i];
        label.setAttribute("for", `answer${i}`);
        label.setAttribute("class", "answer");

        document.getElementById("response-options").appendChild(radio);
        document.getElementById("response-options").appendChild(label);
    }

    timer = 10;
    intervalId = setInterval(interval, 1000);
}

function nextQuestion() {
    clearInterval(intervalId);
    x++;

    if (x < quiz.length) {
        document.getElementById("response-options").innerHTML = " "
        showQuestion();
    } else {
        const btnnext = document.getElementById("proceed-btn");
        btnnext.remove();

        document.getElementById("timer").innerHTML = "";

        document.getElementById("question-section").innerHTML = " ";
        document.getElementById("response-options").innerHTML = " ";
        const score = document.getElementById("points");
        score.innerHTML = `<h2> Your score is ${mark} out of ${quiz.length} </h2>`;

        for (let i = 0; i < quiz.length; i++) {
            const out = document.createElement("p");
            out.innerHTML = `Question ${i + 1} : ${quiz[i].question} <br> Answer : ${quiz[i].correct}`;
            out.setAttribute("class", "answer");
            document.getElementById("feedback").appendChild(out);
        }
    }
}

function ansclick() {
    let answer = document.querySelector('input[name="answer"]:checked').value;
    if (answer == quiz[x].correct) {
        mark++;
    }
}

let timer = 10;
function interval() {
    document.getElementById("timer").innerHTML = timer;
    timer = timer - 1;
    if (timer < 0) {
        nextQuestion();
    }
}
