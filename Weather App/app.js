const btn = document.querySelector("#btn");
const val = document.querySelector("#name");
const report = document.querySelector("#reprt");


btn.addEventListener("click",async () =>{
    const city = val.value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=18605c62b3feaf6709f651bce3b70fb0&units=metric`;
    const response = await fetch(URL);
    const data = await response.json();
    
    console.log(data.name);
    console.log(data.sys.country);
    console.log(data.main.temp);
    console.log(data.main.temp_min);
    console.log(data.main.temp_max);
    console.log(data.wind.speed);
    report.innerText = `Location: ${data.name}, 
    Country: ${data.sys.country}, 
    Temperature: ${data.main.temp}°C,
    Min: ${data.main.temp_min}°C,
    Max: ${data.main.temp_max}°C, 
    Wind Speed: ${data.wind.speed} m/s`;  
});