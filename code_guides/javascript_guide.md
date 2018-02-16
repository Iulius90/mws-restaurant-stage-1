# Udacity JavaScript Style Guide
---

## General Formatting Rules

#### Trailing Whitespace - Remove trailing white spaces.

#### Indentation - consistent

#### Encoding - Use UTF-8

#### Comments - Use comments to explain code:

@constructor: used to document a class, a.k.a. a function meant to be called with the new keyword.
@description: used to describe your function; this tag allows you to include HTML markup if desired as well.
@param: used to describe the name, type, and description of a function parameter.
@returns: document the type and description of a function's return value.
This example shows how to document a class constructor (note the use of /** to start the comment block; that's important):


```
/**
* @description Represents a book
* @constructor
* @param {string} title - The title of the book
* @param {string} author - The author of the book
*/
function Book(title, author) {
    ...
}
```

#### Action Items - Mark todos and action items with TODO:.

#### Variable Declaration

There are three ways to declare a variable in JavaScript: const, let,var

When declaring variables, you should declare them using the keywords in the order listed above. Declare your variables with const, first. If you find that you need to reassign the variable later, use let. There isn't a good reason to use the var keyword anymore for variable declaration.

#### Semicolons - Always use semicolons.

#### Wrapper Objects for Primitive Types

There's no reason to use wrapper objects for primitive types, plus they're dangerous. However, type casting is okay.

#### Closures - Yes, but be careful.

#### for, for-in and forEach

**Array**  - forEach or for loops are preferred over for-in loops when iterating over an array.


**object** - for-in loops are used to loop over keys in an object. This can be error prone because for-in does not loop from 0 to length - 1 but over all the present keys in the object and its prototype chain.

If possible, organize data so it is not necessary to iterate over objects. If that isn't possible, wrap the content of the for-in loop in a conditional statement to prevent it from from iterating over the prototype chain.


#### Multiline String Literals - Do not use.

#### Array and Object Literals

Use Array and Object literals instead of Array and Object constructors.

**BAD**

```
const myArray = new Array(x1, x2, x3);

const myObject = new Object();
myObject.a = 0;
```

**GOOD**

```
const myArray = [x1, x2, x3];

const myObject = {
    a: 0
};
```




## JavaScript Style Rules

#### Naming

In general, functionNamesLikeThis, variableNamesLikeThis, ClassNamesLikeThis, methodNamesLikeThis, CONSTANT_VALUES_LIKE_THIS and filenameslikethis.js.