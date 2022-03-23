//Mettre le code JavaScript lié à la page photographer.html

const PHOTOGRAPHERS = 1; 
const MEDIA = 2;

// json data recovery
async function getData(requested) {
    let response = await fetch("./data/photographers.json");
    let json = await response.json();

    if(requested === PHOTOGRAPHERS) {
        return json.photographers;
    }

    if(requested === MEDIA) {
        return json.media;
    }
};

async function init() {
    const photographers = await getData(PHOTOGRAPHERS);
   // const media = await getData(MEDIA); Affiche les médias
    // console.log(photographers);

    /* for (const photographer of photographers) {
        displayPhotographer(photographer)
    }
     */
    
    //Appeler displayphotographer avec photographer en paramètre

    // Récupère le lien et effectuer une recherche dessus. 
    let params = new URLSearchParams(document.location.search);
    // Récupère l'id 
    let id = params.get("id"); 
    // Parcours les photographe avec leur id
    const photograher = photographers.find(p => p.id == id); 
   
    displayPhotographer(photograher);
  

};


init();

function displayPhotographer(photographer) {
    console.log(photographer);
    let photographHeader = document.querySelector(".photograph-header");
    let profilImg = document.querySelector(".profil-img");

   
    profilImg.setAttribute("src", `./assets/photographers/MimiKeel.jpg`);
    profilImg.setAttribute("alt", `Photo profil`);
  
}