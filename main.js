const input = document.querySelector('.input-search')
const city = document.querySelector('.name .city')
const country = document.querySelector('.name .country')
const time = document.querySelector('.time')
const temperature = document.querySelector('.temperature .value')
const shortDesc = document.querySelector('.short-desc')
const visibility = document.querySelector('.visibility span')
const wind = document.querySelector('.wind span')
const cloud = document.querySelector('.cloud span')
const body = document.querySelector('body')


const changeWeather = (data) => {

    city.innerHTML = data.name
    country.innerHTML = data.sys.country
    // toLocaleString('vn') : thời gian thực tại Việt Nam
    time.innerHTML = new Date().toLocaleString('vn')
    // làm tròn nhiệt độ
    temperature.innerHTML = Math.round(data.main.temp)
    if(Math.round(data.main.temp) < 20){
        body.classList.add('cold')
    }
    else{
        body.classList.remove('cold')
    }
    shortDesc.innerHTML = data.weather[0].main
    visibility.innerHTML = data.visibility + ' (m)'
	wind.innerHTML = data.wind.speed + ' (m/s)'
	cloud.innerHTML = data.clouds.all + ' (%)'
}

// call API
const changeInput = async (input) => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    
    const response = await fetch(api)
    const data = await response.json()
    console.log(data)
    changeWeather(data)
}
changeInput('ha noi')

// Change value = Enter
input.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        changeInput(e.target.value)
    }
})