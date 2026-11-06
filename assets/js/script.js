const inputTache = document.getElementById("saisie-tache");
const boutonTache = document.querySelector(".icone-ajout");
const boutonSup = document.querySelector(".icone-trash");
const liste = document.querySelector(".liste-afaire");
const select = document.querySelectorAll(".liste-afaire");
const listeComplete = document.querySelector(".liste-fait");



var fait = document.getElementsByClassName("fait");


inputTache.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        AjouterTache(); 
    }
});

boutonTache.addEventListener("click", function() {
        AjouterTache();
});

boutonSup.addEventListener("click", function() {
        Delete();
});

function AjouterTache() {
    var newTask = document.createElement("li");
    console.log("Ajout d'une tâche");
    newTask.classList.add("tache");
    newTask.innerText = inputTache.value;
    console.log(newTask);
    newTask.addEventListener("click", (e) => {
            e.target.classList.add("fait");
            console.log("tache termine");
            listeComplete.append(e.target);

    })
    liste.append(newTask);
 }
    

function RetirerTache() {
    console.log("retrait d'une tache");
    console.log(element);
    element.classList.add("fait");

}


function Delete() {
    listeComplete.replaceChildren();
    liste.replaceChildren();
};

