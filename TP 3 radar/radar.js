/*
il faut renvoyer à l'utilisateur ses stat d'écriture.

il faut surveilleur la text area et :
 - définir la vitesse générale d'écriture
        -> vitesse moyenne depuis que l'utilisateur a commencé à écrire
 - définir la vitesse du dernier intermédiaire
        -> vitesse d'écriture sur les 5 dernières secondes
 - actualiser les résultats à la fin de chque calcul
 */

class Radar {
    constructor(story) {
        this.textZone = document.getElementById(story);
        this.startTime = new Date();
        this.keypress = 0;
        this.inputUser();
    }

    inputUser() {
        this.textZone.addEventListener("keypress", (e) => {
            console.log(e.key);

            // date et heure de départ
            let dayNow = this.startTime.getDate();
            let monthNow = this.startTime.getMonth();
            let yearNow = this.startTime.getFullYear();
            let hourNow = this.startTime.getHours();
            let minutesNow = this.startTime.getMinutes();
            let secondesNow = this.startTime.getSeconds();

            let  instantStart= new Date(yearNow, monthNow, dayNow, hourNow, minutesNow, secondesNow);

            // date et heure à l'instant T
            let now = new Date();
            let day = now.getDate();
            let month = now.getMonth();
            let year = now.getFullYear();
            let hour = now.getHours();
            let minutes = now.getMinutes();
            let secondes = now.getSeconds();

            //console.log(day, month, year , hour, minutes, secondes);
            let instantNow = new Date(year, month, day, hour, minutes, secondes);

            // la différence entre de instantNow et instantStart est en millisecondes
            //convertir la différence entre instantNow - instantStart en secondes

            let timeToWrite = (instantNow - instantStart) / 1000;
            console.log("le timer est de : ", timeToWrite)

            // compter le nombre de pression réalisées sur le clavier
            this.keypress++;
            console.log(this.keypress);

            // diviser le nombre de pression clavier par le temps en secondes écoulées entre instantNow - instantStart
            let generalWriteSpeed =  this.keypress / timeToWrite;
            console.log("La vitesse moyenne de frappe est de : ", Math.round(generalWriteSpeed));

        });
    }
}

const radar = new Radar("story");
