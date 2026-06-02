const btn = document.getElementById('changeColor');
btn.addEventListener('click', () => {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = randomColor;
});