// propose une lib qui contient une fonction de traitement

let librairieD =
    (
        function () {
            let librairieD = {};
            librairieC.traitement = function () {
                document.write("La librairie D fait le traitement demandé");
            }
            return librairieD;
        }
    )();