let posts = [
  {
    title: "In The Mountains",
    image: "img/card-top.jpg",
    image_alt: "Sunset in the mountains",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    author: "Firstname Lastname",
    author_image: "img/jonathan.jpg",
    date: "Jan 18, 2020",
    number: 1
  },
  {
    title: "The Crowded City",
    image: "img/barcelona.jpeg",
    image_alt: "Barcelona",
    text:
      "Barcelona is a very busy city. It is full of tourists, attractions and centuries old buildings. Very beautiful, really.",
    author: "Firstname Lastname",
    author_image: "img/jonathan.jpg",
    date: "Feb 28, 2020",
    number: 2
  }
];

let template = post =>
  `<img class="w-full" src="${post.image}" alt="${post.image_alt}">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">${post.title}</div>
    <p class="text-gray-700 text-base"> 
    ${post.text}
    </p>
  </div>
  <div class="px-6 py-4 flex items-center">
    <img class="w-10 h-10 rounded-full mr-4" src="img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
    <div class="text-sm">
      <p class="text-gray-900 leading-none">Firstname Lastname</p>
      <p class="text-gray-600">${post.date}</p>
    </div>
  </div>`;

let content = document.getElementById("content");

for (let i = 0; i < posts.length; i++) {
  let post = posts[i];
  let div = document.createElement("div");
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
  div.innerHTML = template(post);
  content.append(div);
}

