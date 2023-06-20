// propose une lib qui contient une fonction de traitement

let librairieC =
    (
        function () {
            let librairieC = {};
            librairieC.traitement = function () {
                document.write("La librairie C fait le traitement demandé");
            }
            return librairieC;
        }
    )();