let count = 0;
const countEl = document.getElementById('count');
document.getElementById('inc').addEventListener('click', () => { count++; countEl.textContent=count; });
document.getElementById('dec').addEventListener('click', () => { count--; countEl.textContent=count; });