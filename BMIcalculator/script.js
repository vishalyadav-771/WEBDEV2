document.getElementById('calc').addEventListener('click', () => {
    const w = parseFloat(document.getElementById('weight').value);
    const h = parseFloat(document.getElementById('height').value)/100;
    if(!w || !h) return alert('Enter valid values');
    const bmi = (w / (h*h)).toFixed(2);
    document.getElementById('result').textContent = `Your BMI is ${bmi}`;
});