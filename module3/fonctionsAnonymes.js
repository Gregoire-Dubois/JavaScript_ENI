// fonction anonyme dans une variable

let fonctionAnonyme = function (){
    console.log("bonjour");
}

fonctionAnonyme();

let fonctionAnonymeAvecParametre = function (param){
    console.log(param)
}

fonctionAnonymeAvecParametre("coucou");

// fonction anonyme auto appelée
(
    function ()
    {
        console.log("fonction anonyme auto appelée");
    }
)();

(
    function (param)
    {
        console.log(param)
    }
)("Au revoir");

/*
La fonction anonyme va etre utilisée pour gérer les conflits de librairies
 */