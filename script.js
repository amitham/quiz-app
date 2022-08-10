const questions = [
    {
        question: "What is the most visited country in the world",
        a: "India",
        b: "Sri Lanka",
        c: "US",
        d: "Thailand",
        e: "Australia",
        correct: 3
    },
    {
        question: "Most famous programming langauge in 2021",
        a: "Java",
        b: ".Net",
        c: "JavaScript",
        d: "Go",
        e: "Python",
        correct: 4
    },
    {
        question: "Who is the current president of US",
        a: "Gotabaya Rajapaksha",
        b: "Mahathma Gandi",
        c: "Viladimer Putin",
        d: "Donal Trump",
        e: "Baiden",
        correct: 4
    },
    {
        question: "Which planets bigger than SUN",
        a: "Earth",
        b: "Pluto",
        c: "Mars",
        d: "Jupiter",
        e: "None of the above",
        correct: 4
    },
    {
        question: "Which hollywood movie has the most awards",
        a: "World war Z",
        b: "Thor Love and Thunder",
        c: "Pirates of the caribiean",
        d: "Loard of the rings",
        e: "Beauty and the Beast",
        correct: 3
    }
]

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');

const ques = document.getElementById('question-text');
const btn = document.getElementById('btn_next');

let currentQuestion = 0;
let score = 0;

loadQuestions();

function loadQuestions() {
    
    const currentQuizData = questions[currentQuestion];

    ques.innerText = currentQuestion + 1 + "  " + currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;

    currentQuestion++;
}

let inputs = document.getElementsByTagName('input');

function clearFields() {
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].checked = false
    }  
}

btn.addEventListener("click",() => {       
    
    let selectedAnswer = [];
    for (let index = 0; index < inputs.length; index++) {
        if(inputs[index].checked) {
            //check the answer is correct to set the score
            if(index == questions[currentQuestion-1].correct){
                score++
            }

            // to verify user selected an answer
            selectedAnswer.push(inputs[index].checked);        
        }
    }   
    
    if(currentQuestion < questions.length) {
        if(selectedAnswer.length > 0){
            loadQuestions();
            clearFields(); //clear the fields
            selectedAnswer = [];  //clear the selected answers
        } else {
            alert("Please answer the question")
        }
        
    } else {
        alert("Your score is: " + score);
        score = 0;
    }    
})