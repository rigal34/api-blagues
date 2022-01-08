//https://api.blablagues.net/?rub=blagues
//LESSON API 35min 25s
const header = document.getElementById("header");
const content = document.getElementById("content");
console.log(header, content);

function getJoke(){


fetch("https://api.blablagues.net/?rub=blagues")  //va chercher

.then((res) =>res.json())                  //applique la méthode .json
.then((data) => {
    const bruno = data.data.content;
    console.log(bruno);
    header.textContent = bruno.text_head //j'inject à header.textContent le contenu de l'objet api = data.content.text_head////j'inject à content.textContent le contenu de l'objet api = data.content.text_head
    content.textContent = bruno.text!== "" ? bruno.text : bruno.text_hidden; //on teste  data.data.content.text s'il n'a pas un "" dans l'api c'est qu'il quelque chose dedans tu affiche"data.data.content.text "sinon tu affiche text hidden
       //si vrais affiche le texte et 
   //si faux affiche l'autre texte
});      
}

getJoke();

document.body.addEventListener("click",  getJoke); //lessons les api 45min 27s


//il y a du destructuring