
//init class obj 
const weather = new Weather;
const ui = new UI;

//weather.getWeather('karachi','pakistan').then(res => console.log(res))



// let w = weather.getWeather('lahore','pakistan').then(res => console.log(res));
// console.log(w);

document.getElementById('searchBtn').addEventListener('click',getWeatherData);

// if(document.getElementById('citySearch').value === ''){
//     ui.clearDisplay();
//}

function getWeatherData(){

    const city = document.getElementById('citySearch').value;
    const state = document.getElementById('stateSearch').value;

    weather.getWeather(city,state).then(res =>{ 
//when input is wrong   
if(res.message ==='city not found'){
        //console.log('wrong input')
        ui.showAlertMessage('No City Found','alert alert-danger')

    }
     else {
        console.log(res)
    //to display the results
        ui.displayResults(res)
    }
    })

}