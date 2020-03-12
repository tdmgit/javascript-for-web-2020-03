const posts = [
  {
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
      number: 001
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
      number: 002
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
      number: 003
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
      number: 004
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
      number: 005
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
      number: 006
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
      number: 007
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
    number: 007
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
    number: 007
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
    number: 007
  }
];

const createPostHtml = post =>
  `<img class="w-full" src="${post.image.src}" alt="${post.image.alt}">
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

for (let i = 0; i < posts.length; i++) {
  const div = document.createElement("div");
  addClasses(div);
  div.innerHTML = createPostHtml(posts[i]);
  content.append(div);
}
