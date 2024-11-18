//# FUNZIONE NAME IMPORTATA

const fullName = require("./names");

const personName = fullName("Giorgia", "Secchi");

// console.log(personName);

//# FUNZIONE HOBBY IMPORTATA

const hobbies = require("./hobbies");

const personHobbies = hobbies("chitarra", "ceramica", "storia");

// console.log(personHobbies);

//************************************************************* */

//# NUOVA FUNZIONE CON NAME E HOBBY

const people = () => {
  const peopleObj = {
    firstName: personName.firstName,
    lastName: personName.lastName,
    hobbies: personHobbies.hobbies,
  };

  return peopleObj;
};

console.log(people());
