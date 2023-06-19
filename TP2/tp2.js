function enregistrer()
{
    var nom = document.getElementById("auteur");
    var savoir = document.getElementById("savoir");
    var date = document.getElementById("datePublication");

    var tableauSaisies =[];

    var rstHtml = `<p>savoir : ${savoir.value}</p> 
                          <p>nom : ${nom.value}</p> 
                          <p>date : ${date.value}</p>`
    document.getElementById('resultat').innerHTML = rstHtml;
    return rstHtml;

}



