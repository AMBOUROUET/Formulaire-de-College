// Stocker en fonction du genre dans un tableau les donnes du formulaires

var femmes = []; // tableau qui stock le genre feminin
var hommes = []; // tableau qui stock le genre masculin

function soumission() {
  event.preventDefault();
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var profession = document.getElementById("profession").value;
  var domicile = document.getElementById("domicile").value;
  var genre = document.getElementById("genre").value;

  // declare l'objet personne
  const personne = {
    prenom: prenom,
    profession: profession,
    genre: genre,
  };

  // inscription des femmes
  if (genre == "femme") {
    if (femmes.length == 100000) {
      document.getElementById("error").style.display = "block";
      document.getElementById("error").innerHTML =
        "On affiche complet pour les femmes";

      setTimeout(() => {
        document.getElementById("error").style.display = "none";
      }, 5000);
    } else {
      femmes.push(personne);
      var tableauFemme = document.getElementById("femme");
      tableauFemme.innerHTML += `
            <tr>
                <td>${nom}</td>
                <td>${prenom}</td>
                <td>${profession} ans</td>
                <td>${domicile}</td>
                <td>${genre}</td>                
            </tr>`;
      document.getElementById("reset").click();
    }
  } else {
    if (hommes.length == 100000) {
      document.getElementById("error").style.display = "block";
      document.getElementById("error").innerHTML =
        "On affiche complet pour les Hommes";
      document.getElementById("reset").click();
    } else {
      hommes.push(personne);
      var tableauHomme = document.getElementById("homme");
      tableauHomme.innerHTML += `
            <tr>
            <td>${nom}</td>
            <td>${prenom}</td>
            <td>${profession} ans</td>
            <td>${domicile}</td>
            <td>${genre}</td>
            </tr>`;
      document.getElementById("reset").click();
    }
  }
}

var monPremierTableau = ["item1", 2, 3, true, "dernier item"];
undefined;

monPremierTableau;
["item1", 2, 3, true, "dernier item"];

var monDeuxiemeTableau = ["premier", "deuxième", "troisième"];
undefined;

monDeuxiemeTableau;
["premier", "deuxième", "troisième"];

monDeuxiemeTableau[0];
("premier");

monDeuxiemeTableau[1];
("deuxième");

monDeuxiemeTableau[2];
("troisième");

var tableauTrois = [];
undefined;

var tableauQuatre = new Array();
undefined;
