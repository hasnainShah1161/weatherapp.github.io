 

 class UI{

 constructor(){
     this.display = document.getElementById('displayResults')
 }
    displayResults(response){

        this.display.innerHTML = `
        <div class =" card mt-4">
        <div class="row ">
        <li  class="lead u-full-length form-control text-info">City : ${response.name} </li>
        <br>
        <li  class="lead u-full-length form-control text-info">Country : ${response.sys.country} </li>
        <br>
        <li  class="lead u-full-length form-control text-info">Temperature : ${response.main.temp - 273.15} &#8451</li>
        
        <li  class="lead u-full-length form-control text-info">Pressure : ${response.main.pressure} hpa</li>
        <li  class="lead u-full-length form-control text-info">Humidity : ${response.main.humidity}% </li>
        <li  class="lead u-full-length form-control text-info">Max-Temperature : ${response.main.temp_max - 273.15}&#8451 </li>
        <li  class="lead u-full-length form-control text-info">wind-speed : ${response.wind.speed} m/s </li>
        <li  class="lead u-full-length form-control text-info">Description : ${response.weather[0].description} </li>
        <li  class="lead u-full-length form-control text-info">Latitude : ${response.coord.lat} </li>
        <li  class="lead u-full-length form-control text-info">Longitude : ${response.coord.lon} </li>
        <div class="col-md-3 mt-2">
        <img  class="img-fluid" src="${response.weather[0].icon}">
        </div>
        
       
        
        
        </div>
        </div>`;


    }
    //clearDisplay

    // clearDisplay(){

    //     this.display.innerHTML.remove();
    // }
    //showAlert

    showAlertMessage(message,className){
        alert('wrong input')
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message))
        //const displayResults = this.diplay;
        const mainContainer = document.querySelector('.mainContainer');
        const secondContainer = document.querySelector('.secondContainer');

        mainContainer.insertBefore(div,secondContainer);
       
        setTimeout(() => {
            document.querySelector('.alert').remove();
           }, 2000);
        

    }
    //clear showAlert

    
 }