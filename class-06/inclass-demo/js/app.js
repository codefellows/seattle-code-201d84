'use strict';

// Jose is a volunteer for the kitten rescue... they need a way to get the profiles of kittens who will be up for adoption onto the page... new kittens come in and they need to be added. Jose knows a little bit of javascript... he can make objects!

// what are we going to display?
// Kittens
// figure out what info about each kitten we need to show:
// name
// age with a function - 3 and 12 months
// interests []
// isGoodWithCats
// isGoodWithDogs
// isGoodWithKids
// photo

// STEP 1: WINDOW INTO THE DOM
// 1 way - document.getElementById = method that will take a string for ID
// 2nd way - document.querySelector - method that takes in a string of either an ID, Class, or element type

let kittenSection = document.getElementById('kitten-profiles');


// *** HELPER FUNCTION THAT WILL GENERATE A RANDOM AGE ***
function randomAge(min, max){
  // grabbed from MDN documentation
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ****** OBJECT LITERALS ******

let frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['wet food', 'fish toy', 'cat nip'],
  isGoodWithCats: true,
  isGoodWithDogs: false,
  isGoodWithKids: true,
  photo: 'img/frankie.jpeg',
  getAge: function(){
    //frankie.age
    this.age = `${randomAge(3,12)} months`
  },

  // ***** DOM MANIPULATION *****
  // kitties will render themselves and add their info via render method.
  render: function(){
    // STEP 2 Create the element then give it context if needed
    let articleElem = document.createElement('article');
    // STEP 4 - append it to the DOM.
    kittenSection.appendChild(articleElem);

    // creating an html element
    let h2Elem = document.createElement('h2');
    // giving context
    h2Elem.innerText = this.name;
    // add to the dom
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name} is adorable and is ${this.age} old`;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.interests.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is adorable and is ${this.age} old`
    articleElem.appendChild(imgElem);

  }
}
// this will populate the age of the cat
frankie.getAge();
// this will have the cat render all the HTML to the page
frankie.render();


let jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['dry food', 'crinkle toy', 'treats'],
  isGoodWithCats: true,
  isGoodWithDogs: false,
  isGoodWithKids: false,
  photo: 'img/jumper.jpeg',
  getAge: function(){
    //jumper.age
    this.age = `${randomAge(3,12)} months`
  },
  render: function(){
    // STEP 2 Create the element
    let articleElem = document.createElement('article');
    // STEP 4 - append it to the DOM.
    kittenSection.appendChild(articleElem);

    // creating an html element
    let h2Elem = document.createElement('h2');
    // giving context
    h2Elem.innerText = this.name;
    // add to the dom
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name} is adorable and is ${this.age} old`;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.interests.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is adorable and is ${this.age} old`
    articleElem.appendChild(imgElem);

  }
}
// this will populate the age of the cat
jumper.getAge();
// this will have the cat render all the HTML to the page
jumper.render();


let serena = {
  name: 'Serena',
  age: 0,
  interests: ['mice', 'lazers', 'scratching'],
  isGoodWithCats: false,
  isGoodWithDogs: true,
  isGoodWithKids: false,
  photo: 'img/serena.jpeg',
  getAge: function(){
    //serena.age
    this.age = `${randomAge(3,12)} months`
  },
  render: function(){
    // STEP 2 Create the element
    let articleElem = document.createElement('article');
    // STEP 4 - append it to the DOM.
    kittenSection.appendChild(articleElem);

    // creating an html element
    let h2Elem = document.createElement('h2');
    // giving context
    h2Elem.innerText = this.name;
    // add to the dom
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name} is adorable and is ${this.age} old`;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.interests.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is adorable and is ${this.age} old`
    articleElem.appendChild(imgElem);

  }
}
// this will populate the age of the cat
serena.getAge();
// this will have the cat render all the HTML to the page
serena.render();
