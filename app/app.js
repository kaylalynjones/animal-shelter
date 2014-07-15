/* global prompt:true */
var prompt = require('sync-prompt').prompt;

var dogs = [];
var cats = [];
var horses = [];
//people-------------------------------
var people = [];
var person1 = {name:'Bob', age: 10, pets:[]};
var person2 = {name:'Sam', age: 5, pets:[]};
var person3 = {name:'Jill', age: 7, pets:[]};

people.push(person1, person2, person3);
//-------------------------------------

var option = prompt('Create an animal Y/N');

while (option.toLowerCase() !== 'n'){
var animal = prompt('Create a (D)og, (C)at, or (H)orse ?');

  switch(animal.toLowerCase()){
    case 'd':
      var name = prompt('Name: ');
      var personality = prompt('Personality: ');
      var breed = prompt('Breed: ');
      var dog = {name:name, personality:personality, breed:breed};
      dogs.push(dog);
      break;
    case 'c':
      var name = prompt('Name: ');
      var age = prompt('Age: ');
      var gender = prompt('Gender: ');
      var cat = {name:name, age:age, gender:gender};
      cats.push(cat);
      break;
    case 'h':
      var name = prompt('Name: ');
      var color = prompt('Color: ');
      var purpose = prompt('Purpose: ');
      var horse = {name:name, color:color, purpose:purpose};
      horses.push(horse);
      break;
  }

  option = prompt('Create an animal Y/N');
}

//this person will adopt an animal
var nameOfAdopter = prompt('Are you (B)ob, (S)am, (J)ill? or (Q)uit: ');

while (nameOfAdopter !== 'q'){
  //someone typed a j --- for jill
  //find that person in the array of people
  //console.log it out

  var client;
  for (var i = 0; i < people.length; i++){
    console.log(people[i].name[0].toLowerCase() +' === ' + nameOfAdopter.toLowerCase());
    if (people[i].name[0].toLowerCase() === nameOfAdopter.toLowerCase()) {
      client = people[i];
      break;
    }
  }

  console.log('Client: ' + client.name);
  var animals;
  var choice = prompt('What type of Pet? (D)og, (C)at, (H)orse: ');
  choice = choice.toLowerCase();
  switch(choice) {
    case 'd':
      console.log('Dogs: ', dogs);
      animals = dogs;
      break;
    case 'c':
      console.log('Cats ', cats);
      animals = cats;
      break;
    case 'h':
      console.log('Horses: ', horses);
      animals = horses;
      break;
  }
  
  name = prompt('What is the name of the animal you want to adopt?');
  for (i = 0; i < animals.length; i++){
    if ( animals[i].name === name){
      animal = animals[i];
      var index = i;
      break;
    }
  }
  console.log('Animal: ', animal);
  animals.splice(index, 1);
  client.pets.push(animal);
  console.log('After adoption: ', client);
  console.log('Animals array: ', animals);


  nameOfAdopter = prompt('Are you (B)ob, (S)am, (J)ill? or (Q)uit: ');
}


