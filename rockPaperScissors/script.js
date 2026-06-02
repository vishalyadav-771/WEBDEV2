const buttons = document.querySelectorAll('.choice');
const result = document.getElementById('result');

buttons.forEach(btn => btn.addEventListener('click', () => {
    const user = btn.dataset.choice;
    const choices = ['rock','paper','scissors'];
    const computer = choices[Math.floor(Math.random()*3)];
    if(user===computer) result.textContent = `Draw! Both chose ${user}`;
    else if((user==='rock' && computer==='scissors') || 
            (user==='paper' && computer==='rock') || 
            (user==='scissors' && computer==='paper')) 
        result.textContent = `You Win! ${user} beats ${computer}`;
    else result.textContent = `You Lose! ${computer} beats ${user}`;
}));