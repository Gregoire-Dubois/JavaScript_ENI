const form = document.getElementById("form");
const list = document.getElementById("list")

form.date.valueAsDate = new Date();
form.author.focus();

form.addEventListener("submit", function (e){
    e.preventDefault();

    /*
    Créer les conteneurs pour le HTML et afficher la liste
     */
    const li = document.createElement("li");
    const text = document.createElement("div");
    const details = document.createElement("div");

    /*
    Affecter la valeur du formulaire aux variables
     */
    text.innerText = form.text.value;
    details.innerText = form.author.value + " " + form.date.valueAsDate;

    /*
    Attacher les valeurs récupérées dans l'objet enfant
     */
    li.appendChild(text);
    li.appendChild(details);
    list.appendChild(li);

    li.addEventListener("click", function (e){
        console.log(e.currentTarget);
        /*
        dans le lli on récupère le 1er enfant
         */
        const  text  = e.currentTarget.children[0].innerText
        confirm("Voulez vous supprimer " + text);

        /*
        si la persnne valide
         */
        /*
        On récupère le parent pour supprimer l'enfant
         */
        e.currentTarget.parentNode.removeChild(e.currentTarget);



    });

});
