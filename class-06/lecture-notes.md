# Class 06 Lecture Notes

## Objects

### What are they?

- data type // data structure
- Comma separated key/value pairs - wrap in curly brackets
- Like arrays group data or functions
  - In objects functions are referred to as methods.

```js
let personArray = ['Audrey', true, 35, 'Instructor'];

let audrey = {
  name: 'Audrey',
  age: 35,
  isRemote: true,
  title: 'Instructor'
};
```

### JS Built in Objects

- Array, String, Document, Math

## DOM Manipulation

### The DOM

"The DOM" (Document Object Model) is where the HTML and CSS that we have been learning about this whole time come together to create a very powerful document that we use in our browsers. Within our browser, when looking at a webpage, we see HTML and CSS come together to create a structure that we can in turn see headings, images, links etc....

Browsers represent the html document as a JS object. This means that we can access individual components of "The DOM" the same way we would access individual components of a JS object.

### Steps for DOM manipulation in JS

```javascript
// Grab window into the DOM
// there should be a section in your HTML with and ID of my-section
let section = document.getElementById('my-section');

// Step 2 create an element:
const h2Elem = document.createElement('h2');

// Step 3 give it context if necessary
h2Elem.textContent = 'Hey! I\'m an H2!';

// Step 4 add it to the DOM
section.appendChild(h2Elem);
// the section is the parent element that we will be appending the child element to
```

## CONST vs LET

### const

- A way to declare a constant variable - a variable you don't ever plan on changing the **value** of

`const userName = 'Bob';`

`userName = 'Sally';` - you can't reassign a const variable

arrays and objects differ slightly

`const myArray = [];` - I can add to the inside of the this array and that is allowed

`myArray.push('apple');` - this is allowed

`myArray = apple;` - this is NOT allowed

### Why use const?

- This prevents errors and tells a better story with our code
