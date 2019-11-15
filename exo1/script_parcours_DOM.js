$(document).ready(function() {
  // Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
  console.log("Number of <p> elements : "+document.getElementsByTagName('p').length);

  //Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console
  console.log("Content of the div with id 'coucou' : "+document.getElementById("coucou").textContent);

  //Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
  console.log("The third <a> element of the page link is: "+document.getElementsByTagName('p'));

  //Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
  console.log("There are " + document.getElementsByClassName("compte-moi").length + " elements with class 'compte-moi'");

  //Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
  console.log("There are "+ document.querySelectorAll('li.compte-moi').length + " elements with tag <li> and class 'compte-moi'");

  //Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
  console.log("There are "+ document.querySelectorAll("ul.li, li.compte-moi").length + " elements with tag <li> inside a <ul> and class 'compte-moi'");

  //Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…

  console.log(document.getElementsByTagName("div")[0].getElementsByTagName("ul")[1].getElementsByTagName("li")[0].textContent);

});
/*

<div>
  <ul> 
  <ul>
    <li>
Question 5 :
Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.

Question 6 :
Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.

Question 7 :
Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…

La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. 
Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur 
mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.
*/