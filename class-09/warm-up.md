# Concept Review

Assume you are in a pair programming session, and are the navigator.  For each of the lines of code below, provide the (nerdy) english instructions that you would give to your partner (the driver) that would make them type the code shown.

For example, if you wanted the driver to write this code:

```
const num = parseInt("2");
```

You would say:
> Declare a variable called number and assign it the return value from running the parseInt function with the argument "2"


## Javascript Fundamentals

```
const name = "John";
```

```
console.log( typeof name );
```

```
const nums = new Array(10).fill('');
```

```
const nums = [1,2,3,4,5];
```

```
const nums = [];
```

```
console.log( typeof nums );
```

```
console.log( Array.isArray(nums) )
```

```
for( const i=1; i<=100; i++ ) {
  nums.push(i);
}
```

```
console.log(nums.length);
```

```
console.log( nums[3] );
```

## Javascript Objects

```
const john = {
  first: "John",
  last: "Cokos",
  lastName: "Cookoo",
  age: 50
}
```

```
console.log(john.first);
```

```
const keyword = "last";
```

```
console.log(john.keyword);
```

```
console.log(john[keyword]);  // john["last"] -> Cokos
```

```
const props = ['first', 'last', 'hairType', 'age'];
```

```
for( let i = 0; i<props.length; i++) {
  console.log( props[i],  john[props[i]]  ); // i=0 ... props[i]='john' ... john['first']
}
```

## Functions

```
function sayHi(name) {
  console.log('Hi', name);
}
```

```
const screamHello = function(name) {
  console.log( 'HELLO', name.toUpperCase() );
}
```

```
sayHi('Lyndsey');
```

```
screamHello('Jon');
```


## Constructors

```
function Person(name) {
  this.fullName = name;
}
```

```
Person.prototype.sayMyName = function() {
  console.log( this.fullName.toUpperCase() );
}
```

```
Person.whisper = function() {
  console.log('sssshhhh');
}
```


```
Person.sayMyName();
```

```
const john = new Person('John Cokos');
```

```
john.sayMyName();
```

```
john.whisper();
```

```
Person.whisper();
```


## CSS Selectors
Ref: https://www.w3schools.com/cssref/css_selectors.asp

Describe the elements these selectors would target

```
div
```

```
div.car
```

```
.car
```

```
#thing
```

```
div > span;
```

```
div span
```

```
div + span
```

```
div ~ span
```

```
input[type=text]
```

```
div:hover
```

```
div:after
div:before
```

## CSS Layout Properties

```
float:left;
float: right;
```

```
clear:both;
```

```
display:block;
````

```
display:inline-block;
```

```
position:absolute;
position:relative;
```

```
position:fixed;
```

```
visibility:hidden;
```

```
display:none;
```
