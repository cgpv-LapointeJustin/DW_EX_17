const inputTache = document.getElementById("saisie-tache");
const liste = document.querySelector(".liste-afaire");
const select = document.querySelectorAll("liste liste-afaire");
const listeComplete = document.querySelector(".liste-fait");

//const liste = document.getEle
var newTask = document.createElement("li");
var fait = document.getElementsByClassName("fait");
var endTask = document.createElement("li");

var nbTache = 0;


inputTache.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        AjouterTache(); 
        
        console.log(nbTache);
    }
});



function AjouterTache() {
    console.log("Ajout d'une tâche");
    newTask.classList.add("tache");
    newTask.innerText = inputTache.value;
    console.log(newTask);
    liste.append(newTask);
    newTask = document.createElement("li");
    var termine = document.querySelectorAll(".tache")
    
    termine.forEach((element, i) => {
        element.addEventListener("click", function() {
            termine[i].classList.add("fait");
            console.log("tache termine");

            endTask.classList.add("tache");
            endTask.innerText = termine[i].innerText;
            console.log(endTask);
            listeComplete.append(endTask);
            endTask = document.createElement("li");
        })
    })

}

function RetirerTache(element) {
    console.log("retrait d'une tache");
    console.log(element);
    element.classList.add("fait");

}
