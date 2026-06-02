const display = document.getElementById('display');
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.textContent;
        if(val==='='){
            display.value = eval(display.value);
        } else display.value += val;
    });
});