// modification du TP précédent en créant une classe SavoirInutile
class SavoirInutile {
    constructor(formId, listId) {
        this.form = document.getElementById(formId);
        this.list = document.getElementById(listId);
        this.initializeForm();
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
        details.innerText =
            this.form.author.value + " " + this.form.date.valueAsDate;

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
}

// Utilisation de la classe SavoirInutile
const savoirInutile = new SavoirInutile("form", "list");