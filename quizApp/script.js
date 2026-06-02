const questions = [
    {q:"2 + 2 =", options:["3","4","5","6"], answer:1},
    {q:"Capital of India?", options:["Delhi","Mumbai","Kolkata","Chennai"], answer:0},
    {q:"5 * 6 =", options:["11","30","25","20"], answer:1},
    {q:"National bird of India?",options:["Peacock","Peigon","Eagle","Crow"], answer:0}
];

let current=0, score=0;
const qEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');

function showQuestion(){
    if(current >= questions.length){
        qEl.textContent="Quiz Finished!";
        optionsEl.innerHTML="";
        scoreEl.textContent=`Your Score: ${score}/${questions.length}`;
        return;
    }
    qEl.textContent = questions[current].q;
    optionsEl.innerHTML = '';
    questions[current].options.forEach((opt,i)=>{
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.className='option';
        btn.addEventListener('click', ()=> checkAnswer(i));
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(i){
    if(i === questions[current].answer) score++;
    current++;
    showQuestion();
}

document.getElementById('next').addEventListener('click', showQuestion);
showQuestion();