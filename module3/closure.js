// mise en place du pattern factory

let librairie = (
    function (){
        let librairie  = {};
        librairie.enregistrer = function (cible){
            if (cible.toLowerCase()=== "mémoire"){
                return function (data){console.log("j'enregistre les datas '%s' en mémoire", data)};
            }
            else if (cible.toLowerCase()=== "stockagelocal"){
                return function (data){console.log("j'enregistre les datas '%s' en stockage local", data)};
            }

            else if (cible.toLowerCase()=== "rest"){
                return function (data){console.log("j'enregistre les datas '%s' avec l'api rest", data)};
            }
        }
        return librairie;
    }
)();

let enregistrerData = librairie.enregistrer("mémoire");
enregistrerData("Bonjour tout le monde");