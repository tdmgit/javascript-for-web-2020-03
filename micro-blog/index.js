let post = {
  title: "In The Mountains",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  image: {
    src: "img/card-top.jpg",
    alt: "Sunset in the mountains"
  },
  author: "Firstname Lastname",
  author_image: "img/jonathan.jpg",
  date: "Jan 18, 2020",
  number: 1
};
console.log(post);

// JSON: stringify and parse
var stringified = JSON.stringify(post.image);
console.log(stringified);
var parsed = JSON.parse(stringified);
console.log(parsed);

// Get elements in the DOM
var content = document.getElementById("content");
console.log(content);

// 1. Create new element
let div = document.createElement("div");
console.log(div);

// Add classes to newDiv
div.classList.add("container", "mx-auto", "max-w-sm", "rounded", "overflow-hidden", "shadow-lg", "justify-center", "bg-white", "m-6");
div.innerHTML = "<img class=\"w-full\" src=\"img/barcelona.jpeg\" alt=\"Barcelona\">"
+ "<div class=\"px-6 py-4\">"
+ "<div class=\"font-bold text-xl mb-2\">The Crowded City</div>"
+ "<p class=\"text-gray-700 text-base\">"
+ "   Barcelona is a very busy city. It is full of tourists, attractions and centuries old buildings."
+ "</p>"
+ "</div>"
+ "<div class=\"px-6 py-4 flex items-center\">"
+ "<img class=\"w-10 h-10 rounded-full mr-4\" src=\"img/jonathan.jpg\" alt=\"Avatar of Jonathan Reinink\">"
+ "<div class=\"text-sm\">"
+ "<p class=\"text-gray-900 leading-none\">Firstname Lastname</p>"
+ "<p class=\"text-gray-600\">Feb 28, 2020</p>"
+ "</div>"
+ "</div>"

// 2. Place the new element in the tree
content.append(div);
