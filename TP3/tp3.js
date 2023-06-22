// modification du TP précédent en créant une classe SavoirInutile
class SavoirInutile {
    constructor(formId, listId) {
        this.form = document.getElementById(formId);
        this.list = document.getElementById(listId);
        this.initializeForm();
        this.selectOrder();
    }

    initializeForm() {
        this.form.date.valueAsDate = new Date();
        this.form.author.focus();

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.createListItem();
        });
    }

    createListItem() {
        const li = document.createElement("li");
        const text = document.createElement("div");
        const details = document.createElement("div");

        text.innerText = this.form.text.value;
        details.innerText = this.form.author.value + " " + this.form.date.valueAsDate;

        li.appendChild(text);
        li.appendChild(details);
        this.list.appendChild(li);

        li.addEventListener("click", (e) => {
            const text = e.currentTarget.children[0].innerText;
            if (confirm("Voulez-vous supprimer " + text + "?")) {
                e.currentTarget.parentNode.removeChild(e.currentTarget);
            }
        });

    }

     selectOrder(){
         const tableauSavoirInutile = []; // Déplacez la déclaration du tableau ici pour qu'il soit accessible dans toute la méthode.
         const selecteur = document.getElementById("selectOrder");

             selecteur.addEventListener("change", (event) => {

                 if (event.target.value === "alphabétique") {

                     const compareNoms = (a, b) => {
                        const  nomA = a.auteur.toLowerCase();
                        const  nomB = b.auteur.toLowerCase();
                        if (nomA< nomB){return -1};
                        if (nomA > nomB){return 1};
                        return 0;
                    }
                    tableauSavoirInutile.sort(compareNoms);

                    console.log(tableauSavoirInutile);


                 } else {
                    const compareDates = (a ,b) => {
                        const dateA = new Date(a.date).getTime();
                        const dateB = new Date(b.date).getTime();
                        if(dateA > dateB){return -1}
                        if (dateA < dateB){return 1}

                        return 0
                    }
                     tableauSavoirInutile.sort(compareDates);
                     console.log(tableauSavoirInutile);

                 }
             });

             this.form.addEventListener("submit", (e) => {
                 e.preventDefault();
                 const objetSavoirInutile = {
                     date: this.form.date.value,
                     auteur: this.form.author.value,
                     savoir: this.form.text.value
                 };
                 tableauSavoirInutile.push(objetSavoirInutile);
                 console.log(tableauSavoirInutile);
             });
         }
}
// Utilisation de la classe SavoirInutile
const savoirInutile = new SavoirInutile("form", "list");


