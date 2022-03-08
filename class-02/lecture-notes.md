# Class 01 Lecture Notes

## Data Types in JavaScript

- A way of labeling and organizing data
- A way to format the data so that our program can anticipate and use the data properly

JavaScript is **loosely typed** and **dynamic** language

- Loosely typed meaning that we don't have to know the type of data to declare a variable.
- Variables at declaration don't need data

`let dog;`

- Dynamic meaning I can change the type of data after the variable has been declared.

`let dog = 'woof';`

`dog = 4;`

`dog = true;`

### Types

#### Numbers

- Numeric data types, can be decimals, negatives...written with no special notation.

#### Strings

- A sequence of characters used to represent text... written with single quotes.
  - `'hello'`
  - `'4353443r3 dareaw'`

#### Booleans

- Logical types
  - `true`
  - `false`

#### Undefined

- Something that has not yet been defined
  - `let dog;`

#### Null

- Something that is defined as none.
  - `let dog = null;`

## Comparison Operators

- `==` 'loose equality'...value must be the same, but type can be different
  - `6 == '6' // evaluates to true`
- `===` 'strict equality'...value and type must be the same
  - `6 == '6' // evaluates to false` but...
  - `6 === 6 // evaluates to true`
- `!=` 'loose inequality'
  - `6 != '6' // evaluates as false`
  - `6 != 'a' // evaluates as true`
- `!==` 'strict inequality'
  - `6 !== '6' // evaluates as true`
  - `6 !== 6 // evaluates as false`
- `>` greater than; `<` less than
- `>=` greater than or equal to; `<=` less than or equal to

## Logical Operators

- `&&` and;
- `||` or;
- `!` not, also refered to as the bang symbol. Gives you the opposite of whatever it is placed in front of
  - `!true` this will equate to false
