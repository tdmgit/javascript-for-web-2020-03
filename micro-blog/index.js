var post = {
  title: "Hello",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  image: {
    src: "img/card-top.jpg",
    alt: "Sunset in the mountains"
  },
  author: "Teresa Holfeld",
  author_image: "img/jonathan.jpg",
  date: "Jan 18, 2020",
  number: 1
}

// JSON: stringify and parse
var stringified = JSON.stringify(post.image);
console.log(stringified);
var parsed = JSON.parse(stringified);
console.log(parsed);

// Get elements in the DOM
var content = document.getElementById("content");
console.log(content);

var listOfElements = document.getElementsByClassName("mx-auto");
console.log(listOfElements); // Array
var element = listOfElements[1]; // get element at index 1
console.log(element); // element

// 1. Create new element
var newDiv = document.createElement("div");
console.log(newDiv);

newDiv.innerHTML = "<img class=\"w-10 h-10 rounded-full mr-4\" src=\"img/jonathan.jpg\" alt=\"Avatar of Jonathan Reinink\">";
// <div><img class="w-full" src="img/card-top.jpg" alt="Sunset in the mountains"></div>

var newP = document.createElement("p");
newDiv.append(newP);
// <div>...
//   <p></p>
// </div >

// TODO: Add all HTML elements so that there is a second blog post

// 2. Place the new element in the tree
content.append(newDiv);

// Add classes to newDiv
newDiv.classList.add("container", "mx-auto", "max-w-sm", "rounded", "overflow-hidden", "shadow-lg", "justify-center", "bg-white", "m-6");
