const $= document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

let search = $('.search')
let city = $('.city')
let country = $('.country')
let value = $('.value')
let shortDesc = $('.short-desc')
let visibility= $('.visibility span')
let wind = $('.wind span')
let sun = $('.sun span')
let time = $('.time')
let content = $('.content')
let body = $('body')
let weather = $('#weather')

async function changeWeatherUI(capitalValue){

    console.log(search.value)
    let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&appid=cb8d857e9528680474d1a7a90b239fba`


    let data= await fetch(apiURL).then(res=>res.json())
    console.log(data)
    if(data.cod===200){
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText=data.sys.country
        value.innerText=Math.round(data.main.temp-273.15)
        if(value.innerText<=10){
            body.classList.add('cold')
        }
        visibility.innerText=data.visibility+'m'
        wind.innerText=data.wind.speed + 'm/s'
        sun.innerText=data.main.humidity+'%'
        shortDesc.innerText=data.weather[0]?data.weather[0].main : ''
        time.innerText= new Date().toLocaleString('vi')
    }
    else{
        content.classList.add('hide')
    }
}


search.addEventListener('keypress',function(e){
    console.log(e)
    console.log(e.keyCode)
    if(e.keyCode===13){
        console.log(search.value.trim())
        changeWeatherUI(search.value.trim())
        search.value=''
    }
})

changeWeatherUI('ha noi')