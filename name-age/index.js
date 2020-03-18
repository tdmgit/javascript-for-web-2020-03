const entries = [
    {
        name: "Peter",
        age: 15,
    },
    {
        name: "Bob",
        age: 14,
    },
    {
        name: "Mathilda",
        age: 73,
    },
    {
        name: "Justus",
        age: 16,
    },
    {
        name: "Titus",
        age: 66,
    },
    {
        name: "Reynolds",
        age: 62,
    },
]

// HTML-Template für die Einträge:
const createPostHtml = entry =>
  `<div class="container mx-auto max-w-sm rounded overflow-hidden shadow-lg justify-center bg-white m-6">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${entry.name}</div>
    </div>
  </div>`;

const content = document.getElementById("content");

for (let i = 0; i < entries.length; i++) {
    // leeres DiV erstellen:
    const div = document.createElement("div");
  
    // das leere DIV wird gefüllt:
    div.innerHTML = createPostHtml(entries[i]);

    if (entries[i].age < 60) {
        div.firstChild.classList.add("bg-green-400") 
    } else {
       div.firstChild.classList.add("bg-red-500")
    }
  
    // das erste child element nehmen und appenden:
    content.append(div.firstChild);
    // das äußere DIV Element wird nicht berücksichtigt
  }

