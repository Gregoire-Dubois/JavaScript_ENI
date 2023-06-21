// Méthode qui déclenche un traitement asynchrone

function enregistrer(data){
    return new Promise(function (resolve,reject){
        console.log("J'enregistre les informations '%s'", data);
        setTimeout( function (){
            if (Date.now().valueOf()%2==0){
                reject("rejeté"); // notifier l'appelant du résulat final
            }
            else {
                resolve("résolu"); // notifier l'appelant du résulat final
            }
        },1000)
    })
}

// méthode lorsque le traitement se termine avec succès
function afficherResultat(message){
    console.log("Succès " + message);
}

enregistrer("mes informations à enregistrer")
    .then(afficherResultat)// en cas de succès
    .catch((raison)=>{console.log("raison de l'échec :" + raison)})

// le résultat varie en fonction de :  if (Date.now().valueOf()%2==0){