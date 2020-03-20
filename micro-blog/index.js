const posts = [{
    title: "Karibik",
    text: "Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    image: {
      src: "img/karibik.jpg",
      alt: "Karibik"
    },
    author: "Thorben Dyk",
    author_image: "img/td.png",
    author_image_alt: "Avatar of Thorben Dyk",
    date: "Jan 18, 2020",
    location: {
      city: "Punta Cana",
      country: "Dominikanische Republik"
    },
    number: "001"
  },
  {
    title: "Die Brücke von Avignon",
    text: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    image: {
      src: "img/avignon.jpg",
      alt: "Die Brücke von Avignon"
    },
    author: "Thorben Dyk",
    author_image: "img/td.png",
    author_image_alt: "Avatar of Thorben Dyk",
    date: "March 11, 2020",
    location: {
      city: "Avignon",
      country: "France"
    },
    number: "002"
  },
  {
    title: "Trinken in Dublin",
    text: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    image: {
      src: "img/dublin.jpg",
      alt: "Die Brücke von Avignon"
    },
    author: "Thorben Dyk",
    author_image: "img/td.png",
    author_image_alt: "Avatar of Thorben Dyk",
    date: "March 11, 2020",
    location: {
      city: "Dublin",
      country: "Ireland"
    },
    number: "003"
  },
  {
    title: "An der Schlei",
    text: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    image: {
      src: "img/kappeln.jpg",
      alt: "Die Brücke von Avignon"
    },
    author: "Thorben Dyk",
    author_image: "img/td.png",
    author_image_alt: "Avatar of Thorben Dyk",
    date: "March 11, 2020",
    location: {
      city: "Kappeln",
      country: "Germany"
    },
    number: "004"
  },
  {
    title: "Coney Island",
    text: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    image: {
      src: "img/newyork.jpg",
      alt: "Die Brücke von Avignon"
    },
    author: "Thorben Dyk",
    author_image: "img/td.png",
    author_image_alt: "Avatar of Thorben Dyk",
    date: "March 11, 2020",
    location: {
      city: "New York",
      country: "USA"
    },
    number: "005"
  },
  {
    title: "Nordsee",
    text: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    image: {
      src: "img/nordsee.jpg",
      alt: "Die Brücke von Avignon"
    },
    author: "Thorben Dyk",
    author_image: "img/td.png",
    author_image_alt: "Avatar of Thorben Dyk",
    date: "March 11, 2020",
    location: {
      city: "Spiekeroog",
      country: "Germany"
    },
    number: "006"
  },
  {
    title: "In Südfrankreich in Orange",
    text: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    image: {
      src: "img/orange.jpg",
      alt: "Die Brücke von Avignon"
    },
    author: "Thorben Dyk",
    author_image: "img/td.png",
    author_image_alt: "Avatar of Thorben Dyk",
    date: "March 11, 2020",
    location: {
      city: "Orange",
      country: "France"
    },
    number: "007"
  },
  {
    title: "Ostsee",
    text: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    image: {
      src: "img/ostsee.jpg",
      alt: "Die Ostsee"
    },
    author: "Thorben Dyk",
    author_image: "img/td.png",
    author_image_alt: "Avatar of Thorben Dyk",
    date: "March 11, 2020",
    location: {
      city: "Pelzerhaken",
      country: "Germany"
    },
    number: "008"
  },
  {
    title: "Das Rote Meer",
    text: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    image: {
      src: "img/rotesmeer.jpg",
      alt: "Rotes Meer"
    },
    author: "Thorben Dyk",
    author_image: "img/td.png",
    author_image_alt: "Avatar of Thorben Dyk",
    date: "March 11, 2020",
    location: {
      city: "Sinai",
      country: "Egypt"
    },
    number: "009"
  },
  {
    title: "Auf Sylt",
    text: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    image: {
      src: "img/sylt.jpg",
      alt: "Blick von Sylt weg"
    },
    author: "Thorben Dyk",
    author_image: "img/td.png",
    author_image_alt: "Avatar of Thorben Dyk",
    date: "March 11, 2020",
    location: {
      city: "Sylt",
      country: "Germany"
    },
    number: "010"
  }
];

const createPostHtml = (post, weather) =>
  `<div class="container mx-auto max-w-sm rounded overflow-hidden shadow-lg justify-center bg-white m-6">
    <img class="w-full" src="${post.image.src}" alt="${post.image.alt}">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${post.title}</div>
      <p class="text-gray-700 text-base"> 
      ${post.text}
      </p>
    </div>
    <div class="px-6 py-4 flex items-center">
      <img class="w-10 h-10 rounded-full mr-4" src="${post.author_image}" alt="${post.author}">
      <div class="text-sm">
        <p class="text-gray-900 leading-none">${post.author}</p>
        <p class="text-gray-600">${post.date}</p>
      </div>
    </div>
    <div class="px-6 py-2">
      <hr>
      <p class="text-gray-700 text-base py-2 text-right text-xs">${post.location.city}, ${post.location.country}</p>
      <p class="text-gray-700 text-base py-2 text-right text-xs">Current Weather: <span id="weather"></span> <img class="weatherIcon" src=""> </p>
    </div>
  </div>`;

const addClasses = div =>
  div.classList.add(
    "container",
    "mx-auto",
    "max-w-sm",
    "rounded",
    "overflow-hidden",
    "shadow-lg",
    "justify-center",
    "bg-white",
    "m-6"
  );

const content = document.getElementById("content");

// Funktion fetch Weather from API
const fetchWeather = (span, city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5aa80dd64429a526f1f80921fc784bb7`)
    .then(res => res.json())
    .then(json => {

      const weather = json.weather[0].main;
      const weatherIcon = json.weather[0].icon;
      span.innerHTML = weather;
      // img.innerHTML = weatherIcon;

    })
    .catch(error => {
      // error handling
      console.error(error);
    })
}

for (let i = 0; i < posts.length; i++) {
  // leeres DiV erstellen:
  const div = document.createElement("div");

  // das leere DIV wird gefüllt:
  div.innerHTML = createPostHtml(posts[i]);

  // fetch Weather
  const weatherContainer = div.querySelector("#weather");
  // const weatherIcon = div.querySelector(".weatherIcon").src=`https://openweathermap.org/img/wn/${ json.weather[0].icon }@2x.png`;
  
  const cityName = posts[i].location.city;
  fetchWeather(weatherContainer, cityName);

  // das erste child element nehmen und appenden:
  content.append(div.firstChild);
  // das äußere DIV Element wird nicht berücksichtigt
};