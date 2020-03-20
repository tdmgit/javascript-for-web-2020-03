const div = document.createElement("div");
const createWeatherHtml = weatherapi => `<div class="container mx-auto max-w-sm rounded overflow-hidden shadow-lg justify-center bg-white m-6">
    <img class="w-full" src="" alt="">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-center">${ weatherapi.name }</div>
      <p class="text-gray-700 text-base text-center"> 
      The current weather in Hamburg is <img style="margin: 0 auto" class="" src="https://openweathermap.org/img/wn/${ weatherapi.weather[0].icon }@2x.png" alt=""> <span class="rounded-full bg-indigo-100 px-2 py-1">${ weatherapi.weather[0].description }</span> with a temperature of <span class="rounded-full bg-gray-700 text-white px-2 py-1">${ weatherapi.main.temp.toFixed(0) }°C </span>. 
      </p>
    </div>
    <div class="px-6 py-4 flex items-center">
      <div class="text-sm">
        <p class="text-gray-900 leading-none"></p>
        <p class="text-gray-600"></p>
      </div>
    </div>
    <div class="px-6 py-2">
      <hr>
      <p class="text-gray-700 text-base py-2 text-right text-xs"></p>
    </div>
  </div>`;

fetch("https://api.openweathermap.org/data/2.5/weather?q=Hamburg&units=metric&appid=5aa80dd64429a526f1f80921fc784bb7")
    .then(res => res.json())
    .then(json => {
    
    // console.log(json);

    const weatherapi = json;

    div.innerHTML = createWeatherHtml(weatherapi);
    content.append(div.firstChild);

    })
    
    .catch(error => {
        // error handling
        console.error(error);
      });
