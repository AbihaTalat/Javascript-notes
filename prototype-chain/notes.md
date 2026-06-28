Prototype:
In Javascript, almost every object has another object linked to it called a prototype. An object can inherit properties and methods from its prototype.

Prototype Chain:
If JS cannot find a property in an object, it looks for it in the object's prototype. If it is not there, JS keeps searching up the chain until it reaches null. This process is called the prototype chain. 

Useful Aspect:
The prototype chain allows objects to share methods instead of creating duplicate methods for every object. 

Learning Points:
-Objects can inherit from other objects.
-JS searches through prototypes when a property is not found. 
-Inheritance in JS is prototype-based.

