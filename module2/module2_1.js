console.log("la page est affichée");

function chargerContenu()
{
    console.log("la fonction charger contenu est exécutée");
    document.title = "Mon titre sur l'onglet";

    //document.getElementsByTagName("h1")[0].innerText="Ceci est mon vrai titre" // technique a éviter et utiliser par exemple un ID;
    document.getElementById("titre").innerText=("Ceci est vraiment le bon titre");

    var elImput = document.createElement("input");

    /*1ere façon de faire
    var attValue = document.createAttribute("value");
    attValue.value = "une zone de saisie";
    elImput.setAttributeNode(attValue);
     */

    /*afterend est une chaine de caractères qui a ' valeur possibles :
    - afterend
    - beforbegin
    - afterbegin premeier enfant
    - beforend dernier élement enfant
     */

    // 2nde façon de faire

    elImput.setAttribute("value", "une zone de saisie")
    document.getElementById("titre").insertAdjacentElement("afterend", elImput)



}