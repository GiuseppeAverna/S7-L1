class User {
  constructor(_firstName, _lastName, _age, _location) {
    (this.firstName = _firstName),
      (this.lastName = _lastName),
      (this.age = _age),
      (this._location = _location);
  }
  comparison(x, y) {
    if (x < y) {
      console.log(`${x} è più giovane di ${y}`);
    } else console.log(`${x} è più vecchoi di ${y}`);
  }
}

const object1 = new User("Jojo", "Joestar", "27", "Tornino");
console.log(object1);

const object2 = new User("Jampierre", "Polnareff", "26", "Parigi");

// console.log(comparison(object1.age, object2.age));

const obj1prop = object1.age;
console.log(obj1prop);
const obj2prop = object2.age;
console.log(obj2prop);

//Esercizio 2

const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const BreedInput = document.getElementById("Breed");
const SpeciesInput = document.getElementById("Species");

const saveButton = document.getElementById("button");

const animals = [];
class Animal {
  constructor(_petName, _ownerName, _Breed, _Species) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.Breed = _Breed;
    this.Species = _Species;
  }
}

const animalForm = document.getElementsByTagName("form")[0];

animalForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const animal = new Animal(
    petNameInput.value,
    ownerNameInput.value,
    BreedInput.value,
    SpeciesInput.value
  );
  console.log(animal);
  animals.push(animal);
});
