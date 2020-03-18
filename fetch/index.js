const content = document.getElementById("content");
const button = document .createElement("button");

const reload = () => {

    fetch("https://catfact.ninja/fact")
        .then(res => res.json())
        .then(json => {

            console.log(json.fact);
            let catfact  = json.fact;
            content.innerHTML = catfact;

            button.innerHTML = "Reload";
            
            //button.onclick = reload();

            //body.append(button);


        })
        .catch(error => {
            // code Fehlerbehebung
        })
    }

    reload();