// fonction qui déclenche un traitement asynchrone

function enregistrement(data, callback){
    console.log("J'enregistre des inforamtion, ça peut prendre du temps");
    setTimeout(function (){callback("Succes de la sauvegarde")},1000);

}

// Fonction appelée lorsque le traitement asynchrone est terminé

function afficherResultat(message){
    if (message)console.log("Message : %s", message);
    else console.log("Aucun message");
}

enregistrement("mes datas", afficherResultat);
console.log("pendant ce temps la vie continue...");