// Exmeple 1 : les caractères et strings
// programme principal
try {
  var phrase = "une phrase avec des consonnes et des voyelles";
  var compteurvoyelles = 0;
  var nombreA = 0;
  var nombreE = 0;

  for (let lettre of phrase) {
    // avec let la portée de la variable est limitée à son bloc de code soit le bloc for
    if (estVoyelle(lettre));
    console.log("La voyelle '%s' est présente ", lettre);
    compteurvoyelles++;
    switch (lettre) {
      case "a":
        nombreA++;
        break;

      case "e":
        nombreE++;
        break;
    }
  }

  console.log("il y a %i voyelles", compteurvoyelles);
  console.log("il y a %i a", nombreA);
  console.log("il y %i e", nombreE);
  console.log(
    "il y a %i consonne",
    phrase.replace(/ /g, "").length - compteurvoyelles
  );

  console.log(uneErreurGrossiere);
} catch (e) {
  console.error("une erreure est survenue : " + e);
}

function estVoyelle(lettre) {
  if (lettre != undefined && "aeiouy".indexOf(lettre) < 0) {
    return true;
  }
  return false;
}


// exmple 2 : Les nombres réels et entiers 
// programme principal

var nombreReal = Math.random()*100;
console.log(nombreReal)

// avoir une valeur entière a partir du nombre réel

var nombreEntier  = parseInt(nombreReal);
console.log(nombreEntier);

// Exmple 3  : Les dates
// programme principal

var noel2023 = new Date(2023,11,25);
console.log(noel2023);
console.log(noel2023.toLocaleDateString());
console.log(noel2023.getDate());
console.log(noel2023.getMonth()+1);
console.log(noel2023.getFullYear());