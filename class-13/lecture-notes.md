# Class 13 Lecture Notes

## Data Persistance

### Local Storage

- A object that is stored in browser
  - Stored on our hard drive
  - Local storage is specific to one computer
  - no expiration until I clear local storage

- Storage
  - NoSQL - 301 with MongoDB
  - SQL - 401 with postgres

### Why?

- Users can retain data between page refreshes
- Good to test insensitive data before storing it in server or database

### Local Storage

#### How it is stored

- Data is stored as a string
- JSON - JavaScript Object Notation
- `JSON.stringify();`

#### Methods

- `setItem(key, value)`
- `getItem(key)`
- `clear()`
- `removeItem(key)`
- `localStorage.setItem('name', {....})`

### Steps for our project

- First step: to set it in local storage
  - `let stringifiedItems = JSON.stringify(arrayOfObjs);`
    - when we stringify the objects/data it changes
    - it strip away any reference that it came from a Constructor
  - `localStorage.setItem('myItems', stringifiedItems);`

- Get items out of local storage:
  - `let myStuffImGettingOut = localStorage.getItem('myItems');`
  - `JSON.parse(myStuffImGettingOut)`
    - parse it so that our code can use
