//#1
let prenom = prompt("Quel est votre prénom?");
console.log("Bonjour " + prenom);

//#2
let age = prompt("Quel est ton age?", "Age");
console.log("Tu as " + age +"ans");

//#3 
let Prenom = prompt("Quel est ton prénom?");
let Nom = prompt("Quel est ton nom de famille?");
let fullName = Prenom + " " + Nom
console.log(fullName);

//#4
let Prenom1 = prompt("Quel est ton prénom?");
let Nom1 = prompt("Quel est ton nom de famille?");

Nom1 = Nom1.toUpperCase()
let fullName1 = Nom1+ " " + Prenom1
console.log(fullName1);