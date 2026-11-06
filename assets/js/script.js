const inputTache = document.getElementById("saisie-tache");
const boutonTache = document.querySelector(".icone-ajout");
const boutonSup = document.querySelector(".icone-trash");
const liste = document.querySelector(".liste-afaire");
const select = document.querySelectorAll(".liste-afaire");
const listeComplete = document.querySelector(".liste-fait");

var i = 1;
var fait = document.getElementsByClassName("fait");

if (localStorage.getItem(i) != null) {
    console.log("Donnee presente dans le stockage");
    
    let newTask = document.createElement("li");
    console.log("Ajout d'une tâche");
    newTask.classList.add("tache");
    newTask.innerText = localStorage.getItem(1);
    console.log(newTask);
    newTask.addEventListener("click", (e) => {
            e.target.classList.add("fait");
            console.log("tache termine");
            listeComplete.append(e.target);
    
  })
  liste.append(newTask);
  i++;
  
  console.log("Donnee presente dans le stockage");
    
    let newTask2 = document.createElement("li");
    console.log("Ajout d'une tâche");
    newTask2.classList.add("tache");
    newTask2.innerText = localStorage.getItem(2);
    console.log(newTask2);
    newTask.addEventListener("click", (e) => {
            e.target.classList.add("fait");
            console.log("tache termine");
            listeComplete.append(e.target);
    
  })
  liste.append(newTask2);
  i++;

}

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
    let newTask = document.createElement("li");
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
    Save(newTask, i);
    i++;
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



function Save(e, i) {
    console.log(e.innerText);

    localStorage.setItem(i, e.innerText);
}