const quizDB =[
{
    question:"Q1:What does CSS stand for?",
    a: "Creative Style Sheets",
    b: "Colorful Style Sheets",
    c: "Cascading Style Sheets",
    d: "Computer Style Sheets",
    ans: "ans3"
},
{
    question:"Q2:What does CSS stand for?",
    a: "Creative Style Sheets",
    b: "Colorful Style Sheets",
    c: "Cascading Style Sheets",
    d: "Computer Style Sheets",
    ans: "ans3"
},
{
    question:"Q3:What does CSS stand for?",
    a: "Creative Style Sheets",
    b: "Colorful Style Sheets",
    c: "Cascading Style Sheets",
    d: "Computer Style Sheets",
    ans: "ans3"
},
{
    question:"Q4:In CSS, h1 can be called as?",
    a: "Selector",
    b: "Value",
    c: "Attribute",
    d: "Tag",
    ans: "ans1"
}
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

let questionCount=0;
let score=0;

const loadQuestion = () =>{
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getAnswer = () =>{
    let answer;
    answers.forEach((curAns) =>{
        if(curAns.checked){
            answer = curAns.id;
        }
        
    });
    return answer;
}

const deSelectAll = () =>{
    answers.forEach((curAns)=>{ 
        curAns.checked = false;
    })
    
}

submit.addEventListener('click',()=>{
    const checkAnswer = getAnswer();
    console.log(checkAnswer);

    if(checkAnswer == quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    deSelectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
       showScore.innerHTML = `
         <h3> You Scored ${score}/${quizDB.length} </h3>
         <button class="btn" onclick="location.reload()"> PlayAgain</button>
       
       `;
       showScore.classList.remove("scoreArea");
    }
});