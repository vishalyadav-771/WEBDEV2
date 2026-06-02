document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if(!city) return alert('Enter city');
    // Simulated data
    const temp = Math.floor(Math.random()*30)+10;
    document.getElementById('weather').textContent = `Weather in ${city}: ${temp}°C`;
});