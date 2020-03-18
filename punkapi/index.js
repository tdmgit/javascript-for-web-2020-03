const content = document.getElementById("content");

const createBeerHtml = beer =>
  `<div class="container mx-auto max-w-md rounded overflow-hidden shadow-lg justify-center bg-white m-6">
    <div class="max-w-md w-full lg:max-w-full lg:flex ">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img class="p-4" src="${beer.image_url ? beer.image_url : "dummy.png"}" alt="">
        </div>
        <div class=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">${beer.tagline}</p>
                <div class="text-gray-900 font-bold text-xl mb-2">${beer.name}</div>
                <p class="text-gray-700 text-base">${beer.description}</p>
                <p class="text-gray-700 text-base">${beer.tagline}</p>
            </div>
        </div>
    </div>
  </div>`;

const reload = () => {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then(res => res.json())
    .then(json => {
      
      // code
      console.log(json);
      const beer = json[0];
      const beerName = beer.name;
      const beerTagline = beer.tagline;
      const beerImageUrl = beer.image_url;
      
      console.log("Name: " + beer.name + " Tagline: " + beer.tagline) + beer.yeast;

      const div = document.createElement("div");
      div.innerHTML = createBeerHtml(beer);
      content.append(div.firstChild);

    })
    .catch(error => {
      // error handling
      console.error(error);
    })
}

reload();

/*
Aufgabe 1:
fetch(): hol dir ein random beer und gebe es mit console.log() aus

Aufgabe 2:
- <h1> für name
- <p> für tagline
- <button> zum reloaden

Aufgabe 3:
- eine Karte anzeigen ähnlich wie im Micro Blog
- von der API holen und die Karte füllen:
- Bild: image_url
- falls kein Bild vorhanden: ${beer.image_url ? beer.image_url : dummy.png }
- Title: name
- Text: Tagline
- Text: Description

*/