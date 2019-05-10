/*
  FUNCTIONS
*/

// Method Invocation Pattern
/*
var user = {
  age: 0,
  incrementAge: function(value) {
    // make sure argument is of type number
    this.age += typeof value === 'number' ? value : 0;
  }
};
user.incrementAge(3);


// Constructor  Invcation Pattern
// Create constructor function User
var User = function(name) {
  this.name = name;
};

// Give all instances of User public method get_name()
User.prototype.get_name = function() {
  return this.name;
};

// Create instance of user
// Functions using "new" prefix are constructors
var admin = new User("Admin")
console.log(admin.get_name())



// Arguments Array "parameter"
var sum = function() {
  var i, sum = 0;
  for (i = 0; i < arguments.length; i += 1) {
    sum += arguments[i];
  }
  return sum;
};
console.log(sum(32, 64, 128, 256, 512));

*/

// Return
/*  If function is invoked with "new" prefix and return value
  is not an object then "this" new object is returned




// Exceptions
var add = function(a, b) {
  if (typeof a !== 'number' || typeof b != 'number') {
    throw {
      name: 'TypeError',
      message: 'argument is NAN'
    };
  }
  return a + b;
}

var try_add = function() {
  try {
    add("NAN", "not a number");
  } catch (ex) {
    console.log(ex.name + ': ' + ex.message);
  }
}
try_add();




// Augmeting Types `??????`
String.method('trim', function() {
  return this.replace(/^\s+|\s+$/g, '');
});




// Augmeting Function.prototype, add method to all objects
Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
};
*/

// Only add method if another method already exists
Function.prototype.method = function(name, func) {
  if(!this.prototype[name]) {
    this.prototype[name] = func;
    return this;
  }
};


/*


// Recursion


// self calling function
var hanoi = function hanoi(disc, src, aux, dst) {
  if(disc > 0) {
    hanoi(disc - 1, src, dst, aux);
    console.log("Move disc " + disc + " from " + src + " to " + dst)
    hanoi(disc - 1, aux, src, dst);
  }
}
hanoi(3, 'Src', 'Aux', 'Dst')




var walkTheDOM = function walk(node, func) {
  func(node);
  node = node.firstChild;
  while (node) {
    walk(node, func);
    node = node.nextSibling
  }
}


var getElementsByAttribute = function(att, value) {
  var results = [];

  walkTheDOM(document.body, function(node) {
    var actual = node.nodeType === 1 && node.getAttribute(att);
    if (typeof actual === 'string' && actual === value || typeof value != 'string') {
      results.push(node);
      console.log(node)
    }
  });

  return results;
};

getElementsByAttribute('span');



//  factorial tail recursion function
var factorial = function factorial(i, a) {
  a = a || 1;
  if (i < 2) {
    return a;
  }
  return factorial(i - 1, a * i);
};

console.log(factorial(4));



// Scope
var foo = function () {
  var a = 3, b = 5;

  var bar = function () {
    var v = 7, c = 11;
    a += b + c;
  };
  bar();
};




// Clojures

// returns object literal
var person = (function () {
  let age = 0;

  return {
    incrementAge: function (val) {
      age += typeof val === 'number' ? val : 1;
    },
    getAge: function () {
      return age;
    }
  };
}());

person.incrementAge(3);
console.log(person.getAge());



var quo = function (status) {
  return {
    getStatus: function() {
      return status;
    }
  };
};
someQuo = quo("Status: ");
console.log(someQuo.getStatus());


var fade = function (node) {
  let level = 1;
  var step = function () {
    var hex = level.toString(16);
    node.style.backgroundColor = '#FFFF' + hex + hex;
    if (level < 15) {
      level += 1;
      setTimeout(step, 1000);
    }
  };
  setTimeout(step, 1000);
};
fade(document.body);




var addClickHandler = function(nodes) {
  var elementClick = function (i) {
    return function () {
      console.log('clicked: ' + i)
    };
  };
  var i;
  for (i = 0; i < nodes.length; i += 1) {
    nodes[i].onclick = elementClick(i);
  }
};

var listItems = document.querySelectorAll('li');
addClickHandler(listItems);


// Callbacks


// Modules
´

// Module
var serialGenerator = function () {
  let prefix = '', seq = 0;
  return {
    setPrefix: function (p) {
      prefix = String(p);
    },
    setSeq: function (s) {
      seq = s;
    },
    genSym: function () {
      let result = prefix + seq;
      seq += 1;
      console.log(result)
      return result;
    }
  };
};
const seqer = serialGenerator();
seqer.setPrefix('Q');
seqer.setSeq(1000);
var unique = seqer.genSym();


// Curry
// produces a new function by combining arguments with functcions
// Auguent Function.prototype
Function.method('curry', function () {
  var slice = Array.prototype.slice,
      args = slice.apply(arguments);
      that = this;
      return function () {
        // concat argument arrays
        return that.apply(null, args.concat(slice.apply(arguments)));
      };
    });


// Memoization
    var fibonacci = function (n) {
      return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
    };

    for (var i = 0; i <= 10; i += 1) {
      console.log('// ' + i + ': ' + fibonacci(i));
    }


var fibonacci = (function () {
  var memo = [0, 1];
  var fib = function (n) {
    var result = memo[n];
    if (typeof result != 'number') {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
})();

for (var i = 0; i <= 10; i += 1) {
  console.log('// ' + i + ': ' + fibonacci(i));
}


var memoizer = function (memo, formula) {
  var recur = function (n) {
    var result = memo[n];
    if (typeof result != 'number') {
      result = formula(recur, n);
      memo[n] = result;
    }
    return result;
  };
  return recur;
};

var fibonacci = memoizer([0, 1], function (recur, n) {
  return recur(n - 1) + recur(n - 2);
});


var factorial = memoizer([1, 1], function (recur, n) {
  return n * recur(n - 1);
});
*/

/*
  INHERITANCE
*/
// Prototypal - objects inherit directly other object

// Pseudoclassical
// When a function obj is created the function constructor
// that produces the function object returns some code


// function object is given a prototype property
// the value is the new function object
/*
this.prototype = {constructor: this};

// if a function is invoked with the constructor invocation Pattern
// using the new prefix, this modifie the way the function is executed'
// if the new operatpr where a method instead of an operator it could
// have been implemented like this:

Function.method('new', function() {
  // create object ineriting from constructor prototype
  var that = Object.create(this.prototype);

  // invoke the constructor, binding -this- to new object
  var other = this.apply(that, arguments);

  // If return value is not an obj, substitute the new obj
  return (typeof other === 'object' && other || other) || that;
});

// define constructor and augment its prottotype
var User = function(name) {
  return this.name;
}*/

//User.prototype.getName = function () {
//  return this.name;
//};

//User.prototype.says = function (words) {
//  this.words = words;
//  return words || '';
//};

//var someUser = new User("John");


// Another pseudo class that inherits from Mamal by
// defining its constructor function and replacing its prototype
// with an instance of mamal.
/*
var Person = function (name) {
  this.name = name;
  this.saying = 'hello';
}

// replace Person.prototype with new instance of User
Person.prototype = new User();



  Person.prototype.getName = function () {
    return this.name;
  }

  var somePerson = new Person("John");
  console.log(somePerson.says("Greetings"));
  console.log(somePerson.getName());
--------------------------------------------------


var User = function(name) {
  return this.name;
}

  // use method method - define inherits method
  Function.method('inherits', function (Parent) {
    this.prototype = new Parent();
    return this;
  });

  // inherit method returns this, allowing us to program
  // in a cascade style- We can now make our obj with one statement

  var Person = function (name) {
    this.name = name;
    this.saying = 'hello';
  }.
  inherits(User).
  method('getName', function () {
    return this.name;
  });

var admin = new Person("John");
console.log(admin.getName())



// Object specifiers

// instead of writing
var someObject = maker(f, l, m, c, s);

// write like this
// arguments can now be listed in any order
// argumets can be left out if the constructor
// is smart about default values
var someObject = maker({
  first: f,
  last: l,
  middle: m,
  state: s,
  city: c
});


// Prototypal

// prototypal pattern focus on objects, not classes
// Prototypal inheritance is simpler than classical inheritance
// a new object can inherit the props of an old object

var user = {
  name: 'Super Admin',
  age: 0,
  getName: function() {
    return this.name;
  }
};

var person = Object.create(user);
// customize person, new instance of user
person.getAge = function () {
  return this.age;
};
console.log(person.getAge())


var block = function () {
  // remember current Scope
  var oldScope = scope;
  // make new scope including everythig from oldscope
  scope = Object.create(scope);

  advance('{')
  // parse using new scope
  parse(scope);
  // discard new scope rstoring old scope
  advance('}');
  scope = oldScope;
};


// Functional

// functional constructors
// container obj holds stuff shared by the constructors inheritance chain
// container is optional, but if no obj is given a containers obj is created
// spec contains info the constructor needs to make an instance
// if a c obj is not passed, a c object is made
var constructor = function (spec, container) {
  var that;
  container = container || {};

  // add shared variables and functions to 'c'
  that = new Object;
  // add privileged methods to 'that'
  return that;
};
*/

/*
There are several ways to create new objects
'object literals', 'psuedoclassical constructors' with new operator,
'Object.create' method on prototype objects.
Call aanother functional constructor, passing it a spec object like
the same spec object that was passed to to the constructor, and the container
obj. The container obj allows the other constructor to share what was put into
container.
*/

/**/
/*
var human = function(spec) {
  var that = {};

  that.getName = function () {
    return spec.name;
  };

  that.says = function (str) {
    this.str = str;
    return str || '';
  };
  return that;
};

var user = human({name: 'admin'});
console.log(user.says(user.getName() + " says: hello"))


// functional pattern

var anotherHuman = function (spec) {
  spec.saying = spec.saying || '';
  var that = human(spec);

  that.getName = function () {
    return spec.name;
  };
  return that;
};

var user = anotherHuman({name: 'admin'});
console.log(user.getName());


// Super methods: functional Pattern
// gives better encapsulation and hides info, accepts super methods.
Object.method('superior', function (name) {
  var that = this;
  var method = that[name];

  return function () {
    return method.apply(that, arguments);
  };
});

var superHuman = function (spec) {
  var that = human(spec),
    super_getName = that.superior('getName');
    that.getName = function (n) {
      return super_getName();
    };
    return that;
};

var superman = superHuman({name: 'superman'});
console.log(superman.getName());


/* IF an object of the functional style is created and allowsof the methods
of the object makes no use of this or that the object is 'durable'. A durable
object is siply a function that act as capabilities.

A durable object cannot be compromised. Access to durable
object does not give an attacker the ability to access the internal
state of the object except as permitted by methods
*/



// PARTS

/*
  Function to add event processing features to any object
  fire event on obj, either event name string,
  an object containing a type prop containing name of the event.
  Handers registered by the 'on' method that match the event name will
  will be invoked
*/
/*
var eventuality = function (that) {
  var registry = {};
  that.fire = function (event) {
    let array, func, handler, i;
    type = typeof event === 'string' ? event : event.type;

    // if an array of handlers exist for this eventuality
    // then loop through it and exectute the handlers in Order
    if (registry.hasOwnProperty(type)) {
      array = registry[type];
      for (i = 0; i < array.length; i += 1) {
        handler = array[i];

        // A handler record contains a method and an optional
        // array of params. If the method is a name, lookup function
        func = handler.method;
        if(typeof func === 'string') {
          func = this[func];
        }

        // Invoke a handler, if the record contained
        // params, then pass them. otherwise pass event object

        func.apply(this, handler.parameters || [event]);
      }
    }
    return this;
  };

  that.on = function (type, method, parameters) {

    // Register an event. Make handler record.
    // Put it in a handler array making one if
    // it doesnt exist for ths type'
    var handler = {
      method: method,
      parameters: parameters
    };
    if(registry.hasOwnProperty(type)) {
      registry[type].push(handler);
    } else {
      registry[type] = [handler];
    }
    return this;
  };
  return that;
};
*/



/*
  ARRAYS
*/

/*

// Array Literals inherits from Array.prototype
// has .length property.
var numbers = ['zero', 'one', 'two', 'three'];

//Object literals inherits from Object.prototype
var numberObject = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three'
};

// arrays can contain a mixture of value types
var misc = ['string', 3, false, null, undefined, ['nestedArray'], {object: true}];

// Length
// Javascript array length is not upper bound.
// There is no array bound error.

// The length property is the largest integer property name in array plus one
var array = [];
array[1] = true;
console.log(array.length) // 2

// The [] postfix subscript operator converts its expresion
// to a string using the expressions tostring method if it has one.
// The string will be used as the property name.

// Making the length larger does not allocate ore space for the array.
// Making the length saller will cause all properties with a subscript that
// is greater than or rqual to the new length to be deleted

numbers.length = 1;
console.log(numbers) // ["zero"]

// A new element can be appended to the end of an array by asigning
// to the arrayäs current Length
numbers[numbers.length] = 'alfa';
console.log(numbers); // ["zero", "alfa"]

// To add stuff to the array we can use push() methods
numbers.push('beta');
console.log(numbers); // ["zero", "alfa", "beta"]

// Delete

// Since javascript arrayäs are objects the delete operator can be used
// to remove elements from the arrat

delete numbers[0];
console.log(numbers); // [empty x 1, "alfa", "beta"]

// The splice method can replace elements instead of leaving empty ones.
// First argument is an ordinal in the array, second is the number
// of elements to delete.
numbers.splice(2, 1)
console.log(numbers); // [empty x 1, "alfa"];


// Enumeration

// The for-in-statement can be used to iterate over props of an array
// however the properties wont be ordered

// The for-statement is controlled by 3 clauses:
// first iterates loop, second is the while condition, third does the incrementation

for(var i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i])
}

// When the property names are small sequential
// integers use an array otherwise use an object

// implement function to distinguish between array and objects
// the typeof operator reports the type of an array as an object.
var isArray = function (value) {
  return Object.prototype.toString.apply(value) === '[object array]';
};



// Methods
// Augument Array.prototype, add reduce function
Array.method('reduce', function (f, value) {
  for (var i = 0; i < this.length; i++) {
    value = f(this[i], value);
  }
});



var data = [2, 4, 6, 8];

var multiply = function (x, y) {
  return x * y;
};

var add = function (x, y) {
  return x + y;
}

var product = data.reduce(multiply, 1);
var sum = data.reduce(add, 1);
console.log(sum); // 21
console.log(product); // 384


// Since arrays are objects we can add methods directly to it
data.total = function () {
  return this.reduce(add, 1);
}
console.log(data.total()); // 21



// Dimensions
Array.dim = function (dimension, initial) {
  var a = [];
  for (var i = 0; i < dimension; i += 1) {
    a[i] = initial;
  }
  return a;
};

var someArray = Array.dim(10, 0); // 0, 0, 0, 0, 0, 0, 0, 0, 0, 0

// One dimensional nested array
var matrix = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];
console.log(matrix[0][0]); // 0



// Two dimensional arrays
arr = [];
value = 3;
for (i = 0; i < value; i += 1) {
  arr[i] = [];
  console.log(arr[i]) // [0] [0] [0]
}


// Explicitly set initial cell value
Array.matrix = function (m, n, initial) {
  var a, i, j, mat = [];
  for (i = 0; i < m; i += 1) {
    a = [];
    for (j = 0; j < n; j += 1) {
      a[j] = initial;
    }
    mat[i] = a;
  }
  return mat;
};

// Make a 4 * 5 matrix filled with zeros
var someMatrix = Array.matrix(4,4,0);
console.log(someMatrix);

// Identity matrix
Array.identity = function (n) {
  var i, mat = Array.matrix(n,n,0);
  for (i = 0; i < n; i += 1) {
    mat[i][i] = 1;
  }
  return mat;
};

someMatrix = Array.identity(4);
console.log(someMatrix)




/*
  REGULAR EXPRESSIONS
*/
/*
// REGEX is used to search, extract replace data from strings

// Regex that matches an URL

var parseUrl = /^(?:([A-Za-z]+):)?(\/{0.3})([0-9.\-A-Za-z]+)(?:(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/ ;
var url = "http://localhost.com:8080";
var result = parseUrl.exec(url);
var blankSpace = '       ';
var resultInfo = [
  'url', 'scheme',
  'slash', 'host',
  'port', 'path',
  'query', 'hash'
];

for (var i = 0; i < resultInfo.length; i += 1) {
    console.log(resultInfo[i] + ':' + blankSpace.substring(resultInfo[i].length), result[i]);
}





/*
  METHODS
*/

/*

// Array concat(item...)
let arrayX = ['A', 'B', 'C'];
let arrayY = ['D', 'E', 'F'];
let arrayConcat = arrayX.concat(arrayY);
//console.log(arrayConcat);


// Array.join(separator)
let arrayA = ['a', 'b', 'c'];
arrayA.push('d')
let j = arrayA.join('1');
//console.log(j)



// Array.pop()
// Pop & Push makes an array work like a stack
// Pop removes and returns the last element if empty return 'undefined'
let arrayPop = ['a', 'b', 'c'];
var p = arrayPop.pop();

// Implementation
Array.method('pop', function () {
  return this.splice(this.length - 1, 1)[0]
});


// Array.push(item ...)
let arrayPushX = ['a', 'b', 'c'];
let arrayPushY = ['d', 'e', 'f'];
arrayPushX.push(arrayPushY)
//console.log(arrayPushX) // (4) ["a", "b", "c", Array(3)]

// Implementation
Array.method('push', function () {
  this.splice.apply(this,[this.length, 0]).concat(Array.prototype.slice.apply(arguments));
    return this.length;
});



// Array.reverse()
// Returns the array reversed
let arrayReversed = ['a', 'b', 'c'];
arrayReversed.reverse();
//console.log(arrayReversed); // (3) ["c", "b", "a"]

// Array.shift()
//Shift removes first element and returns it
//Shft is slower then pop();
let arrayShifted = ['A', 'B', 'C'];
var shiftedValue = arrayShifted.shift();
//console.log(shiftedValue); // A

// Implementation
Array.method('shift', function () {
  return this.splice(0, 1)[0];
});



// Array.slice(start, end)
// Slice makes a copy of a portion of an array
let arraySlized = ['a','b','c'];
let a = arraySlized.slice(0, 1); // a
let b = arraySlized.slice(1) // (2) ["b", "c"]


// Array.sort(comparefn)
// js "compare" assumes that the elements are strings
// I converts numbers into strings, therefor it does not work as intended
n = [1024, 128, 512, 256];
n.sort(function (a, b) {
  return a - b;
});
//console.log(n); //[128, 256, 512, 1024]

// sort() numbers & strings
m = ['aa', 'bb', 'A', 'a', 4, 8];
m.sort(function (a, b) {
  if (a === b) {
    return 0;
  }
  if (typeof a === typeof b) {
    return a < b ? -1 : 1;
  }
  return typeof a < typeof b ? -1 : 1;
});
//console.log(m.sort());

// this function takes a memeber name string and returns
// a comparison function that can be used to sort an array
var by = function (name) {
  return function (o, p) {
    if (typeof o === 'object' && typeof p === 'object' && o && p) {
      a = o[name];
      b = p[name];
      if(a === b) {
        return 0;
      }
      if (typeof a === typeof b) {
        return a < b ? -1 : 1;
      }
      return typeof a < typeof b ? -1 : 1;
    } else {
      throw {
        name: 'Error',
        message: 'Expected an object when sorting by: ' + name
      };
    }
  };
};

var listOfNames = [
  {first: 'Valdadmir', last: 'Orangepeal'},
  {first: 'Lohanana', last: 'Doeser'},
  {first: 'Alphoso', last: 'Famtor'},
  {first: 'Al Rock', last: 'Champ'},
  {first: 'Jannen', last: 'Kranthz'}
];
// console.log(listOfNames.sort(by('first')).sort(by('last')));


// Function takes a member name string and an optional
// minor cmparison function and returns a comparison function
// that can be used to so an array of objects that contain
// that member when the o[x] p[x] are equal.

  var by = function (name, minor) {
    return function (o, p) {
      if (o && p && typeof o === 'object' && typeof p === 'object') {
        a = o[name];
        b = p[name];
        if (a === b) {
          return typeof minor === 'function' ? minor(o, p) : o;
        }
        if (typeof a === typeof b) {
          return a < b ? -1 : 1;
        }
        return typeof a < typeof b ? -1 : 1;
      } else {
        throw {
          name: 'Error',
          message: 'Expected an object when sorting by: ' + name
      };
    }
  };
};
//console.log(listOfNames.sort(by('last'), by('first')));



// array.unshift(item..)
// The unshft method is like the push method except that it
// shoves the items onto the front of this array instead of at the appended

Array.method('unshift', function () {
  this.splice.apply(this,
      [0, 0]).concat(Array.prototype.slice.apply(arguments));
      return this.length;
});

//console.log(listOfNames.unshift()); //5




// Function
// The apply function invokes a function,
// passing thee object that will be bound to .this
// APlly method is used in the invocation pattern
//function.apply(thisArg, argArray)

// return a function that will call this function
// though it is a method of an object
Function.method('bind', function (that) {
  let method = this;
  let slize = Array.prototype.slice;
  let args = slize.apply(arguments, [1]);
  return function () {
    return method.apply(that, args.concat(slize.apply(arguments, [0])));
  };
});



// Number

// number.toExponential(fractionDigits)
// The toExponential method converts .ths number to a string
// in exponential form. THe optional fractionDigits param
// controls the number of decimal places.
// It should be between 0 and 20

//console.log(Math.PI.toExponential(0));
//console.log(Math.PI.toExponential(20));





// Object
// object.hasOwnProperty(name)
// The hasOwnProperty method returns true if the object contains
// a property  having the 'name'.
// The prototype chain is not examined, Ths method is useless
// if the 'name' is hasOwnProperty

let a = {member: true};
let b = Object.create(a);
let t = a.hasOwnProperty('member');
let u = b.hasOwnProperty('memeber');
let v = b.member;
console.log(a);
console.log(b);
console.log(t);
console.log(u);
console.log(v);





// RegExp
//regexp.exec(string)

// break a simple html text into tags and texts
// (See string.replace for the eityify method)


// (used below)
// Callback
// Module
  String.method('entityify', function () {
    var entity = {
      quot: '"',
      lt: '<',
      gt: '>'
    };
    return function () {
      return this.replace(/&([^&;]+);/g,
      function (a, b) {
        var r = entity[b];
        return typeof r === 'string' ? r : a;
      }
    );
  };
}());

var htlText = `<html>
              <body>
                <p>
                  <b>bold</b>
                </p>
              </body>
            </html>`;
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
var a, i;
while ((a = tags.exec(htlText))) {
    for (i = 0; i < a.length; i += 1) {
        console.log(('// [' + i + '] ' + a[i]).entityify());
    }
    console.log();
}



//regexp.testing(string)
// if regex method matchses the string, retur true
// otherwise just return false
var b = /&.+;/.test('frank &amp; beans');
RegExp.method('test', function (string) {
  return this.exec(string != null);
});


// String
// charAt(pos)
// Char method returns the character at position pos
// if pos is less than zero or greater than or equal to
// string.length return the empty string, js doesnt
// have a char type the result of the method is a string
let firstName = 'Collin';
let initialName = firstName.charAt(0);  // C

// this is how charAt() can be implemented
String.method('charAt', function(pos) {
  return this.slize(pos, pos -1);
});


// String
// CharCodeAt(pos)
// The charcode s the ae as charAt() except that intead
// of returnning a string it returns an integer representation
// of the code point value of the character at position pos
// If pos is zero or greater than or equal string.length return NAN
let city = 'Stckholm';
let initalCity = city.charCodeAt(0); // 83




// string.concat(string)
// The concat method akes a new string by concatinating other strings
// Is is rarely used since the '+' operator i more convenient
let s = 'G'.concat('o', 'd') // God..


// string.indexOf(searchString, position)
// The indexOf method searches for a string within a string
// If found it returns the postion of the first mathced character,
// otherwise it returns -1. The optional position parameter
// cause the search to begn at some specified point in the string
let someText = 'Stockholm'
let p = someText.indexOf('ck') // 3


// string.lastIndexOf(searchString, position)
// the lastIndexOf method is like indexOf except that t
// searches from the end of the string istead of the front
let someString = 'Stockholm';
let lc = someString.lastIndexOf('ck'); // 3


// string.localCompare(that)
// The localCompare method copares two strings.
// if string is less than that string,
// the result is negatve if they are euqal
// the result is zero, similar to the conventiion for the
//array.ort

let letterArray = ['AAA', 'A', 'aa', 'a', 'Aa', 'aaa']
letterArray.sort(function (a, b) {
  return a.localeCompare(b); //["a", "A", "aa", "Aa", "aaa", "AAA"]
});


var user = {
  name: "admin"
}

// THIS  & Object
function identify()  {
  return  this.name.toUpperCase();
}

function speak() {
  var greeting = 'hello, I am ' + identify.call(this);
  console.log(greeting);
}

speak.call(user);


// Javascript provides an additional parameter called 'context'
// is is designed as a work-around for bind(...)
// Insead of relying on .this we can pass the context object instead

var user = {
  name: "admin"
}

function identify(context) {
  return context.name.toUpperCase();
}

function speak(context) {
  var greeting = 'hello, I am ' + identify( context );
  console.log( greeting );
}
speak(user);



// Internally these functions almost certainly use
// explicit binding via call(...) or apply(...)
function foo(element) {
  console.log(this.id, element); // Key 1 Key 2 Key 3
}

var obj = {
  id: 'key'
};

[1, 2, 3].forEach(foo, obj);


// new binding..
// js has a 'new' operator, for example
// something = new SomeClass(...);
// When a function is invoked with 'new' infront of it
// the following things are done automatically:

// 1 A brand new object is created (aka constructed)
// 2 The newly constructed object is [[Prototype]]-linked
// 3 Tue newly constructed object is set as 'this' binding for that function call
// 4 Unless the fubction returns its own alternate object, the new invoked
// function call will autoatically return the new constructed object


// By calling foo(...) with new infront of it we construct a new
// object and set that new object as this for the call of foo(...)
// we call this 'new binding'

function foo(a) {
  this.a = a;
}

var bar = new foo(2);
console.log(bar.a);


// explicit vs implicit binding
// explicit binding thakes precedence over implicit binding
function foo() {
  console.log(this.a);
}

var obj1 = {
  a: 1,
  foo: foo
};

var obj2 = {
  a: 2,
  foo: foo
};

obj1.foo(); // 1
obj1.foo.call(obj1) // 1

obj2.foo(); // 2
obj2.foo.call(obj2) // 2


// what about the 'new binding' ?
function foo(something) {
  this.a = something;
  console.log(something);
}

var obj1 = {
  foo: foo
};

var obj2 = {};

obj1.foo(1); // 1
console.log(obj1.a); // 1

// -------------------//

obj1.foo.call(obj2, 2) // 2
console.log(obj2.a); // 2

// -------------------//

var bar = new obj1.foo(3); // 3
console.log(bar.a); // 3


// The new binding is more precedent than implicit binding.
// But is new binding more  or less precedent than explicit binding?

// 'new' and call/apply cannot be combined, so foo.call(obj1) is not allowed
// but we can still use 'hard binding'.


// Hard binding is a form of explicit binding.
// is it more precedent than the new binding and cannot be overwritten with new?
// Lets try..

function foo(something) {
  this.a = something;
  console.log(something);
}

var obj1 = {};

var bar = foo.bind(obj1);
bar(1); // 1
console.log(obj1.a); // 1

var baz = new bar(3); // 3
console.log(obj1.a) // 1
console.log(baz.a); // 3

// bar is now hard-bound against obj1, but the new bar(3) did not change
// obj1.a to 3 asexpected, instead the hard-bound (to obj1) call to bar(...)
// is able to be overridden with new. Since new was applied we got
// the newly created objct back, which is named baz, and bas.a = 3

// this bind-helper below does not have a way for a new operator call to overridde
// the hard-binding to obj as we can see above.
function bind(fn, obj) {
  return function() {
    fn.apply(obj, arguments)
  };
}

// But the built-in function: Function.prototype.bind(...) as of ES5 is more
// sophisticated, here is the slighlt modified polyfill by MDN page for bind(...);

if (!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
		if (typeof this !== "function") {
			// closest thing possible to the ECMAScript 5
			// internal IsCallable function
			throw new TypeError( "Function.prototype.bind - what " +
				"is trying to be bound is not callable"
			);
		}

		var aArgs = Array.prototype.slice.call( arguments, 1 ),
			fToBind = this,
			fNOP = function(){},
			fBound = function(){
				return fToBind.apply(
					(
						this instanceof fNOP &&
						oThis ? this : oThis
					),
					aArgs.concat( Array.prototype.slice.call( arguments ) )
				);
			}
		;

		fNOP.prototype = this.prototype;
		fBound.prototype = new fNOP();

		return fBound;
	};
}

// The part that allows pverriding is :
// this instanceof fNOP && oThis ? this : oThis
// and
// fNop.prototype = this.prototype;
// fBound.prototype = new fNOP;


// Determining 'this'

// 1. is the function called with 'new-binding', if so
// 'this' is the newly constructed object
// var bar = new foo();


// 2. Is the function called with 'call' or 'apply' (explicit-binding)
// 'this' is the explictly specified object
// var bar = foo.call(obj2);


// 3. Is the function called with 'context' (implicit-binding) otherwise
// known as an owning or containing object? 'this' is 'that' context object
// var bar = obj1.foo()

// 4. otherwise, default the 'this' (default-binding)
// If 'strict mode', pick undefined, otherwise pickup the global object
// var bar = foo();

// Lexical 'this'
// Normal functions abide by the four rules above. But ES6
// introduces a special kind of o ffunction that does not use these rules
// The arrow-function.
// Arrow-functions are signfied not by the function keyword, but  by
// the so called "fat arrow" =>
// instead of using the four standard 'this' rules arrow-functions adopt the
// 'this' binding from the enclosing (function or global) scope.

function foo() {
  // return an arrow functions
  return (a) => {
    console.log(this.a);
  };
}

var obj1 = {
  a: 2
};

var obj2 = {
  a: 3
};

var bar = foo.call(obj1);
bar.call(obj2); // 2 not 3


// The arrow-fuction created in foo() lexically captures whatever foo()s 'this'
// is at all call-time. Since foo() was this-bound  to obj1,
// bar - a reference to the returned arrow-function will also be 'this-bound' to obj1
// The lexical binding of an arrow-fuction cannot be overridden even with 'new'.

// Common use-cases will likely be in the use of callbacks,
// such as event handlers or timers:
function foo() {
  setTimeout(() => {
    console.log(this.a);
  }, 100);
}

var obj = {
  a:2
}

foo.call(obj); // 2



// OBJECTS
// Objects cp,e o 2 forms, the declaratve (literal) form and the constructed form

// Literal syntax for an object:

var someObj = {
  key: value
};

// The constructed form of an object:
var somOtherObj = new Object();
somOtherObj.key = value;

// The constructed form and the literal for result in exactly the same sort of obj
// The difference is you can add one or more key/value pairs to the literal declaration,
// whereas with constructed-form objects you must add the properties one by one.

// Language Types:
// string
// number
// boolean
// null
// undefined
// object


// Built-in objects:
// String
// Number
// Boolean
// Object
// Function
// Array
// Date
// RegExp
// Error

// Each of these built-in functions can be used as a constructor
// (that is  a function call with the new operator) with the result being
// a new constructed object of the subtype. For instance:


var stringPrimitive = "I am a string";
typeof stringPrimitive; // 'string'
stringPrimitive instanceof String; // false

var stringObject = new String("I am a String")
typeof stringObject; // 'object'
stringObject instanceof String // false

// Inspect object sub-type
Object.prototype.toString.call(stringObject) // [object String]


// THe primitive value "I a a string" is not an object, it's a string
// literal and immutable value. to perform operations on it such as
// checking its length, accessnig its individual character contents etc, a string
// object is required. However the language automatically coerces a string
// primitive to a String object when necesary.
// It is strongly oreferred by the majority if the JS-comunty to use literal form
// for a value when possible, rather than the constructed object form.

// Consider:

var stringPrimitive = "i am a string";
console.log(stringPrimitive.length); //13
console.log(stringPrimitive.charAt(3));  //m



// Contents
var someObj = {
  a: 2
};
console.log(someObj["a"]); //2
console.log(someObj.a); // 2

// To access the property 'a' use operator:
// [ ] - "key access"
// or
// . -property access
// In objects property names are always strings
// IF anther value than string is being used it will first be
// converted to a string, this even includes nubers, whch are commonly
// used as array-indexes so be careful not to confuse numbers between
// objects and arrays

var someOtherObj = {};

someOtherObj[true] = "foo";
someOtherObj[3] = "bar";
someOtherObj[someOtherObj] = "baz";


console.log(someOtherObj["true"]); // foo
console.log(someOtherObj[3]); // bar
console.log(someOtherObj["[object Object]"]); // baz


// Computed proerty names
// ES6 adds "computed property names" where you can specify an expression
// surrounded by a "[]" pair, in the key-name position of an object litteral declaration
var prefix = "foo";

var prefixObj = {
  [prefix + "bar"]: "hello",
  [prefix + "baz"]: "world"
};

// not recommended
console.log(prefixObj["foobar"]); // hello
console.log(prefixObj["foobaz"]); // world

var theObject = {
  [Symbol.Something]: 'hello world'
}


// Every time a property of an object is accessed, that is a property access
// regardless of the type value, for example a function, it's not magically
// a "method" at that point, there is nothing special about a function that
// comes from a property access, example:

function foo() {
  console.log("foo");
}

var someFoo = foo;

var myFoo = {
  someFoo: foo
};

console.log(foo); // function foo(){...}
console.log(someFoo); // function foo(){...}
console.log(myFoo.someFoo); // function foo(){...}

// soeFoo and myFooo are two separate references to thee same function
// and neither implies anything about the function being "owned" by any other object
// If foo() was defined to have a "this" reference inside it, that myFoo.someFoo
// implicit binding would be the only observable difference between the two references

// ES6 adds "super reference". The way super behaves (static binding) gives
// further weight to the idea that a function that is super-bound soewhere
// is more a "method" than a "function".

//  when you delcare a function expression as part of the object literal,
// the function doesnt magically belong more to the object there are still just
// multiple references to the same function:

var theObject = {
  foo: function foo() {
    console.log("foo");
  }
};



/*
  ARRAYS
*/

/*
// Arrays assume numertic indexing which means vakes are stored
// in locations called indecies
// Arrays are object, so even though each index is apositive integer,
// you can also add properties.
// Notice that adding named properties (regardless of [] operator syntax)
// does not change the length of the array ..

var someArray = ["foo", 42, "bar"];

console.log(someArray[0]);
console.log(someArray[2]);

someArray.baz = "baz";
console.log(someArray.length); //3
console.log(someArray.baz);

someArray["3"] = "baz";
console.log(someArray.length); //4



// Duplicating Objects
// Example:

var anotherFunction() {}

var anotherObject = {
  c: true
};

anotherArray = [];

var myObject = {
  a: 2,
  b: anotherObject, // Reference, not copy
  c: anotherFunction, // Another reference
  d: anotherArray
};

anotherArray.push(anotherObject, myObject);



// ES6 Object.assign(..)
// Takes target object as first parameter, and one more source object as second
// it iterates over all the enumerable owned keys on the source object(s)
// and copies them via "=" assignment, example:

var userObject = {
  name: "john",
  role: "admin"
};

// copy the userObject
var newObject = Object.assign( {}, userObject );
console.log(newObject.name); // john



// Property descriptors
var myObject = {
  a: 2
};

console.log(Object.getOwnPropertyDescriptor( myObject, "a"));
// {value: 2, writable: true, enumerable: true, configurable: true}
// the property descriptor called "data descriptor" (holds value)


// we can use defineProperty(...) to add a new property,
// or modify an existing one if it is "configurable"

// Writable
// The abillity to change a value of a property is controlled by "writable"
// example:


var myObject = {};

Object.defineProperty( myObject, "a", {
  value: 2,
  writable: false,
  configurable: true,
  enumerable: true
});

myObject.a = 3;
console.log(myObject.a); // 2

// the modification of value "a" from "2" to "3" failed
// in strict mode we would get a "Type error"

// Configurable
// as long as property is currently configurable we can modify its
// descritors definition using the saeme defineProperty(...) utility

var myObject = {
  a: 2
}
myObject.a = 3;
console.log(myObject.a); // 3

Object.defineProperty( myObject, "a", {
  value: 4,
  writable: true,
  configurable: false,
  enumerable: true
});

console.log(myObject.a); // 4
myObject.a = 5;
console.log(myObject.a); // 5

// wll cast type error
Object.defineProperty( myObject, "a" , {
  value: 6,
  writable: true,
  configurable: true,
  enumerable: true
});


// Uncaught TypeError: Cannot redefine property: 'a' at Function.defineProperty (<anonymous>)
// results in TypeError regardless of strict-mode.
// another thing that "configurable: false" prevents is the abiliity to use
// the delete operator to remove an existing property..


// Immutability
// ES5 adds support for making objects / properties that cannot be changed.

// Object constant
// By combining writable:false and configurable: false  we can create constants
// (cannot be changed, redefined or deleted)

var myObject = {};

Object.defineProperty( myObject, "name", {
  value: "john",
  writable: false,
  configurable: false
});

console.log(myObject.name);

// Prevent extensions
// To preven an object from having new properties use: Object.preventExtensions(...)
Object.preventExtensions( myObject );
myObject.name = "dalalalala";
console.log(myObject.name); // name is still john


// Seal
// Object.seal(...) creates a "sealed" obect, which means it takes an existing object
// and calls "preventExtensions()" on it, also marks all "data accessor"
// properties as "configurable: false. Values can still be changed



// Freeze
// Object.freeze(...) creates a frozen object, which means it takes an existing object
// and calls seal() on it, but it also marks all data accessor properties as
// "writable: false", so that their values cannot be changed.




// [[GET]]
// there are important details about how accesses are performed, example:

var myObject = {
  a: 2
};
console.log(myObject.a); // 2

// myObject.a is a proterty access, but it doesnt just look in myObject
// for a property of the name "a", the previous code actualy perorms a
// [[Get]] operation (kind a like a function call [[Get]]()) on the myObject
// The default built-in [[Get]] operation for an object first inspects the object
// for a property of the requested name, if it finds it, it will return the value

// one important result of [[Get]] operation is that if it cannot find
// the requested property it instead returns the value of "undefnied"


// [[PUT]]
// Since there is an internally defined [[Get]] operation for getting a value
// from a property, it should be obvious there is also a default [[Put]]

// When ivoking [[Put]], how it behaves differs based on a number of factors.
// including whether the prperty is already present on the object or not

// If the property is present, the [[Put]] algorithm will roughly check:
// 1. Is the property an accessor descriptor, if so, call the setter, if any.
// 2. Is the property a data descriptor with "writable" of false, is so
// silently fail in non-strict mode, or throw TypeError in strict mode.
// 3. Otherwise set the value to the existing property as normal.
// If the property is not yet present on the object in question, the [[Put]]
// operation is event more complex..


// Getters and Setters
// The default Put and Get operations for objects completely control
// how values are are set to existing or new properties, or retrieved from exsting props.

//  ES5 introduced a way to override part of these default operations, not
// on an object level but per-property level through the use of getters/setters.
// Getters are properties that actually call a hidden function to retrieve a value
// Setters are properties that actually call a hdden function to set a value.
// When defining a property to have either a getter or setter, or both,
// its defenition becomes an "accessor descriptor"/"data descriptor"
// For  accessor descriptors, the value and writable characteristics of the descriptor
// are ignored, and instead JS considers the get and set characteristics of the property.
// Example:
var myObject = {
  get a() {
    return 2;
  }
};

Object.defineProperty(
  myObject, // target
  "b",      // protperty name
  {
            // define getter b
    get: function() {return this.a * 2},
    enumerable: true
  }
);

console.log(myObject.a); //2
console.log(myObject.b); // 4


// either through object-literal with "get a()" or through
// explicit defention defineProperty(), in both cases we created
// a property on the object that actually doesnt hold a value, but whose
// access automatically results in a hidden function call to the getter function.
// with whatever value it returns  being the result of the property access.

// since we only defned a getter for "a" if we try to set the value of later
// the "set" operation won't throw an error but will just silently throw
// the assignent away. Even if there was a valid setter, our custo getter is
// hardcoded to return only "2".

// Properties should be defined with setters. which override the default
// [[Put]] operation / "assignent" per-property, you most certainly want
// to declare both getters and setters


var myObject = {
  // define getter for 'a'
  get a() {
    return this._a_;
  },

  // define setter for 'a'
  set a(val) {
    this._a_ = val * 2;
  }
};

myObject.a = 2;
console.log(myObject.a); // 4

// in this example we store the specified value 2 of the assignment ([[Put]] operation)
// into  another variable '_a_.'. The name '_a_.' is purley by convention for this
// example and implies nothing special about its behaviour, - its a normal
// property like any other.

// Existance
// it is possible to ask an object if it has a certain property without
// asking to get that propertys value.

var myObject = {
  a: 2
};

console.log(("a"  in myObject)); // true
console.log(("b" in myObject)); // false
console.log(myObject.hasOwnProperty( "a" )); // true
console.log(myObject.hasOwnProperty( "b" )); // false

// The "in" operator will check to see f the property is in the object,
// or if it exists at any higher level of the [[Prototype]] chain object traversal
// hasOwnProperty(...) checks to see if only myObject has the property or not.



//Enumeration

var myObject = {};

Object.defineProperty(
  myObject,
  "a",
  // make 'a' enumberale as normal
  {enumberale: true, value: 2}
);

Object.defineProperty(
  myObject,
  "b",
  // make 'b' non-enumerable
  {enumerable: false, value: 3}
);

console.log(myObject.b); // 3
console.log(("b" in myObject)); // true
console.log(myObject.hasOwnProperty("b")); // true

for (var k in myObject) {
  console.log(k, myObject[k]);
};

// myObject.b has an accessible value, but it doesnt show up in a for .. in loop
// Thats because "enumerable" false.



// Anther way that enuerable and nonenumerable properties can be distinguished

var myObject = {};
Object.defineProperty(
  myObject,
  "a",
  // make 'a' enumerable as normal
  {enumerable: true, value: 2}
);

Object.defineProperty(
  myObject,
  "b",
  // make 'b' nonenumerable
  {enuerable: false, value: 3}
);

console.log(myObject.propertyIsEnumerable( "a" )); // true
console.log(myObject.propertyIsEnumerable( "b" )); // false

console.log(Object.keys ( myObject )); // ["a"];
console.log(Object.getOwnPropertyNames( myObject )); // ["a", "b"]

// propertyIsEnumerable(...) tests whether the given property name exists directly
// on the object and is also enumerable: true

// Object.keys(...) returns an array of all enumerable properties,
// whereas Object.getOwnPropertyNames(...) returns an array of all properties
// enumerable or not
// hasOwnProperty(...) differ in whether they consult the [[Property]] chain or not,
// Object.keys(...) and Object.getOwnPropertyNames(...) both inspect only the
// inderect object specified.
// Currently there is no way to get a list of all properties..


// Iteration
// The for ..in loop iterates over the list of enuerable properties on an object
// (includng its [[Prototype]] chain). But what if you instead want
// a standard for-loop like:

var myArray = [1,2,3];
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]); // 1 2 3
}
// this isnt iterating over the values, but iterating over the indices..
// where you then use the index to reference the value, as myArray[i]

//ES5 also added several iteration helpers for arrays,
// includng forEach(...), every(...) and some(...).
// Each of these helpers accepts a function callback to apply to each element
// in the array, differing only in how they respectively respond to a return
// value from the callback

// forEach(...) will iterate over all values in the array, and ignores any callback
// return values, every(...) keeps gong until the end or the callback returns
// a false (or "falsy") value, whereas some(...) keeps gong until the end or
// the callback returns a true or ("truthy") value.

// These special return values inside every(...) and some(...) act somewhat
// like a break statement insde a normal for loop, they stop the iteration
// early before it reaches the end.

// If you iterate on an object with a for..in loop you are also only
// getting at the values inderectly, because its actually iterating only
// over the enumerable properties of the object, leaving you to access the
// properties manually to get the values.


// what if we want to iterate over the values directly instead of the
// array indecies (or object properties) ? ES6 adds a for..of loop syntax
// for iterating over arrays (and objects, if the objects defines its own custom iterator)


var myArray = [1,2,3];

for (var v of myArray) {
  console.log(v); // 1 2 3
}


// the for..of loop asks for an iterator object of the thing to be iterated,
// and the loop then iterates over the succecssive return values from calling
// that iterator objects next() method, once for each loop iteration.

// arrays have abuilt-in @@iterator, so for..
/// But lets anually iterate the array, using the built-in @@ iterator:

var someArray = [1, 2, 3];
var it = someArray[Symbol.iterator]();

console.log(it.next()); // {value: 1, done: false}
console.log(it.next()); // {value: 2, done: false}
console.log(it.next()); // {value: 3, done: false}
console.log(it.next()); // {value: undefined, done: true}

// it is possible to define our own default @@iterator for any object
// example:

var myObject = {
  a: 2,
  b: 3
};

Object.defineProperty( myObject, Symbol.iterator, {
  enuerable: false,
  writable: false,
  configurable: true,
  value: function() {
    var o = this;
    var idx = 0;
    var ks = Object.keys( o );
    return {
      next: function() {
        return {
          value: o[ks[idx++]],
          done: (idx > ks.length)
        };
      }
    };
  }
});

// iterate manually
var it = myObject[Symbol.iterator]();
console.log(it.next()); // {value: 2, done: false}
console.log(it.next()); // {value: 3, done: false}
console.log(it.next()); // {value: undefined, done: true}

// iterate wit for..of
for (var v of myObject) {
  console.log(v); // 2 3
}

// we used Object.defineProperty() on myObject to define our custom
// @@iterator, but we could have declared it directly:
//myObject = {a:2, b:3, [Symbol.iterator]: function() {  }}

// Random generator

var randoms = {
  [Symbol.iterator]: function() {
    return {
      next: function() {
        return {
          value: Math.random() };
      }
    };
  }
};


var randoms_pool = [];
for (var n of randoms) {
  randoms_pool.push(n);
  console.log(n);
  if(randoms_pool.length == 100) break;
}

// Objects in JS have both a literal form such as:
// var a = {...} and a constructed form like: var = new Array(...)
// the literal form is almost always preferred, but the constructed form
// offers, in some cases more creation options

// Objects are one of the primitive types.
// objects have subtypes, including function and can be behaviour-specialized like
// [object Array] as the internal label representing the array object subtype.

// Objects are collections of key/value pairs. The values can be accessed as properties
// via the .propName or ["propName"] syntax. Whenever a property is accessed
// the engine actually invokes the internal default [[Get]] operation.

// Properties have certain characteristics that can be controlled through property descriptors, such
// as 'writable' and 'configurable', in addition objects can have their Immutability controlled
// to various levels of Immutability using object.preventExtensions(), Object.seal().. Object.freeze(...)
// properties dontt have to contains values, they can be accesor properties as well, with
// getters and setters. They can also be either enumerable or not, which controlls wheter they show
// up in for...loop iterations.




//
  PROTOTYPE
//

// Objects in javascript have an internal property, denoted in the specification
// as [[Prototype]], which is simply a reference to another object.
// Almost all objects are given a non-null value for this property at the time
// of their creation.

// It is possible fr an object to have an empty [[Prototype]] linkage, though this is less common

var myObject = {
  a: 2
};
console.log(myObject.a); // 2

// The default [[Get]] ioeration proceeds to follow the [[Prototype]] link if the object
// cannot find the requested property on the object directly.


var anotherObject = {
  a: 2
};

// create an object linkted to anotherObject()
var someObj = Object.create( anotherObject );
console.log(someObj.a); // 2

// So we have someObj that is now [[Prototype]] linked to anotherObject
// Clearly someObj.a doesnt actually exist, but nevertheless the property
// access succeeds (being found on anotherObj instead and finds value 2)

// but if 'a' werent found on anotherObj either, its [[Prototype]] chain,
// if nonempty, is again consulted and followed.
// The process continues untl ether a matchng property name is found,
// or the [[Prototyåe]]  chain ends. If no matching property is ever found
// by the end of the chain, the return result from the [[Get]] operation is undefined


// Smiliar to this [[Prototype]] chain lookup process, if you use
// for..in-loop to iterate over an object, any property that can be reached
// via its chain will be enumerated. If you use the 'in' operator to test
// for the existance of a property on an object, 'in' will check the entire chain of the
// object regardlesss of enumerability.

var anotherObject = {
  a:2
};

// create an object linked to 'anotherObject'
var myObject = Object.create( anotherObject );

for (var k in myObject) {
  console.log("found: ", k); // found 'a'
}

console.log(("a" in myObject)); // true

// Object.prototype
// Setting and shadowing properties

myObject.foo = "bar";


// if the myObject object already has a normal data accessor property called 'foo'
// directly present on it, the assignment is as smiple as changing the value of
// the existing property.
// If foo is not already present directly on myObject, the [[Prototype]] chan is traversed
// just like for the [[Get]] operation, if Foo is not found anywhere in the chain
// the property foo is added directly to myObject with the specified vaule as expected.

// if foo is already present somewhere hgher in the chain, behaviour can occur with the
// myObject.foo = "bar" assignent.

// If the property name of foo ends up both on myObject itself and at a higher level
// of the [[Prototype]] chain that starts at myObject, this is called 'shadowing'
// the foo property directly on myObject shadows any foo property that appears higher
// in the chain, because myObject.foo lookup would find the foo property thats lowest in the chain

// if foo is found higher on the [[Prototype]] chain and its a setter, then the
// setter will always be called, no foo will be added t0 myObject, nor will the foo setter
// be redefined.

// shadowing can even occur implicitly in subtle ways, care must be taken if
// trying to avoid it, example:

var anotherObject = {
  a: 2
};

var myObject = Object.create ( anotherObject );
console.log(anotherObject.a); // 2
console.log(myObject.a); // 2

console.log(anotherObject.hasOwnProperty("a"));  // true
console.log(myObject.hasOwnProperty("a")); // false

myObject.a++;
console.log(anotherObject.a); // 2
console.log(myObject.a); // 3

console.log(myObject.hasOwnProperty("a")); // true

// Though it may appear that myObject.a+++ should via delegation look up and
// just increment the anotherObject.a property itself in place,
// instead the ++ operation corresponds to myObject.a = myObject.a + 1;
// the result is [[Get]] looking up a property via [[Prototype]] to get the current
// value 2 from anotherObject.a, incrementing the value by one. then [[Put]] assigning
// the value 3 to a new shadowed property on myObject...

// Be careful when dealing with delegated properties that you modify.
// If you want to increment anotherObject.a, the only proper way os
// anotherObject.a++;


// "Class functions"
// there is a peculiar kind of behavior n js that has been shamelessly abused for years
// to hack something that looks like classes..

function Foo() {
  // ...
}

Foo.prototype // { }

// this object is often called "Foo's prototype" because we access it via a named
// Foo.prototype property reference

// The most direct way to explain this is that each object created from calling
// new Foo() will end up somewhat arbitrarily [[Prototype]] linked to this object.

function Foo() {
  //..
}
var a = new Foo();
console.log(Object.getPrototypeOf(a) === Foo.prototype); // true

// When 'a' is created by calling new Foo() one of the thing that happens is
// that 'a' gets an internal [[Prototype]] link to the object that Foo.Prototype is
// pointing at.

// In class-oriented languages multiple instances of a class can be made.
// But in Javascript there is no such copy actions performed.
// YOu dont create multiple instances of a class, you can create multiple objects
// that are [[Prototype]] linked to a common object. But by default no copying occurs.
// and thus these objects dont end up totally separate and disconnected from each other,
// but rather quite 'linked',

// new Foo() results in a new object, and that new object 'a is internally [[Prototype]]
// linked to the Foo.Prototype object. We end up with two objects, linked to each other.
// Thats it, we didnt instanciate a class, we certainly did not do any copying,
// we justed caused two object to be linked to each other.

// In javascript we dont make copies from one object ("class")  to anther ("instance")
// we make links between objects. FOr the [[Prototype]] mechanism, visually, the arrows
// move from right to left, and from bottom to top.
// This mechanism is often called prototypal inheritance.





// Constructors
function Foo() {
  // ...
}
var a = new Foo();

// What leads us to think that Foo is a class?
// For one we see the use of the 'new' keyword, for another it appears that we are
// in fact executing a constructor method of a class because Foo() is actually
// a method that gets called just like how a real class's constructor gets called when instantiated.



function Foo() {
  // ...
}

console.log(Foo.prototype.constructor === Foo); // true
var a = new Foo();
console.log(a.constructor === Foo); // true

// The Foo.prototype object by default gets a public nonenumerable propery called
// .constructor, and this property is a reference back to the function Foo that the object
//is associated with. Moreover we see that object 'a' created by the constructor call new Foo()
// seems to also have a property on it called .constructor, which similarly points to
// the function which created it.



// Functions themselves are not functions, however when you put the 'new'
// keyword in front of a normal function call, that makes that function call
// a constructor call, in fact 'new' sort of hijack any normal function and
// calls it in a fashion that constructs an object


function NothingSpecial() {
  console.log("Constructor call");
}

var a = new NothingSpecial(); // "Constructor call"

// Functions arent constructors, but function calls are constructor calls
// if and only if 'new' is used.


// Mechanics
// JS developers have strived to simulate as much as they can f class orientaton

function Person(name) {
  this.name = name;
}

Person.prototype.name = function() {
  this.name = name;
}

var john = new Person("john");
console.log(john.name); // "john"

// This snippet shows additional "class orientation" tricks
// this.name = name adds the .name property onto object 'john'.

 // Foo.prototype.name = ... is perhaps the more interesting technique, this
 // adds a property (function) to the Person.prototype object making
 // john.name work.


 // in the previous snippet its stronlgy tempting to think that when john is created
 // the properties/functions on the Person.prototype object are copied over
 // to john object, however thats not what happens.

 // John ends up with an internal [[Prototype]] linkage to Person.prottotype.
 // When name is not found n john, its instead found (through delegation) on Person.prototype

 // "Constructor" Redux
 // it seems like john.constructor === Person being true means that that
 // john has an actual .constructor peroperty on it, pointing to Person? Not correct..
 // This is just unfortunate confusion, in actuality the .constructor reference
 // is also  delegated up to Person.prototype which happens to, by default have
 // a .constructor that points to Person.

// It seems conventient that an object 'john' 'constructed by' Person would
// have access to person.constructor  property that points to Person...
// But thats nothing more than a false sense of security. It a happy accident, almost
// tangentially, that john.constructor HAPPENS to point at Person via this default
// [[Prototype]] delegation.

// the .constructor property on Person.prototype is only there by default on the
// object created when Person the function is declared.
// If you create a new object and replace a functions default .prototype object reference
// the new object will not by default magcally get a .constructor on it.
// example:


function Foo() { }
Foo.prototype = { }
var a1 = new Foo();
console.log(a1.constructor === Foo); // false
console.log(a1.constructor === Object); // true

// Object(..) did not construct a1? it sure seems like Foo()
// constructed it, most developers think of Foo() as doing the construction
// but where everythng falls apart is when you think "constructor" means
// "was contructed by", because by that reasoning a1.constructor should be Foo,
// but it isnt.

// a1 has no .constructor property, so it delegates up the [[Prototype]] chain to
// Foo.prototype. But that object doesnt have a .constructor ether, so it keeps
// delegating, this time up to Object.prototype, the top of the delegation chain,
// that object indeed has a .constructor on it, which points to the default Object(..) function
// Of course you can add .constructor back to the Foo.prototype object, but this takes
// manual work, especially if you want to match native behaviour and have it be nonenumerable
// example:


function Foo() { };
Foo.prototype = { }; // creates a new prototype object
// properly fix the missing .constructor property on the new object serving as Foo.prototype

Object.defineProperty( Foo.prototype, "constructor", {
  enumerable: false,
  writable: true,
  configurable: true,
  value: Foo // point '.constructor' at 'Foo'
});

var a1 = new Foo();
console.log(a1.constructor == Foo); // true

// all we are really doing s perpetuating the misconception that "constructpr"
// means "was constructed by"...
// The fact is .constructor on an object arbitrarily points, by default at
// a function that, reciprocally has a reference back t the object -
// a reference that it calls .prototype. The words "constructor" and "prototype"
// only have loose default meanng that ight or might not hold true later.
// The best thing to do is remind yourself that "constructor" does not mean "constructed by".
// a1 constructor is extremly unreliable and its an unsafe reference
// to rely upon in your code. Generally such reference should be avoided when possible.


// Prototypal inheritance
// Prototype-style

function Person(name) {
  this.name = name;
}

Person.prototype.name = function() {
  return this.name;
}

function User(name, id) {
  Person.call(this, name);
  this.id = id;
}

// here we make a new User.prototype linked to Person.prototype
User.prototype = Object.create( Person.prototype );

User.prototype.id = function() {
  return this.id;
};

var admin = new User("john", "1");
console.log(admin.name); // john
console.log(admin.id); // 1

// The important part is User.prototype = Object.create(...)
// tHE CALL TO Object.create creates a "new" object out of thin air, and links
// the new objects internal [[Prototype]] to the oject you specify (User.prototype)
// In other words that line says "make a new USer.prototype thats linked to Person.prototype"

// WHen function User() is declared, User like any other function has a .prototype
// link to its default object, but that object is not linked to Person.prototype
// like we want. So we create a new object that is linked as we want.

// A common misconception here is that either of the following approaches would
// also work, but they do not work as you expect:

// this doesnt work like we want ..
User.prototype = Person.prototype;

// works kinda like we want but with sideeffect we do not want
User.prototype = new Person();


// User.prototype = Person.prototype doesnt create a new object for User.prototype
// to be linked to. It just makes User.prototype another reference to Person.prototype
// which effectively links User directly to the same object to which Person links: Person.prototype
// This means when you start assigning, like User.prototype.id = "" you are odifying not
// a separate object but the shared User.prototype object itself,which
// would affect any objects linked to Person.prototype.
// If this is what we want, then we likely dont need User at all, and should
// use Person and make the code simpler.

//User.prototype = new Person() does in fact create a new object that is
// duly linked to Person.prototype as we want, but it used the Person() constructor
// call to do it.

// so we are left with using Object.create(..) to make a new object thats properly linked.


// Pre-ES6
// Throws away the default existing Bar.prototype
Bar.prototype = Object.create(Foo.prototype);

// ES6+
// modifies existing Bar.prototype
Object.setPropertyOf(Bar.prototype, Foo.prototype);


// Inspecting "Class" relationships
// If we have an object and want to find out what object it delegates to,
// inspecting an instance (just an object in js) for its inheritance ancestry
// (delegation linkage in js) is oftren called instrospection / reflection
// in class-oriented enviroments.
// example:

function Foo() {
  // ..
}
Foo.prototype.blah = "blah blah";
var a = new Foo();

console.log((a instanceof Foo)); //  True


// The instanceof operator takes a plain object as its lefthand operand
// and a function as its righthand operand. The question nstanceof answer is:
// in the entire [[Prototype]]chain of a, does the object arbitrarily pointed
// to by Foo.prototype ever appear?
// This means that you can only inquire about the "ancestry" of some object (a)
// if you have some function to test with.


// THs sinppet illustrates the ridiculosness of trying to reason about
// relationships between two objects using "class" semantics and instanceof:

// helper utility to see if o1 is related to o2
function isRelatedTo(o1, o2) {
  function F() {}
  F.prototype = o2;
  return 01 instanceof F;
}

var a = {};
var b = Object.create( a );

console.log(isRelatedTo(b, a)); // False


// Creating Links
// Whats the point of the [[Prototype]] mechanism?
// Why is it so comon for JS developers to get so much effort emulating
// classes in ther code to wire up these linkages?

// We said Object.create(..) would help us out, example:

var foo = {
  something: function() {
    console.log("something");
  }
};

var bar = Object.create( foo );
bar.something; // something

// Object.create(...)  creates a new object bar linked to the object we specified (foo)
// which gives is all the power (delegation) of the [[Prototype]] mechanism,
// but without any of the unnecessary complication of new functions acting as classes
// and constructor calls, confusing .prototype and .constructor references.

// Oject.create(null) creates an object that has an empty [[Prototype]] linkage,
// and thus the object cant delegate anywhere. Since such an object has no
// prototype chain. The instanceof operator has nothing to check, so it
// will return false. These specal empty [[Prototype]] objects are often
// called dictionaries as they are typically used purley for storing data in properties.
// Mostly because they have no possible surprise effects from any delegated
// properties / functions on the get [[Prototype]]  chain, and are thus purley flat data storage.


// We dont need classes to create meaningful relationshops between two objects.
// The only thing we should really care about is obects lined togeheter for
// delegation, and Object.create(...) gives is that linkage without all class stuff.


// Object.create() polyfill
// Object.create() was added in ES5, we might need to support PRE ES5 enviroments .

if(!Object.create) {
  Object.create = function(o) {
    function F(){}
    F.prototype = o;
    return new F();
  };
}

// This polyfill works by throwaway F function, and we override its .prototype
// property to point to the object we want to link to Then we use F() construction
// to make a new object that will be linked as specified.


// For copleteness lets look at that additinal functionallity

var anotherObject = {
    a:2
};

var myObject = Object.create ( anotherObject, {
  b: {
    enumerable: false,
    writable: true,
    configurable: false,
    value: 3
  },
  c: {
    enumerable: false,
    writable: false,
    configurable: false,
    value: 4
  }
});

console.log(myObject.hasOwnProperty("a")); // false
console.log(myObject.hasOwnProperty("b")); // true
console.log(myObject.hasOwnProperty("c")); // true

console.log(myObject.a); // 2
console.log(myObject.b); // 3
console.log(myObject.c); // 4

// The second argument to Object.create(..) specifies property names to add
// to the newly created object, via declaring each new properties property descriptor.
// Because polyfilling property descriptors into PRE-ES5 is not possible, this
// additional functionality on Object.create(..) cannot be polyfilled.

// In ES5 enviroment instead of polyfilling you should ue a custom utillity, and
// stay away from using the name Object.create entirely. You could instead
// define your own utility. Example:

function createAndLinkObject(o) {
  function F(){}
  F.prototype = o;
  return new F();
}

var anotherObject = {
  a:2
};

var myObject = createAndLinkObject( anotherObject );
console.log(myObject.a); // 2




// CLas design pattern
// The class design pattern encourages you to method overriding to get
// ost out of inheritance


Task = {
  setID: function() { this.id = ID; },
  outputID: function() { console.log( this.id ); }
}

// make XYZ delegate to Task
XYZ = Object.create( Task );

XYZ.prepareTask = function(ID, Label) {
  this.setID( ID );
  this.label = Label;
};

XYZ.outputTaskDetails = function() {
  this.outputID();
  console.log(this.label);
};

// In this code. Task and XYZ are not classes (or functions) theyare just
// objects, XYZ is set up via Object.create(..) to [[Prototype]]-delegate to the
// task object
// AS compared to class orientation we can call this stile of code OLOO
//(objects linked to other objects)
// All we really care about is that XYZ object delegates to the Task object
// IN javascript the [[Prototype]] mmechanism links objects to other objects,
// there are no abstract mechanisms like "classes",
// Some other differences to note with OLOO style code:

// 1. Both the id and label data members fro the previous class-example
// are data properties directly on XYZ (neither in Task)
//In general with [[Prototype]] delegation, you want stsate to be on the delegators
// XYZ, not the delegate Task.

// 2. With the class design pattern we intentoinally named output Task the same
// on both parent (Task) and child (XYZ) so that we could take advantage of
// overriding. In behaviour delegation, we do the opposite, we  avoid if at all
// possible naming things the sae at dfferent levels of the [[Prototype]] chain
//(called shadowing) because having those name collisions creates awkard syntax.

// The design pattern calls for less use of general ethod names that are prone
// to overriding and instead more uue of descriptive method names, specific to
// the type of behaviour each object is doing. Thi can actually create easier to understand
// / maintain  code, because names of methods are more obvious / self-documenting.

// 3. thi.setID(ID); inside of a method on the XYZ object first looks on XYZ for setID(..)
// but ince it doesnt find a ethod of that name on XYZ, [[Prototype]] delegation means
// it can follow the link to Task to look fir setID(..), which it of course finds.


// Lets examine some more theoretical Foo/Bar code, and compare
// both ways (OO versus OLOO) of implementing the code.
// The first snippet uses the classical ("prototypal") OO-style:

function Foo(who) {
  this.me = who;
};

Foo.prototype.identify = function() {
  return "I am " + this.me;
}

function Bar(who) {
  Foo.call( this, who);
}
Bar.prototype = Object.create ( Foo.prototype );

Bar.prototype.speak = function() {
  console.log("Hello " + this.identify() + ".");
};

var b1 = new Bar("b1");
b1.speak();

// Parent class Foo is inherited by child clas Bar, which is instantiated once
// as b1, b1 delegates to bar.prototype, which delegates to Foo.prototype.
// Lets implement the sae functionality using OLOO-style.


Foo = {
  init: function(who) {
    this.me = who;
  },
  identify: function() {
    return "I am " + this.me;
  }
}

Bar = Object.create(Foo);

Bar.speak = function() {
  console.log("Hello, " + this.identify() + ".");
};

var b1 = Object.create(Bar);
b1.init("b1");
b1.speak();


// We take exactly the sae advantage of [[Prototype]] delegation from
// b1 to Bar to Foo as we did in the previous snippet betweet b1, Bar.prototype
// and Foo.prototypr, we still have the three objects linked together.

// Classes versus objects
// Lets now look at more concrete code scenarios to show howd you actually
// use these ideas. Well first examine a typical scenario in frontend web-deb
// Creating UI widgets (buttons, drop-downs etc)


// Widget "classes"


// Parent class
function Widget(width, height) {
  this.width = width || 50;
  this.height = height || 50;
  this.$elem = null;
}

Widget.prototype.render = function($where) {
  if (this.$elem) {
    this.$elem.css( {
      width: this.width + "px",
      height: this.height + "px"
    }).appendTo($where);
  }
};

// Child class
function Button(width, height, label) {
  // "super" constructor call
  Widget.call( this, width, height);
  this.label = label || "Default";

  this.$elem = $( "<button>" ).text(this.label);
}
//make button "inherit" from 'widget'
Button.prototype = Object.create( Widget.prototype );

// override base "inhertied" 'render(..)'
Button.prototype.render = function($where) {
  // super call
  Widget.prototype.render.call( this, $where );
  this.$elem.click( this.onClick.bind( this ) );
};

Button.prototype.onClick = function(evt) {
  console.log("Button " + this.label + " clicked");
}

$(document).ready(function() {
  var $body = $(document.body);
  var btn1 = new Button( 125, 30, "hello");
  var btn2 = new Button( 125, 30, "world");

  btn1.render($body);
  btn2.render($body);
});


// ES6 Class sugar
// Lets implement the same code using class

class Widget {
  constructor(width, height) {
    this.width = width || 50;
    this.height = height || 50;;
    this.$elem = null;
  }
  render($were) {
    if($elem) {
      this.$elem.css({
        width: this.width + "px",
        height: this.heght + "px"
      }).appendTo($where);
    }
  }
}
class Button extends Widget {
  constructor(width, height, label) {
    super(width, height);
    this.label = label || "default";
    this.$elem = $( "<button>" ).text( this.label );
  }
  render($where) {
    super($where);
    this.$elem.click(this.onClick.bind(this));
  }
  onClick(evt) {
    console.log("button " + this.label + " clicked");
  }
}
$(document).ready(function() {
  var $body = $(document.body);
  var btn1 = new Button( 125, 30, "hello");
  var btn2 = new Button( 125, 30, "world");

  btn1.render($body);
  btn2.render($body);
})


// Delegating widget objects
// Here a simpler Widget/button example usng OLOO-sstyle delegation

var Widget = {
  init: function(width,heght) {
    this.width = width  || 50;
    this.height = height  || 50;
    this.$elem = null;
  },
  insert: function($where) {
    if (this.$elem) {
      this.$elem.css({
        width: this.width + "px",
        height: this.height + "px"
      }).appendTo($where);
    }
  }
};

var Button = Object.create(Widget);

Button.setup = function(width, height, label) {
  // delegate call
  this.int(width, height);
  this.label = label || "default";

  this.$elem = $("<button>").text(this.label);
};

Button.build = function($where) {
  // delegate call
  this.inser($where);
  this.$elem.click(this.onClick.bind(this));
};
Button.onCLick = function(evt) {
  console.log("Button " + this.label + "");
};
$(document).ready(function() {
  var $body = $(document.body);
  var btn1 = Object.create(Button);
  btn1.setup(125, 30, "hello");
  btn1.build($body);
});



//With this OLO style we dont think of widget as a parent and Button as a child.
// Rather Widget is just an object and is sort of a utility collection that any
// specific type of widget might want to delegate to, and Button is also just a
// standalone object (width delegation link t widget)


// Simpler design
// Following the typical  class design attern, well put the base functionality of the
// task in a class called Controller, and then well derive two child classes,
// LoginController and AuthController, which both inhert from Controller,
// and specialize soe of thse base behaviours:


// Parent class

function Controller() {
  this.errors = [];
}
Controller.prototype.showDialog = function(title, msg) {
  // display title & message to user in dialog
};
Controller.prototype.success = function(msg) {
  this.showDialog("Success", msg);
};
Controller.prototype.failure = function(err) {
  this.errors.push(err);
  this.showDialog("Error: ", err);
};

// Child class
function LoginController() {
  Controller.call( this );
}
// Link child class to parent
LoginController.prototype = Object.create( Controller.prototype );

LoginController.prototype.getUser = function() {
  return document.getElementById( "login_username" ).value;
};
LoginController.prototype.getPassword = function() {
  return document.getElementById( "login_password" ).value;
};
LoginController.prototype.validateEntry = function(user, pw) {
  user = user || this.getUser();
  pw = pw || this.getPassword();

  if(!(user && pw)) {
    return this.failure("please enter a username & password");
  }
  else if (pw.length < 5) {
    return this.failure("password must be 5+ characters");
  }
  // validated user
  return true;
};

// override to extend base 'failure()'
LoginController.prototype.failure = function(err) {
  // super call
  Controller.prototype.failure.call(this, "login invalid: " + err);
};

// Child class
function AuthController(login) {
  Controller.call( this );
  // In addition to inheritance, we also need composition
  this.login = login;
}
// link child class to parent
AuthController.prototype = Object.create( Controller.prototype );
AuthController.prototype.server = function(url, data) {
  return $.ajax({
    url: url,
    data: data
  });
};

AuthController.prototype.checkAuth = function() {
  var user = this.login.getUser();
  var pw = this.login.getPassword();

  if(this.login.validateEntry( user, pw )) {
    this.server( "/check-auth" , {
      user: user,
      pw: pw
    })
    .then( this.success.bind( this ))
    .fail( this.failure.bind( this ));
  }
};
// Override to extend base 'success()'
AuthController.prototype.success = function() {
  // Super call
  Controller.prototype.success.call( this, "Authenticated" );
};

// Override to extend base 'failure()'
AuthController.prototype.failure = function(err) {
  // super call
  Controller.prototype.failure.call( this, "Auth failed: " + err);
};

var auth = new AuthController(
  new LoginController()
);
auth.checkAuth();





// Types
// Undefined, Null, Boolean, String, Number, Object, Symbol(added in ES6)
// ALl of the Types above are called "primitives", except for object

console.log(typeof undefined); // undefined
console.log(typeof true); // boolean
console.log(typeof 42); // number
console.log(typeof "42"); // string
console.log(typeof { life: 43 }); // object
console.log(typeof Symbol()); // symbol
// null is still bugged out ... shows up as object
console.log(typeof function a(){}); // function

// function is a subtype of object, a function is refferred to as a "callable object"
// an object that has an internal [[Call]] property that allows it to be invoked
// the fact that function are actually objects is quite useful, most importantly
// they can have properties, example:

function a(x,y) {
  // ...
}
// function object has a length property set to the number of formal parameters its delcared with
console.log(a.length); // 2

// arrays are objects, numerically indexed
console.log(typeof [1,2,3]); // object

// Value as Types
// In JS variables do not have types, values has types, variables can hold values
// undefined vs "undeclared"
// Variables that have no value currently actually have the undefined value
// Calling typeof against such a variable will return "undefined"

var z;
console.log(typeof z); // undefined

// An undefined variable is one that has been declared in the accessible scope
// but at the moment has no other value in it. By contrast an "undeclared" variable
// is one that has not been formally declared in the accessible scrope, example:
var p;
console.log(p); // undefined
//console.log(k); // ReferenceError: k is not defined
// undefined and not defined are very different things.

// the typeof operator returns "undefined" even for "undeclared"/"not defined" variables
var o;
console.log(typeof o); // undefined
console.log(typeof l); // undefined

// as simple example, imagine having a "debug mode" in your program that is controlled
// by a global variable (flag) calld DEBUG, youd want tot check if that variable was
// delcared before performing a debug task like loggin a message to the console.
// A top-level global var DEBUG = true delaration would only be included in a
// debug.js file, which you load only into the browser when youare in development/testing
// and not in production

// Ops this would throw an error
 /*
if (DEBUG) {
  console.log("Debugging is starting");
}
 */
/*
// this is a safe existence check
if (typeof DEBUG != "undefined") {
  console.log("Debugging is starting");
  atob = function() {}
}

if (typeof atob === "undefined") {
  atob = function(){};
}

// another way of doing these checks against global variables but without safety
// guard feature of typeof is to observe that all global variables are also properties
// of the global object, whch in the briwser is basically a window object.
// so the above checks could have been done as:

if (window.DEBUG) {
  console.log("if (window.DEBUG) {}");
}

if (!window.atob) {
  console.log("if (!window.atob) {}");
}


// unlike referencing undeclared variables, there is no ReferenceError thrown if you
// try you try to access an object property that doesnt exist
// The safety guard on typeof is useful even if you are not using global variables
// Imagine a utility function that you want others to copy-paste into ther programs
// or modules, in which you want to check to see f the including program has defined
// a certain variable so you can use it or not, example:
function doFoo() {
  var helper = (typeof FeatureX !== "undefined") ? FeatureX : function() { }
  var val = helper();
  //
}
// doFoo tests for a variable called FeatureX and if found uses it, if not uses its own

// Some developers would prefer a design called "dependecy injection" where instead
// of doFoo() inspecting implicitly for FeatureX to be defined outside/around it,
// it would need to have the dependecy explicitly passed in like:

function doBar() {
  var helper =  FeatureX || function() {}
  var val = helper();
}

// Values
// Arrays

// Arrays in JS are just containers for any type of value, even other arrays, (multidimensional arrays)
var a = [1, "2", [3]];
console.log(a.length);


// Using delete on an array value will remove that slot from the array
// but even if you remove that final element, it does not update the length property

// arrays are numerically indexed, but the tricky thing is that they also are objects
// that can have string keys/properties added to them which not count towards the length

var a = [];
a[0] = 1;
a["foobar"] = 2;
console.log(a.length); // 1
console.log(a["foobar"]); // 2
console.log(a.foobar); // 2

// A gotcha to be aware of is that if a string vaalue intended as a key can be coerced
// to a standard base 10-value number, then it is assumed that you wanted to use
// a number index rather than as a string key
var a = [];
a["13"] = 42;
console.log(a.length); // 14

// Array-Likes
// There will be occasions where you need to convert an array-like value
// into a true array, usually so you can call array utilities like indexof() concat()
// forEach() etc..

// Various DOM query operations return lists of DOM elements that are not true arrays
// but are array-like enough for our conversion purposes, another common example is when
// functions expose the arguments object (as of ES6 deprecated) to access the argument list
// a very common way to make such a conversion is to borrow the slice() utility against the value

function foo() {
  var arr = Array.prototype.slice.call(arguments);
  console.log(arr);
}
foo("foo", "bar", "baz"); // ["foo", "bar", "baz"]
// if slice() is called without any other parameters as it effectively is
// in the above snippet, the default values for its parameters have the effect of
// duplicating the array (or in this case array-like)

// As of ES6 theres also a built-in utility called Array.from(..) that can do the same taks
function foo() {
  var arr = Array.from(arguments)
  console.log(arr);
}
foo("foo", "bar", "baz"); // ["foo", "bar", "baz"]

// Strings
// JS strings are really not the same as arrays of character,
// exaple:

var a = "foo";
var b = ["f", "o", "o"];

// strings do have a shallow reseblance to arrays, they are array-likes as above
// FOr instance both of the have a length property, an indexOf(..) and concat(..)

console.log(a.length); // 3
console.log(b.length); // 3
console.log(a.indexOf("o")); // 1
console.log(b.indexOf("o")); // 1

var c = a.concat("bar")
var d = b.concat(["b", "a", "r"]);
console.log(c); // foobar
console.log(d); // ["f", "o", "o", "b", "a", "r"]

a[1] = "O";
b[1] = "O";
console.log(a); // foo
console.log(b); // ["f", "O", "o"]

// Strings are immutable, while arrays are qute mutable. Moreover the a[1] character
// position access from was not always valid javascript. Older versions of IE did not
// allow that syntax (now they do) Intead the correct approach has been a.charAt(1)

// A further consequence of immutable strings is that none of the string methods that alter
// its contents can modify in-place, but rather must create a return new strings,
// by contrast many of the array methods that can change array contents actually do modify
// in-place

c = a.toUpperCase();
console.log(a === c); //false
console.log(a); // foo
console.log(c); // FOO

b.push("!")
console.log(b); // ["f", "O", "o", "!"]

// Also, many of the array methods that could be helpful when dealing with string
// are not actually available for them, but we can borrow nonmutation array methods

console.log(a.join); // undefined
console.log(a.map); // undefined

var c = Array.prototype.join.call( a, "-");
var d = Array.prototype.map.call( a, function(v) {
  return v.toUpperCase() + "."
}).join( "" );

console.log(c); // f-o-o
console.log(d); // F.O.O.


// Another example, reversing a string. Arrrays have a reverse() in-place mutator
// method but strings do not

console.log(a.reverse); // undefined
console.log(b.reverse()); // ["!", "o", "O", "f"]
// the "borrowing" does not work with array mutators, because strings are immutable
// and thus  cant be modified in place

// Another workaround is to convert the string into an array, perform the desire
// operation, then convert it back to a string, example:


//split 'a' into an array of characters, reverse the array of characters,
// join the array of characters back to a string
var c = a.split("").reverse().join("");
console.log(c); // oof


// Numbers
// Javascript has only one numeric type, number. THis type includes both
// integer values and fractional decimal numbers.
// 42.0 is just as much an integer as 42
// The implementation of JS numbers is based on the "IEEE 754 standard",
// often called "floating-point". Javascript specifically uses the
// "double precision" format, aka 64-bit binary

// numeric syntax
// number literals are expressed in javascript generally as base-10 decimal literals
// example:
var a = 42;
var b = 42.3;

// The leading portion of a decimal value, if 0, is optional:
var a = 0.42;
var b = .42;

// Simlilarly the trailnig portion (the fractional) of a decimal value after the
// . if 0, is optional:
var a = 42.0;
var b = 42.;

// By default most nubers will be outputted as a base-10 decimals, with
// trailing fractional 0s removed.


// Because number values can be boxed with the number object wrapper
// number values can access methods that are built into the number.prototype
// FOr example the toFixed(...) method allows you to specify how many fractional
// decimal places youd like the value to be represented with
var a = 42.59;
console.log(a.toFixed(0)); // 43
console.log(a.toFixed(1)); // 42.6
console.log(a.toFixed(2)); // 42.59
console.log(a.toFixed(3)); // 42.590
console.log(a.toFixed(4)); // 42.5900

// notice that the output is actually a string representation of the number, and
// that the value is 0-padded on the righthand side if you ask for more decimals
// then the value holds, toPrecision(..) is similiar but specifies how many significant
// digits should be used to represent the value

var a = 42.59;
console.log(a.toPrecision(1)); // 4e+1
console.log(a.toPrecision(2)); // 43
console.log(a.toPrecision(3)); // 42.6
console.log(a.toPrecision(4)); // 42.59


// You dont have to use a variable with the value in it to access these methods
// you can access these methods directly on the number literals.
// BUt you have to be carefukl with the '.' operator since '.' is a valid
// numeric chartacter. it will first be interpreted as part of the number literal
// if possible, instead of being interpreted as a property accessor

//console.log(42.toFixed(3)); // Syntax Error

console.log((42).toFixed(3)); // 42.000
console.log(0.42.toFixed(3)); // 0.420
console.log(42..toFixed(3)); // 42.000

// 42.toFixed(3) is invalid syntax, because tje . is swallowed up as
// part of the 42. literal, and so then theres no . property operator
// present to make the .toFixed access

// 42..toFixed(3) works because the first . is part of the number and the second
// . os the property operator. Looks ugly though
// This is also technically valid..
console.log(42 .toFixed(3)); // 42.000


// number literals can also be specified in exponent form, which is common
// when representing large numbers, example:
var onethousand = 1E3;
var onemillionhundredthousand = 1.E6;
console.log(onethousand); // 1000
console.log(onemillionhundredthousand); // 1000000

// number literals can also be expressed in other bases, like binary-octal
// and hexadecimal
console.log(0xf3); // 243
console.log(0363); // 243

// Starting with ES6+ strict mode, the 0363 form of octal literals is no loger allowed
// The 0363 form is still allowed in non-strict-mode. But you should stop using
// it anyway, to be future friendly, and because you should be using strict-mode.

// as of ES6 the following forms are also valuid:
console.log(0o363); // 243
console.log(0b11110011); // 243

// small decial values
// The most (in)famous side effect of using binary floating-point numbers
// is:
console.log(0.1 + 0.2 === 0.3); // false

// Now the question is, if some numbers cant be trusted?
// there are some applications where you need to be more careful,
// especially when dealing wth fractional decimal values.
// The mmost accepted practise is to use a "tiny rounding error" value as tolerance
// For comparison. Ths tiny value is often called "machine epsilon"

// As of ES6 Number .EPSILON is predefined with this tolerance value,
// so youd want to use it, but you can safely polyfill the definition for pre-ES6

if(!Number.EPSILON) {
  Number.EPSILON = Math.pow(2,-52);
}

// We can use this Number.EPSILON to compare two numbers for "equality"
// within the rounding error tolerance

function numbersCloseEnoughToEqual(n1, n2) {
  return Math.abs( n1 - n2 ) < Number.EPSILON;
}

var a = 0.1 + 0.2;
var b = 0.3;
console.log(numbersCloseEnoughToEqual(a, b)); // true
console.log(numbersCloseEnoughToEqual(0.0000001, 0.0000002)); // false

// The maximum floating point value that can be represented is roughly
// 1.798e+308, predefined for you as Number .MAX_VALUE. On the small end,
// Number.MIN_VALUE is roughly 5e-324, whch isnt negative but close to zero.

// Safe integer ranges
// Because of how numers are representedmthere is a range of "safe" values for
// the whole number integers, and its significantly less than Number.MAX_VALUE.

// THe maximum integer that can be safely represented is 2^53 - 1
// which is around 9 quadrillion.

// This value is actually automatically predefined in ES6, as Number.MAX_SAFE_INTEGER.
// there is also a minimum value, Number.MIN_SAFE_INTEGER.

// Testing for integers
// To test if a value is an integer you can use the ES6-specified Number.isInteger(..)

console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.000)); // true
console.log(Number.isInteger(42.3)); // false

// Polyfill isInterger()

if (!Number.isInteger) {
  Number.isInteger = function(num) {
    return typeof num == "number" && num % 1 == 0;
  };
}

// to test if a value is a safe integer, use the ES6 specified Number.isSafeInteger(...)

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
console.log(Number.isSafeInteger(Math.pow(2, 53))); // false
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1)); // true

// polyfill isSafeInteger()

if (!Number.isSafeInteger) {
  Number.isSafeInteger = function(num) {
    return Number.isInteger(num) &&
        Math.abs(num) <= Number.MAX_SAFE_INTEGER;
  };
}

// Special Values
// Certain values such as NAN and Infinity are not 32-bit safe

// Nonvalue values
// Undefined type value is undefined, null type value is null,
// we could say that null is an empty value and undefined is a missing value
// Null is a special keyword, not an identifier and thus you can not treat it as a variable
// to assign to, the undefnied is however an identifier ...

// Undefined
// in none strict-mode its actually possile to assign a value to the globally provided
// undefined identifier..

function foo() {
  undefined = 2; // bad idea
}

foo();

function foo() {
  "use strict"
  undefined = 2; // TypeError: Cannot assign to read only property 'undefined' of object '#<constructor>'
}



// in both strict and non strict mode however you can create a local variable of the name
// undefined, but again its a terrible idea:

function foo() {
  "use strict"
  var undefined = 2;
  console.log(undefined);
}
foo();

// void operator
// undefined is a bult int identifier thtaa holds the built in undefined value
// another way to get this value is the void operator

// The expression void -- "voids" out any value, so that the result of the
// expression is always the undefined value, ot doesnt modify the
// existing value, it just ensures that no value comes back from the expression:

var a = 42;
console.log(void a); // undefined
console.log(void a, a); // undefined 42

// Bu convention to represent the undefined value standalone by using void,
// youd use void 0, there is no practical difference between void 0, void 1 and Undefined

// But the void operator can be useful in a few other curcustances. If you need to ensure
// that an expression has ni result value, example:

function foo() {
  // note: APP.ready is provided by our application
  if (!APP.ready) {
    // try again later
    return void setTimeout(foo, 100);
  }
  var result;
  return result;
}

if (foo()) {
  // handle next task right away
  console.log("ready");
}




// Special Numbers
// The number type includes several special values.
// Any mathematical operation you perform without both operands being a number
// (or values that can be interpreted as regluar numbers in base 10/16 will result
// in the operation failing to produce a valud number, in which case you will get NaN value)
// Nan means "not a number", It easier to think of Nan as being an invalid number
// than to thnk of it as "not a number"

var a = 2 / "foo"; // valid
typeof a === "number" // true
console.log(a); // NaN

// in other words, "type not a number is a number" ..
// If you have a value in some variable and want to test to see if its this
// special failed number NaN, you might think you could directly compare to NaN
// itself, as you can with other values, like null or undefined, but nope..

var a = 2 / "foo";
console.log(a == NaN); // false
console.log(a === NaN); // false

// NaN is a very special value in that its never equal to another NaN value.
// Its the only value that is not reflexive, so:
console.log(NaN !== NaN) // true

// but this works:

var a = 2 / "foo";
console.log(isNaN(a)); // true

// but the isNan(..) utility has a fatal flaw, it appears it tried to take the
// meaning of NaN to literally, that its job is basically:
// "test if the thing passed in is either not a number or is a number"
// but thats not quite accurate

var a = 2 / "foo";
var b = "foo";

console.log(window.isNaN(a)); // true
console.log(window.isNaN(b)); // true

// As of ES6 a replacement utility has been provided: NUmber.isNan(..)
// A simple polyfill:

if (!Number.isNaN)  {
  Number.isNaN = function(n) {
    return (
      typeof n === "number" && window.isNaN( n )
    );
  };
}

var a = 2 /  "foo";
var b = "foo";

console.log(Number.isNaN(a)); // true
console.log(Number.isNaN(b)); // false



// We can implement NUmber.isNaN even easier by taking advantage of that peculiar fact that
// NaN isnt equal to itself. NaN is the only value in the language where thats true.

if(!Number.isNaN) {
  Number.isNaN = function(n) {
    return n !== n;
  };
}

// Infinities
// in Javascript it is possible to divide by zero, the operation is well-defined
// and reults in the value infinity, aka Number .POSITIVE_INFINITY

var a = 1 / 0;
var b = -1 / 0;

console.log(a); // Infinity
console.log(b); // -Infinity

// JS uses finite numeric representations IEEE 754 floating-point,
// so contrary to pure mathematics, it seems it is possible to overflow even with an
// operation like addition or subtraction, in which case youd get infinity / -infinity
// example:

var a = Number.MAX_VALUE; // 1.7976931348623157e+308
a + a; // Infinity    // infinity
a + Math.pow(2,970); // Infinity
a + Math.pow(2,969); // 1.7976931348623157e+308

// If an operation like addition results in a value thats too big to represent,
// the IEEE 754 "rount-to-nearest" mode specifies what the result should be.
// So in a crude sense NUMBER.MAX_VALUE + Math.pow(2,969) is closer to
// Number.MAX_VALUE than to infinity so it "rounds down", whereas Number.MAX_VALUE
// + Math.pow(2,970) is closer to infinity so it "rounds up".

// zero
// javascript has both a normal zero, 0  and a negative zero, -0
// Besides being specified literally as -+, negative zero also results from
// certain mathematic operations, example:

var a = 0 / -3 // -0
var b = 0 * -3 // -0

// Addition and subtraction cannot result in a negative zero.
// If you try to stringify -0 it will result in "0".

// Value vs Reference
// // In other laanguages values can either be assigned / passed by
// value-copy or by reference-copy depending on the syntax used.
// In js there are no pointers, annd references work a bit differentely.
// YOu cannot have reference from one js variable to another variable.

// A reference in js points at a shared value, so if you have 10 different
// references, they are all always distinct references to a single shared value
// none of them are references pointers to eachother ..
// Moreover in javascript there are no syntatic hints that control value versus
// reference assignent/passing. Instead the type of the value soleely controls
// whether that value will be assigned by value-copy or by reference-copy.

var a = 2;
var b = a; // b is always copy of the value a
b++;
console.log(a); // 2
console.log(b); // 3

var c = [1,2,3];
var d = c; // d is a reference to shared 1,2,3 value
d.push(4);

console.log(c); // (4) [1, 2, 3, 4]
console.log(d); // (4) [1, 2, 3, 4]

// siple values aka: scalar primitives are always assigned/passed by
// value-copy: null, undefined, string, nuber, boolean and ES6-symbol
// Copound values - objects, including arrays and all boxed object wrappers,
// and functions - always create a copy of the reference on assignment or passing.

// In the above snippet, because 2 is a scalar prmitve, a holds one inital copy
// of that value, and b is assigned another copy of the value.
// when changing b, you are in no way changing the value in a.

// But bothc and d are separate references to the same shared value 1,2,3,
// which is a compound value. Its important to note that neither c nor "owns"
// the 1,2,3 value - both are just equal peer references to the value. SO, when
// using either reference to the modify (.push(4)) the actual shared array value
// itself, its affecting just one shared valuee, and both references will reference
// the newly modified value 1,2,3,4

// Since references point to the value themselves an not to the variables,
// you cannot use one reference to change where another reference is pointed

var a = [1,2,3]
var b = a;
console.log(a); // [1, 2, 3]
console.log(b); // [1, 2, 3]

b = [4,5,6];
console.log(a); // [1, 2, 3]
console.log(b); // [4, 5, 6]

// when we make the assignent b = [4,5,6] we are doing absolutly nothing
// to affect where a is still referencing [1,2,3]. To do that, b would have to
// be a pointer to a, rahter than a reference to the array
//- but no such capability exists in js. The most common way such confusion happens
// is with function parameters:


function foo(x) {
  x.push(4);
  x; // 1,2,3,4

  x = [4,5,6];
  x.push(7);
  x; // [4,5,6,7]
}

var a = [1,2,3];

foo(a);
console.log(a); // [1,2,3,4] not [4,5,6,7]

// x.length = 0, and x.push(4,5,6,7) where not creating a new array
// but modifying the existing shared array, so of course, a references the new [4,5,6,7]
// contents.

// You cannot drectly control/override value-copy versus reference
// those semantics are controlled entirely by the type of the underlying value.

// To effectively pass a compound value (like an array) by the value-copy,
// you need to manually make a copy of it, so that the reference passed
// doesnt still poin to the original, example:

foo(a.slice());
// slice(..) with no parameters by default makes an entirely new (shallow) copy
// of the array, so we pass in a reference only to the copied array, and thus
// foo(..) cannot affect the contents of a

// To do the reverse - pass a scalar primitive value in a way where its value
// updates can be seen, kinda like a reference . you have to wrap the value in
// another compound value (object, array, etc) that can be passed by reference-copy:

function foo(wrapper) {
  wrapper.a = 42;
}

var obj = {
  a:2
}

foo(obj);
console.log(obj.a); // 42

// here obj acts as a wrapper for the scalar primitive property, 'a'.
// When passed to foo(..) a copy of the obj reference is passed in and set
// to the wrapper parameter- We now can use the wrapper reference to access
// the shared object, and update its property. After the function finishes, obj.a
// will see the updated value 42.
// It may occur to you that if you wanted to pass in a reference to a scalar
// prmitive value like 2, you could just box the value in its Nuber object
// wrapper. It is true a copy of the reference to this Number object will be
// passed to the function, but unfrtunatley, having a refence to the shared
// object is not going to give you the ability to modify the shared primitive
// value like you expect:

function foo(x) {
  x = x + 1;
  console.log(x); // 3
}


var a = 2;
var b = new Number(a);
foo(b);
console.log(b); // Number {[[PrimitiveValue]]: 2} (not 3)

// the problem is that the underlying scalar promitive value is not mutable
// (same for String and boolean). IF a Number object holds the scalar primitive
// value 2. that exact Number object can never be changed to hold another value;
// you can only create a whole new NUmber object with different value.




/*
  NATIVES
*/
/*
// most commonly used natives:
// String(), Number(), Boolean(), Array(), Object(), Function(), RegExp(),
// Date(), Error(), Symbol()

// if you are coming to JS from a language like Java, javascripts String()
// will look like the String(..) constructor youre ised tp for creating
// string values, so youll quickly observe that you can to things like:

var s = new String("Hello World");
console.log(s.toString()); // Hello World

// It is true that each of these natives can be used as a native constructor.
// But whats being constructed may be different than you think.

var a = new String("abc");
console.log(typeof a); // Object, not String
console.log(a instanceof String); // true - [object String]

// The result of the constructor form of value creation (new String("abc")) is
// an object wrapper around the primitivt ("abc") value.

// Internal [[Class]]
// Values that are typeof "object", such as an array are additionally tagged with
// an internal [[Class]] property. This property cannot be accessed directly, but
// can generally be revealed indirectly by borrowing the default Object.prototype.toString(..)
// method called against the value, example:

// Object.prototype.toString.call([1,2,3])
// "[object Array]"

// Object.prototype.toString.call(/regex-literal/i)
// "[object RegExp]"

// Note that there are no Null() or Undefined() native constructors, but nevertheless
// "Null" and "Undefined" are the internal [[CLass]] values exposed.

// But for other simple primitives like string, number and boolean, another
// behaviour actually kicks in, which is usually called "boxing"

console.log(Object.prototype.toString.call("abc")); // object string
console.log(Object.prototype.toString.call(42)); // Object number
console.log(Object.prototype.toString.call(true)); // Object Boolean

// Here each of the promitives are automatically boexed by their respective object wrappers
// which is why "String", "Number" and "Boolean" are revealed as the internal [[CLass]] values



var a = "abc";
var b = new String(a);
var c = Object(a);

console.log(a); // abc
console.log(b); // String {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}
console.log(c); // String {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}


// Unboxing
// I you have an object wrapper and want to get the underlying primitve value out
// you can use the valueOf method:

var a = new String("abc");
var b = new Number(42);
var c = new Boolean(true);


console.log(a.valueOf()); // abc
console.log(b.valueOf()); // 5
console.log(c.valueOf()); // true

// Unboxing can also happen implicitly, whe using an object wrapper value
// in a way that requires the primitive value.

var a = new String("abc");
var b = a + ""; // b has the unboxed primitive value "abc"

console.log(typeof a); // object
console.log(typeof b); // string


/*
  GRAMMAR
*/

// Statements & Expressions
// Statements are sentences, expressions are phrases, and operators are conjuctions/punnctuation
// Every epxression in js ca be evaluated down to a single specific value:
/*
var a = 3 * 6;
var b = a;

// Each of the three lines is a statement containing expressions, var a = 3 * 6
// and var b = a are called "declaration statements" because they each declare a variable
//(and optionally assigning it) The a = 3 * 6 and b = a assignments (minus the vars)
// are called assginement expressions.

// The third line contains just the expression b, but its also a statement,
// This is generally referred to as an "expression statement"


// ..
var b;
if(true) {
  b = 4 + 38;
}

//console.log(b); // 42

// 42 is the completion value of the if block, which took on the completion
// value of its last expression statement b = 4 + 38

// This kind of code doesnt work
/*
var a,b;

a = if(true) {
  b = 4 + 38;
}; // Unexpected token if


// We cant capture the completion value of a statement and assign it into
// another variable in an easy syntactic/grammatical way, at least not yet..
// so what can we do? We could use the much maligned evail(..) function to capture
// this completion value

var a,b;

a = eval ( "if (true) { b = 4 + 38; } ");
console.log(a); // 42

// Thsi is ugly though, there is a proposal for ES7 called "do expression"
*/
/*
var a,b;

a = do {
  if(true) {
    b = 4+38
  }
}; // Unexpected token do
 a; // 42

// The gerneral idea is to be able to treat statements as expressions - they
// can show up inside other statements - without needing to wrap them in an inline
// function expression and perform an explicit - return


// Expression Side Effects
// Most expressions dont have side-effects:
// the most common example of an expression with possible side effects is
// a function call expression

function foo() {
  a = a + 1;
}
var a = 1;
foo(); // undefined
console.log(a); // 2

var a = 42;
var b = a++;

console.log(a); // 43
console.log(b); // 42

// Its easy to mistakenly believe that b has value 43 just like a does.
// but confusion comes from not fully considering the when of the side effects
// of the ++ operator.
// The ++ operator and the -- decrement operator are both unary operators, which
// can be used in either a post-fix ("after") position or prefix ("before") position:


var a = 42;
a++; // 42
a; // 43

++a; // 44
a; // 44

// when used in the prefix position as ++a, its side effect (incrementing a)
// happens before the value is returned from the expression, rather than after
// as with a++

// it is soetimes mistakenly though that you can encapsulate the after side effect
// of a++ by wrapping it in a ( ) pair like:

var a = 42;
var b = (a++);

console.log(a); // 43
console.log(b); // 42


// ( ) itself doesnt define a new wrapped expression that would be evaluated
// after the after side effect of the a++ expression as we might have hoped.
// In fact even if it did a++ reurns 42 first, and unless you have another
// expression that reevluates a after the sde effect of ++, you are not going
// to get 43 from that expression, so b will not be assigned 43

// There is an option though, the ',' statement-series comma separator
// This operator allows you to string together multiple standalone expression statements
// into aa single statement

var a = 42, b;
b = ( a++, a);

console.log(a); // 43
console.log(b); // 43

// The ( ..) around a++ is required here. The reason is operator precedence.
// The expression 'a++,' means that the second 'a' statement expression gets
// evaluated after the after side effects of the a++ expression

// Another example of a side-effecting operator is 'delete'.
// Delete is used to remove a property from an object or a slot from an object or
// slot fro an array. But its usually just called as a stand-alone statement.


var obj = {
  a:42
};

console.log(obj.a); // 42
delete obj.a
console.log(obj.a); // undefined

// The result value of the delete operator is true if the requested operation
// is valid/allowable, or false otherwise. But the side effect of the operator
// is that it removes the property or array slot.

// One last example of a side-effecting operator, which may at once be both
// obvious and nonobvious, is the = assignment operator.
// example:

var a;
a = 42; // 42
b; // 42

// it may not seem like '=' in a = 42 is a side-effecting operator for the expression.
// But if we examine the result value of the a = 42 statement, its the value that
// was just asigned (42), so the assignment of the same value into a is essantially a side effect

// This behaviour that an assignment expression or expression, results
// in the assigned value is primarily useful for chained assignments such as:

var a,b,c;

a = b = c = 42;

// Here c = 42 is evaluated to 42, (with the side effect of assigning 42 to c)
// then b = 42 is evaluated to 42, (with the side effect of assigning 42 to b)
// and finally a = 42 is evaluted, (with the side effect of assigning 42 to a)

// Another scenario to consider:

function vowels(str) {
  var matches;

  if (str) {
    // pull out all the vowels
    matches = str.match( /[aeiou]/g);

    if (matches) {
      console.log(matches);
      return matches;
    }
  }
}


vowels("Hello world"); // ["e", "o", "o"]

// This works, but taking advantage of the assignment side-effect, we can
// simplify by combining the two if-statements into one :

function vowels(str) {
  var matches;

  // pull out all the vowels
  if (str && (matches = str.match( /[aeiou]/g ))) {
    console.log(matches);
    return matches;
  }
}

// the ( .. ) around 'matches = str.match..' is required, The reason is operator pecedence.
// there are quite few places in the javascript grammar rules where the same syntax
// means different things depending on where/hows its used.

// Curly braces
// Object literals
var a = {
  foo: bar()
}

// HOw do we know that this is an object literal? Because the { ... } pair
// is a value thats getting assigned to 'a'
// The 'a' reference is called "l-value" (aka left-hand value)
// since its the target of an assignment. The { ... } pair is an "r-value"
// (aka right-hand value) since its used just as a value (in this case as the source
// of the assignment)

// What happens if we remove the 'a =' part of the above snippet?
function bar() {}

{
  foo: bar();
}

// alot of developers assume that the { .. }  paris is just a standalone
// object literal that doesnt get assigned anywhere, but its actually different..

//Here { .. } is just a regular code block, its not very idiomatic in js to
// have a standalone { .. } block like that, but its perfectly valid js grammar.
// tt can be especially helpful when combined with let block--scoping declartions.

// The { ... } code block here is functionally pretty much identical to the code
// blockk being attached to some statement, like a for/while loop if conditional etc.

// but if its a normal block of code, whats that bizzarrre looking foo: bar() syntax
// and  how is it legal?

// Its because of a little known feature in javascript calleed  "labeled statements"
// foo is a label for the statement bar(), but whats the point of a labeled statement?

// IF javascript had a goto statement, youd theoretically be able to say goto foo and
// and have excecution jump to that location in code, gotos are usually considered terrible
// coding idioms as they make code much harder to understand ( aka spaghetti code )
// so its very good thing that javascript doesnt have a general goto

// However js does support a limited special form of goto, labeled jumps.
// Both the continue and break statements can optionally accept a specified label,
// in wwhich case the program flow "jumps" kind of like a goto. Consider:

// 'foo' labeled-loop

foo: for (var i=0; i<4; i++) {
  for (var j=0; j<4; j++) {
    // whatever the loops meet, continue outer-loop
    if (j == i) {
      // jump to the next iteration of the 'foo' labeled-loop
      continue foo;
    }
    // skip odd multiples
    if ((j * i)  % 2 == 1) {
      // normall (nonlabeled) continue  of inner loop
      continue;
    }
    console.log(i, j);
  }}

// 1 0
// 2 0
// 2 1
// 3 0
// 3 2

// continue foo does not ean "go to the foo labeled position to continue",
// but raher "continue the loop that is labeled foo with its next iteration"
// so its not really an arbitary goto.

// we skipped over the odd muliple 3 1 iteration, but the labeled-loop jump
// is with break __ from inside an inner loop where you want to brak out
// the outer loop. Without a labeled break, this same logic could sometimes
// be rather awkward to write:

// 'foo labeled-loop'
foo: for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    if ((i * j) >= 3) {
      console.log("stopping:" ,i, j);
      break foo;
    }
    console.log(i, j);
  }
}

// 0 0
// 0 1
// 0 2
// 0 3
// 1 0
// 1 1
// 1 2
// stoping: 1 3

// break foo does not mean "go to the foo labeled position to continue" but rather
// "break out of the loop/block that is labeled foo and continue after it"
// Not exactly a goto in the traditional sense. ..

// the nonlabeled break alternative to the above should would probably need
// to involve one or more functions. shared scope variable access. etc
// It would not quite likely be more confusing than labeled break, so
// here using a labeled break perhaps the better option.

// A label can apply to nonloop block, but only break can reference such a nonloop label
// You can do a labeled break ___ out of any labeled block, but you cannot continue
// ___ a nonloop label nor can you do a nonlabeled break out of a block.

// 'bar' labeled block
function foo() {
  bar: {
    console.log("hello");
    break bar;
    console.log("never hit");
  }
  console.log("world");
}
foo();
// hello
// World

// labeled loopps/block are extremeley uncommon and often frowned upgon, its best
// to avoid them if possible. FOr example by using function calls instead of the loop jumps.

// its a very common beliefe that JSON is a proper subset of JS, so a string of JSON
// like  {"a": 42}  is though to be a valid Js, not true..
// Thats becaise statement labels cannot have quotes areound the, so 'a' is not a valid label.
// and thus ':' cannot come ríght after it

// one extremely common misconception along these lines is that if you were to load a js
// into a <script src=..> tag that only has JSON content in it (like fro an API call),
// the data would be read as vakud js but just be inaccessible to the program. JSON-P
// (tje practise of wrapping the JSOn data in a function call like foo({"a":42}))
// is usually said to solve this inaccessibility by sending the value to one of our
// programs functions, whch is not true.

// The totally valid JSON value {"a":42} by itself would actually throw a js error
// vecause itd be interreted as a stateent block wth an invalid label. But
// foo({"a":42}) is valid js because in it {"a":42} is an object literal value being
// passed to foo(..), so properly said, JSON-P akes JSON into a valid JS grammar.


// Blocks

console.log( [] + {} ); // [object Object]
console.log( {} + [] ); // [object Object]

// Object destructuring
// Starting wth ES6 another place that youll see {...} paris showing up is with
// "destructuring assignents", specifically object destructuring, example:

function getData() {
  // ..
  return {
    a: 42,
    b: "foo"
  };
}

var { a, b } = getData();
console.log( a, b ); // 42 "foo"
console.log(getData(a, b)); // {a: 42, b: "foo"}


// { a, b} = .. is a form of ES6 destructuring assignment, which is roughly
// equivalent to:

var res = getData()
var a = res.a;
var b = res.b;

console.log(a); // 42
console.log(b); // foo

// { a, b } is actually ES6 destructuring short hand for {a: a, b: b} so either work,

// Destructuring with a { .. } pair can also be used for named function arguments, which
// is sugar for this same sort of iplicit oject property assignent:


function player({ name, health, damage, inventory}) {
  // no need for :
  // var a = obj.a, b = obj.b, c = obj.c
  console.log( name, health, damage, inventory );
}

player( {
  name: "john",
  health: 100,
  damage: 0,
  inventory: ["key"]
}); // john 100 0 ["key"]

// So the context we use { .. } pairs in entirely determines what they mean,
// which illustrates the difference between syntax and grammar, its very important
// to understand these nuances to avoid unexpected interpretations by the js engine


// else if optional blocks
// its a common misconception that javascript has en else if clause, because
// you can do:

if(a) {
  // ..
}
else if (b) {
  // ..
}
else {
  // ..
}

// But there is a hidden characteristic of the js grammar here, there is
// no else if.. But if and else statements are allowed to omit the { }
// around their attached block if they only contain a single statement.


// if(a) domeSomething( a );
//Many js style guides will insist that you always use { } arund a single statement
// block like:

// if(a) { domeSomething( a ); }
// However the exact same grammar rule applies to the else clause, so the else if form
// yove likely always coded is actually parsed as:
a = true;
if (a)  {
  // ..
}
else {
  if (b) {
    // ..
  }
  else {
    // ..
  }
}



/*
  OPERATOR PRECEDEDENCE
*/

// javascripts version of %% and || are interesting in that they select and return one
// of their operands, rather than just resulting in true or false. Thats ease to reason
// about if there are only two operands and one operator:
/*
var a = 42;
var b = "foo";

console.log(a && b); // foo
console.log(a || b); // 42

// But what about when theres two operands involved and three opereands?
var a = 42;
var b = "foo";
var c = [1,2,3];

console.log(a && b || c); // foo
console.log(a || b && c); // 42

// To understand what those expressions result in we need to understand what rules
// govern how the operators are procesed.
// These rules are called "operator precedence"

// Recall the example from above :
var a = 42, b;
b = ( a++, a);

console.log(a); // 43
console.log(b); // 43

// But what happens if we reove the ( )  ?

var a = 42, b;
var b = a++, a;

console.log(a); // 43
console.log(b);  // 42

// why did did it change the value of b? Because the ',' operator has lower precedence
// than the '=' operator. So b = a++, a is interpreted as ( b = a++ ), a. Because
// a++ has after side effects, the asigned value to b is the value 42 before the ++ changes a

// its important to know that it actually has the lowest precedence.
// Every operator will more tightly bind than ',' will.
// again..
str = "hello world"
if (str && (matches = str.match( /[aeiou]/g ))) {
  console.log(matches); // ["e", "o", "o"]
}

// We said that the ( ) around the assignent is required, but why?
// because && has higher precedence than =, so without the ( ) to force the binding
// the expression would instead be treaded as (str && matches) = str.match..
// but this would be an error, because the result of (str && matches) isnt
// going to be a variable, but instead a value, (in this case undefined), and so
// it cannot be the lefthand side of an = assignent

// A more comlpex one..
var a = 42;
var b = "foo";
var c = false;
var d = d = a && b || c ? c || b ? a : c && b : a;
console.log(d); // 42

// the first question -- it at not even occured to ask does the first part
// ( a && b || c) behave like (a && b) || c or like a && (b || c)?

console.log( (false && true) || true) // true
console.log( (false && (true || true ))); // false ä

// SO this is proof theyre different, but still how does false && true || behave
// The answer:

console.log( false && true || true ); // true
console.log( (false && true) || true ); // true

// So we have the answer, The && operator is evaluated first and the ||
// operator is evaluated second.
// but is that just because of left-to-right processing?
// Lets reverse the order of opereators.

console.log( true || false && false); // true
console.log( (true || false) && false); // false
console.log( true || (false && false)); // true

// now we have proved that && is evalutaed first and then ||, and in this case
// that was actually counter to generally expected left-to-right processing.

// So what caused the behaviour? Operator precedence
// Every language defines its own operator precedence list, its dismaying though,
// just how uncommon it is that js developers have read JS list.



// Short Circuited
// For both && and || operators, the righthand operand will not be evaluated if
// the lefthan operand is sufficient tot determine the outcode of the operation,
// Hence the name "short circuited" (in that if possible, it will take an early shortcut)
// Example with a && b, b is not evaluated if a is falsy, because the
// result of the && operand is already certain, so theres no pont in bothering
// to check b. Likewise  with a || b, if a is truy, the result of the operand
// is already certain, so theres n reason to check b.

//The short circuiting can be very helpful and is commonly used:

function doSomething(opts) {
  if (opts && opts.foo) {
      // ..
  }
}
// The opts part of the opts && opts.foo cool test acts as a sort of guard
// because if opts is unset (or otherwise not an object) the exressions opts.foo would
// throw an error The opts test failing plus the short circuiting means that opts.foo
// wont even be evaluated this no error .
// Simlilarly you can use || short circuiting

function doSomething(opts) {
  if (opts.cache || primeCache()) {
    // ..
  }
}
// here we are checking for opts.cache first and if its present we dont call
// the primeCache() function thus avoiding potentially unnecessary work.


// Using variables too early
// ES6 defines a new concept called TDZ (Temporal Dead Zone)
// The TDZ refers to places in code where a variable reference cannot yet be
// because it hasnt reached it required initialization

// The most clear example of this is with ES6 let-block scoping

{
  a = 2; // a is not defined
  let a;
}


// The assignment a = 2 accessing the a variable (which is indeed block-coped to
// the { ... } block) before its been initialized by the let a declaration so its in the
// TDZZ for a and throws an error.

// Interestingly, while typeof  has an exception to be safe for undeclared  variables
// no such safety exception is made for TDZ references.

{
  console.log(typeof a); // undefined
  console.log(typeof b); // ReferenceError: b is not defined (TDZ)
  let b;
}
*/

/*
  FUNCTION ARGUMENTS
*/
/*

// Another example of a TDZ violation can be seen with ES6 default parameter values

let b = 3;
function foo( a = 42, b = a + b + 5 ) {
  //..
}
console.log(foo()); //ReferenceError: b is not defined


// The b reference in the assignment would happen in the TDZ for the parameter
// b, (not pull in the outer b reference) so it will throw an error.
// However the 'a' is fine since by that time its past the tdz for parameter 'a'

// When  using ES6s default parameter values, the default value is applied
// to the paraeter if you either omit an argument or you pass an undefined
// value in its place

function foo( a = 42, b = a + 1) {
  console.log(a,b);
}
foo();  // 42 43
foo(undefined); // 42 43
foo(5); // 5 6
foo(void 0, 7); // 42 7
foo(null); // null 1

// here null is coerced to a '0' value in the a+1 expression.
// Fro the ES6 default paraeter values perspective, theres no difference between
// omitting an an argument and passing an undefined value. However there is away to
// detect the difference in some cases:

function foo( a = 42, b = a + 1) {
  console.log(arguments.length, a, b,
    arguments[0], arguments[1]
            );
}
foo(); // 0 42 43
foo(10); // 1 10 11 10 undefined
foo(10, undefined); // 2 10 11 10
foo(10, null); // 2 10 null 10 null

// Even though the default parameter values are applied to the a and b
// parameters, if no arguments were passed in those slots, the arguments array
// will not hae entries.


//Conversely if you pass an undefined argument explicitly an entry
//will exist in the arguments array for that argument, but will be undefined
// and not the (necessarily) same as the default value that was applied
// to the named parameter for that slot

// While ES6 default parameter values can create divergence between the arguments array
// slot and the correspongind named parmeter variable, this same disjointness can
// also occur in tricky ways in ES5 :

function foo(a) {
  a:42;
  console.log(arguments[0]);
}
foo(2); // 2 (in ES6?) 42 in ES5
foo(); // undefined  (not linked)

// if you pass an argument slot and the named parameter are linked to always have
// the same value. If you omit the argument, no such linkage occurs
// But in strict mode linkage doesnt exist regarless

function foo(a) {
  "use strict";
  a = 42;
  console.log(arguments[0]);
}

foo(2); // 2
foo(undefined); // undefined (not linked)

// Its almost certainly a bad idea to ever rely on any such linkage,
// and infact the linkage itself is a leaky abstraction thats exposing an underlying
// implementation detail of the engine, rather than a properly designed feature

// Use of the arguments array has beed deprecated (especially in favor of ES6.. rest parameters)
// Prior to ES6 , arguments is the only way to get an array of all passed
// arguments to pass along to other functions. You can also mix named parameters
// with the argumetns array and be safe, as long as you  follow one simple rule,
// never refer to a named aparameter and its corresponding arguments slot at the same time.
// then youll never expose the leaky linkage behaviour:
function foo(a) {
  console.log( a + arguments[1]); // safe
}
foo( 10, 12 ); // 22


// Try.. Finally
// The code in finally clause always runs and it always runs right after the try
// (and catch if present) finish, before any other code runs. In one sense, you can
// kind of think of the code in a finally clause as being in a callback function that
// will always be called regardless of how the rest of the block behaves.

// SO what happens if there a return statement inside a try clause?
// it obviously will return a value, right? But does the calling code that
// receives that value run before or after the finally?
function foo() {
  try {
    return 42;
  }
  finally {
    console.log("inside finally");
  }
  console.log("never runs");
}
console.log(foo()); // Inside finally 42

// The return 42 runs right away, which sets up the completion value
// from the foo() call, this action completes the try clause and the finally
// clause immediately runs next. Only then is the foo() function complete, so
//  that its copletion value is returned back for the console.log() statement use.

// Now if an exception is thrown inside a finally clause, it will override as the
// primary completion of that function. If a previous return in the try block had set
// a complettion value for the function, that value will be abandoned:

function foo() {
  try {
    return 42;
  }
  finally {
    throw "Oops"
  }
  console.log("never runs");
}
console.log(foo()); // Uncaught Oops


// It shouldnt be surprising that other control statements like continue
// andd break exhibit similiar behaviour to return and throw:

for (var i = 0; i < 10; i++) {
  try {
    continue;
  }
  finally {
    console.log(i);
  }
}
// 0123456789

// the console.log(i) stateent runs at the end of the loop iteration
// which is caused by the continue statementm however it still runs before
// the i++ iteration update statement, which is why the values printed are 0..9
// instead of 1..10

// ES6 adds a yield statement, in generator which in some ways can be seen as
// intermediate return statement. However, unlike a return, a yield isnt
// complete until the generator is resumed, whivh eans  a try {.. yield } has
// not completed. So an attached finally clause will not run right after the
// yield as it does with return

function foo() {
  try {
    return 42;
  }
  finally {
    // no return here so no override
  }
}

function bar() {
  try {
    return 42;
  }
  finally {
    // override  previous 'return 42'
    return;
  }
}

function baz() {
  try  {
    return 42;
  }
  finally {
    // override previous 'return 42'
    return "inside finally";
  }
}
console.log(foo()); // 42
console.log(bar()); // undefined
console.log(baz()); // inside finally


// onrmally the omission of return in a function is the same as return; or even
// return undefined; but inside a finally block the omission of return does not
// act like an overriding return undefined; it just lets the previous return stand

// we can combine  finally with labeled break: (dont do this ...)


function foo() {
  bar: {
    try {
      return 42;
    }
    finally {
      break bar;
    }
  }
  console.log("hello")
  return "world";
}
console.log(foo()); // heloo world


// Switch
var a = undefined;

switch (a) {
  case 2:
      console.log("case 2");
    break;
  case 42:
    console.log("case 42");
  break;
  default:
  console.log("default");
}
// default

var a = 42;

switch (true) {
  case a == 10:
        console.log("10 or '10'");
        break;
  case a == 42:
        console.log("42 or '42'");
        break;
  default:
        console.log("default");
}
// 42 or '42'

// Thsi works because the case clause can have any expression which means it will
// strictly match that expressions result to the test expression (True)
// since a == 42 results in true here, the match is made.

// Despite ==, the switch matching itself is still strict, between true
// and true here. If the case expression resulted in something that was
// truthy but not strictly true, it wouldnt work. This can bite you if youre
// for instance using a "logical operator" like || or && in your expression.

var a = "hello world";
var b = 10;

switch (true) {
  case (a || b == 10):
    console.log(10);
    break;
  default:
  console.log("default");
}
// default since the result of (a || b == 10) is "hello world" and not true the
// strict match fails. In this case, the fix is to force the expression
// explicitly to be true or false, such case !!(a || b == 10):

// lastly the default clause is optional, and t doesnt necessarily have to come at
// the end, (althought thats the strong convention) Even in the default
// clause, the same rules apply about encountering a break or not:

var a = 10;

 switch (a) {
   case 1:
   case 2:
        // never gets here
   default:
        console.log("default");
   case 3:
        console.log("3");
        break;
 } // default 3

 // The way this snippet processes is that it passes through all the case clause
// matching first, finds no match, then goes back up to the default clause and starts
// executing, Since theres no break there, it continues executing in the already skipped
// over case: 3 block befoore stopping once it hits that break.

// While this sort of roundabout logic is clearly possible in js theres almost no
// chance that its going to make for reasonable or understandable code...




// Host Objects

// The well covered rules for how variables behave in JS have expetions to them
// when it comes to variables that are auto-defined, or otherwise created
// and provided to JS by the enviroment that hosts your code, (brower etc)
// - so called host-objects, which include both built-in objects and functions.
// For example:

var a = document.createElement("div");
console.log(typeof a); // object
console.log(Object.prototype.toString.call(a)); // [object HTMLDivElement]
console.log(a.tagName); // DIV

// 'a' is not just an object, but a special host object because its a DOM element.
// It has a different internal [[CLASS]] value ("HTMLDivElement") and comes
// with predefined and often unchangable properties.



// <script>s
var greetings = "hello world";
var el = document.createElement( "script" );
el.text = "function foo() {alert(greetings);} setTimeout(foo, 1000); ";
document.body.appendChild(el);




// A program in chunks
// you may write your js program in one .js file, but your program is
// almost certainly  comprised of several chunks, only one which is
// going to execute now, and the rest of which will execute later. The most
// common unit of each chunk is the function.

// The problem js developers new to js seem t have is that later doesnt happen
// strictly after now. In other words tasks that cannot complete now are, by
// defenition going to complete asynchronously, and thus we wiölö not have
// blocking behaviour.
// Consider:

// ajax(...) is soe arbitrary ajax function given by a library
// var data = ajax("http://exapmple.data.txt");

// standard Aajax requestst dont complete synchronously which means the ajax(..)
// function does not yet have any value to return back to be assigned to the data
// variable. If ajax(..) could block until the response came back, then the
//  data = assignment would work fine.

// The simplest way of "waiting" from now until alater is to use a function, commonly
// called callback-function:

// ajax("http://some.url.1, function callback(data) {
//  console.log(data);
//});

// Async Console

// There is no specification  or set of requrements around how the console.* methods work,
// they are not offically part of javascript, but are instead added to js by the
// 'hosting enviroment'.. So different browsers and js enviroments do as they please,
// which can sometimes lead to confusing behaviour.
// in particular there are som browsers and some conditions that console.log(..)
// does not actually immediately ouput what its guven. The main reasnon this happen
// is because I/O is a very slow and blocking part of many programs not just JS.
// So it may perform better from thye page / UI perspecitve for a browser to handle
// console I/O asynchronously in the background, without you parhaps even knowing
// that it occurred. A not terrible common but possible scenario where this could be
// observable (not from code itself but from the outside)

var a = {
  index: 1
};

// later
console.log(a);  // { index: 1 }

// even later
a.index ++;

// we´d normally expect to see the a object be snapshotted at the exact moment
// of the console.log(); statement, printing something like { index: 1 } such that
// in the next statement when a.index++ happens, its modifying something different
// than or just strictly after the output of 'a'

// Most of the time, thre preceding code will probably produce an object
// representation in your developer tools console thats what you expect.
// But its possible this same code could run in a situation where thje browser
// felt it needed to defer the console I/O to the background,, in which case
// its possible that by the time the object is represented in the browesers console,
// the a.index++ has already ahppened, and it shows { index: 2 }

// Its a moving target under what condidionts exactly console I/O will be deferred, or
// even whether itr will be observable. Just be aware of this possible asynchronicity
// in I/O in case y ou ever run into issues debugging where objects have been
// modified after the console.log(..); statement an yet you see the unexpected modifications .

// If you run into this scenario the best option is to use breakpoints in your JS debugger,
// instead of relying on the console output. The best option would be to force a "snapshot"
// of the object in question by serializing it to a string, like with JSON.stringify(..)


// Event loop
// javascript itself actually never had any direct notiion of asynchrony built into it.
// The JS engine itself never done anything more  than ececute a sinle chunk of your
// program at any given moment, when asked to.

// The JSs engine doesnt run in isolation, it runs inside a hosting-enviroment
// which is for most developers the typical web browser.
// Js over the last several years has expanded beyound the browser into other
// enviroments, such as servers via node.js

// But the common "thrad" of all these enviroments is that they have mechanism
// in them that handles executing multiple chins of your program over time, at
// each moment invoking the js engine, called "event loop".

// in other words the js engine has had no innate sense of time, but has instead been
// an on-demand execution enviroment for any arbitary snippet of JS. Its the
// surrounding enviroment that has always scheduled "events" (js code executions)

// So for example when your js program makes an Ajax request to fetch some data from
// a server, you set up the respoonse code in a callback function. The browser is then
// setup to listen for the response from the network, when it has something to give you
// it schedules the call-back function to be executed by inserting it into the event-loop.

// So whats the event loop?
// lets conceptuialize this with fake-code

// "eventloop" is an array that acts as a queue
// first-in, first-out
var eventLoop = [];
var event;

// keep going forever
while (true) {
  // perform a "tick"
  if (eventLoop.length > 0) {
    // get the next event in the queue
    event = eventLoop.shift();
    // now, execute the next event
    try {
      event();
    } catch (error) {
      reportError(error);
    }
  }
}

// Theres a continously running loop represented by the while loop, and eact
// iteration of this loop is called a "tick". For each tick , if an event is  waiting
// on the queue, its taken off and executed. These events are your function callbacks.

// Its important to note that the setTimeout() doesnt put your call-bacck on the
// event loop queue. What it does is set up a timer; when the timer expires,
// the enviroment places your callback into the event loop, such that some future tick
// will pick it up and execute it.

// So in other words your program is generally broken up into lots of small chunks
// which happen one after the other in the event loop queue. And technically
// oiher events not related directly to your program can be interleaved within
// the queue as well.

// ES6 specifies exactly how the event loop works, thich means technically its
// within the purview of the js engine, rather than just the hosting enviroment.
// One main reason for this change is the introduction of ES6 Promises, because
// they require the ability  to have direct, finegrained control over
// scheduling operations on the event loop queue.


// Paralell Threading
// Its very common to conflate the term "async" and "paralell" but they are
// actually quite different. Asynch is abou the gap between now and later.
// But paralell is about things being able to occur simultaneously.

// The most common tools for parallel computing are processes and threads.
// Processes and threads execute independently and may execute simultaneously: on
// separate processors, or even separate computers, but multiple and serialism can coexist
// in the form of cooperating event loops in separate threads.

// The interleaveing of parallel threads of execution and the interleaving of
// of asynchronous events occur at very different levels of granularity.
// example:

function later() {
  answer = answer * 2;
  console.log("meaning of life: ", answer);
}

  // while the entire contents of later() would be regarded as a single
  // event loop queue entry, when thinking about a thread this code would run on
  // theres actually perhaps dozen different low-level operations. For exampple
  // answer = answer * 2 reuires first loading the current value of answer, then
  // putting 2 somewhere, then performing the multiplication, then taking the
  // result and storing it back into answer.

  // In a single threaded enviroment, it really doesnt matter that the items
  // in the thread queue are low-level operations, because noothing can interup
  // the thread. But if you have a parallel system, where two different threads
  // are operating in the same program, you could very likely have unpredictable behaviour.
  // COnsider:

  var a = 20;

  function foo() {
    a = a + 1;
  }

 function bar() {
   a = a * 2;
 }
 // ajax(..) in some arbitrary ajax function given by a lib
 ajax("http://www.example.com", foo);
 ajax("http://www.example.com", bar);

 // in javascripts single threaded behaviour, if foo() runs before bar()
 // the result is that a has 42, but if bar() runs before foo() the result in a
 // will be 41.

 // If js events sharing the same data executed in paralell, though the problems
 // would be much more subtle. COnsider these twi lists of pseudocode tasks as the
 // thread that could respectively run the code in foo() and bar(), and consider
 // what happens if they are running at exactly the same time.

 // Thread 1 (X and Y are temprary memory allocations)
foo():
a. load value of 'a' in 'X'
b. store '1' in 'Y'
c. add 'X' and 'Y', store result in 'X'
d. store value of 'X' in 'a'

// Thread 2 (X and Y are temporary memory allocations)
bar():
a. load value of 'a' in 'X'
b. store '2' in Y
c. multiply 'X' and 'Y', store result in 'X'
d. store value of 'X' in 'a'

// NOw lets say that the two threads are running truly in porallel. You
// can probably spot the problem. They use shared memory locations of X and Y for
// their temporary steps.

// So threaded programming is very tricky because if you dont take special steps
// to prevent this kind of interruption/interleaving from happening, youi can get
// very surprising, nondeterministic behaviour.

 // Javascript never shares data across threads, which means that level of nondeterministic
 // isnt a concern. But that doesnt mean js is always deterministic.
 // The relative ordering of foo() and bar() produces two different results (41, 42)


 // Run to completion
// because of javascripts single-threading, the code from inside of foo(), and bar()
// is atomic, which means that once foo() starts running, the entirety of its code
// will finish before any of the code in bar() can run, or vice versa.
// This is called run-to-completion behaviour.
// In fact the run-to-completion semantics are much more obvious when foo() and bar()
// have more code in them, such as:

var a = 1;
var b = 1;

function foo() {
  a++;
  b = b * a;
  a = b + 3;
}

function bar() {
  b--;
  a = 8 + b;
  b = a * 2;
}

// ajax(..) in some arbitrary ajax function given by a lib
//ajax("http://www.example.com", foo);
//ajax("http://www.example.com", bar);

// because foo() cannot be interrupted by bar(), and bar() cant be interrupted
// by foo(), this program has only two possible outcomes depending on which
//starts running first, if threading were present, and the individual statements
// foo() and bar() could be interleaved, the number of possible outcomes would
// be greatly increased.

// Chunk 1 is synchronous (happens now), but chunks 2 and 3 are asynchronous
// (happens later), which means their execution will be separated by a gap of time

// Chunk 1:
var a = 1;
var b = 1;

// Chunk 2:
a++;
b = b * a;
a = b + 3;

// Chunk 3 (bar()):
b--;
a = 8 + b;
b = a * 2;

// Chunks 2 and 3 may happen in either the first-order, so there are two possible
// outcomes for this program, as illustrated here:

// Outcome 1:

var a = 1;
var b = 2;

// foo()
a++;
b = b * a;
a = b + 3;

// bar()
b--;
a = 8 + b;
b = a * 2;

// Outcome 2:

var a = 1;
var b = 2;

// bar()
b--;
a = 8 + b;
b = a * 2;

// foo()
a++;
b = b * a;
a = b + 3;

console.log(a); // 183
console.log(b); // 180

// Two outcomes from the same code means we still have a nondeterminism.
// But its at the function (event) ordering level, rather then at the statement
// ordering level, as it is with threads. In other words, its more
// deterministic than threads would have been.


// Conccurrency
// Lets imagine a site that displays a list of status updates, that progressively
// loads as the users scrolls down the list. To make such a feature work
// correctly (at least) two separate "processes" will need to be executinjg simultaneously.
// The first "process" will respond to onscroll events (makin ajax requests from new content)
// as they fire the user has scrolled the page further down. The second "process" will
// recieve Ajax responses back to render onto the page.
// Conccurrency is when two or more "processes" are executing simultaneously over
// the same period, regardless of whether their individual constituent operations
// happen in parallel. You can think of conccurrency then as "process"-level (or task-level)
// parallelism, as opposed to operation level parallelism.
// For a given window of time, lets visualize each independent "process" as a
// of events/operations:

// Process 1 (onscroll events):
onscroll, request 1
onscroll, request 2
onscroll, request 3
onscroll, request 4
onscroll, request 5

// Process 2 (ajax response events)
response 1
response 2
response 3
response 4
response 5

// Its quite possible that an onscroll event and an ajax event response event
// could be ready to be processed at exactly the same moment, for example lets visualize
// these events in a timeline.

onscroll, request 1
onscroll, request 2 response 1
onscroll, request 3 response 2
response 3
onscroll, request 4
onscroll, request 5
onscroll, request 6  response 4
onscroll, request 7


// But going back to our notion of the event loop. JS can handle only one event
// at a time, so either onscroll, request 2 is going to happen first or response 1
// is going ti happen first, but they cannot happen at literally the same moment.

// Lets visualize the interleaving of all these events onto the event loop queue:

onscroll, request 1 <--- process 1 starts
onscroll, request 2
respoonse 1         <--- process 2 starts
onscroll, request 3
response 2
response 3
onscroll, request 4
onscroll, request 5
onscroll, request 6
reponse 4
onscroll, request 7  <--- process 1 finishes
response 6
response 5
response 7           <--- process 2 finishes

// Process 1 and process 2 run concurrently (task-level parallel),
// but their individual events run sequentially on the event loop queue.
// By the way, notice how reponse 6 and response 5 came back out of expected order?
// The single-threaded event loop is one expression of concurrency.



// Noninteracting
// As two or more "processes" are interleaving their steps/events concurrently
// within the same program, they dont necessarily need to interact with each other
// if the tasks are unrelated. If they dont interact, nondeterminism is perfectly
// accceptable. For example:

var res = {}

function foo(results) {
  res.foo = results;
}

function bar(results) {
  res.bar = results;
}

// ajax(...) is somee arbitrary ajax function given by a library
//ajax("http://exapmple.data.txt", foo);
//ajax("http://exapmple.data.txt", bar);

// The concurrent  "processes" are the two repsonse() calls that will be
// made to handle the Ajax responses.
// Lets assume the expected behaviour is thtat res[0] has the results of the
// http call, and res[1] has the results of the second http call. Sometimes
// that will be the case, but sometimes theyll be flipped, depengind on which
// call finishes first. Theres pretty good likelihood that this nondeterminism is
// race condition bug.

// So, to address such a race condition, you can coordinate ordering interaction:

var res = [];

function response(data) {
  if (data.url == "http://example.data.txt") {
    res[0] = data;
  }
  else if (data.url == "http://example.data2.txt"){
    res[1] = data;
  }
}

//ajax("http://example.data.txt", foo);
//ajax("http://exapmple.data2.txt", bar);

// regardless of which ajax response comes back first, we inspect the data.url
// to figure out which position the response data should occupy in the res array.
// res[0] will always hold the "http://http://example.data.txt" results, and
// res[1] will always hold the "http://http://example.data2.txt" results.
// Through simple coordination, we eliminated the race condition nondeterminism.

// The same reasoning from this scenario would apply if multiple concurrent function
// calls were interacting with each other through the shared DOMm like one updating
// the contents of a <div> and the other updating the style or attributes of the <div>
// You probably wouldnt want to show the DOM element before it had content, so the
// coordination must ensure proper ordering interaction. Consier:

var a, b;

function foo(x) {
  a = x * 2;
  baz();
}

function bar(y) {
  b = y * 2;
  baz();
}

function baz() {
  console.log(a + b);
}

// ajax(...) is somee arbitrary ajax function given by a library
//ajax("http://exapmple.data.txt", foo);
//ajax("http://exapmple.data2.txt", bar);


// In this example, wheter foo() or bar() fires first, it will always  cause baz()
// to run too early (either a or b will still be undefined) but the second
// invocation of baz() will work, as both a and b will be available.

// There are different ways to address such a condition. Heres on simple way:

var a, b;

function foo(x) {
  a = x * 2;
  if (a && b) {
    baz();
  }
}

function bar(y) {
  b = y * 2;
  if (a && b) {
    baz();
  }
}

function baz() {
  console.log( a + b);
}

//ajax("http://exapmple.data.txt", foo);
//ajax("http://exapmple.data2.txt", bar);

// the if (a && b) conditional around the baz() call is traditionally called a "gate"
// because we're not sure sure what order a and b will arrive, but we wait for
// both of them to get there before we proceed to open the gate call baz()

// Another conccurrency interaction condition yuou may rau into is sometimes
// called a race, but more correctly called a "latch". It's characterized by
// "only first one wins" behaviour. Here nondeterminism is acceptable, in that
// you are explicitly saying its OK for the "race" to finish line to to have
// only one winner. Conciser this broken code:

var a;

function foo(x) {
  a = x * 2;
  baz();
}

function bar(x) {
  a = x / 2;
  baz();
}

function baz() {
  console.log( a );
}

// ajax("http://exapmple.data.txt", foo);
// ajax("http://exapmple.data2.txt", bar);

// Whichever one foo() or bar() fires last will not only overwrite the assigned
// 'a' value from the other, but it will also duplicate the call to baz().

// So we can coordinate the interaction with a simple "latch", to let only the first
// one through. Example:

var a;

function foo(x) {
  if (!a) {
    a = x * 2;
    baz();
  }
}

function bar(y) {
  if (!a) {
    a = x / 2;
    baz();
  }
}

function baz() {
  console.log( a );
}

// ajax("http://exapmple.data.txt", foo);
// ajax("http://exapmple.data2.txt", bar);

// the if (!a) conditional allows only the first foo() or bar() through, and
// the second calls would just be ignored.


// Cooperation

// Another expresion of concurrency coordination is called cooperative concurrency.
// Here the focus isnt no much on interacting via value sharing in scopes. The
// goal is to take a long-running "process" and break it up into stes or batches
// so that other concurrent "processes" have achange to interleave their operations
// into the event loop queue.

// For example consiser an Ajax response handler that needs to run through a long
// list of results to transform the values. We'll use Array#map(..) to keep the
// code shorter:

// function 'response(...)' receives array of results from the ajax call
function response(data) {
  // add onto existing 'res' array
  res = res.concat(
    // make new transformed array with all 'data' values doubled
    data.map( function(val){
      return val * 2;
    })
  );
}
// ajax("http://exapmple.data.txt", response);
// ajax("http://exapmple.data2.txt", response);

// if "http://exapmple.data.txt" gets its results back first, the entire list
// will be mapped into res all at once. If its a few thousand or less records,
// this is not generally a big deal. But if its like 10 million records,
// that can take a while to run. (several seconds)

// while such a "process" is running, nothing else in the page can happen, including
// no other reponse(..) calls, no UI updates, not even user events like scrolling,
// typing, button clicking and the like. THats pretty bad.

// So, to make a more cooeratively concurrent system, one thats friendlier and doesnt
// hog the event loop queue, you can process these results in asynchronous batches,
// after each one yielding back to the event loop to let other waiting events happen.

// Here is a simple approach:

var res = [];
// reponse (..) recieves array of results from the ajax call

function response(data) {
  var chunk = data.splice( 0, 1000 );

  // add onto existing 'res' array
  res = res.concat(
    // make a new transofmred array with all 'chunk' values doubled
    chunk.map(function(val) {
      return val * 2;
    })
  );
  if (data.length > 0) {
    // asynch schedule next batch
    setTimeout( function(){
      response(data);
    }, 0 );
  }
}
// ajax("http://exapmple.data.txt", response);
// ajax("http://exapmple.data2.txt", response);

// we process the data set in maximum-sized chunks of 1000 items.
// By doing so, we ensure a short-running "process", even if that
// means many more subsequent "processes", as the interleaving (performant) site/app.

// We use the setTimeout(.. 0) (hack) for asynch scheduling which basically
// just means "stick this function at the end of the current event loop queue".


// Jobs
// As of ES6 theres a new concept layered on top of the event loop queue called
// "job queue". The most likely exposure youll have to it is with the asynchronous
// behaviour of Promises.
// unfortunately, at the moment its a mechanism without an exposed API, and thus
// demonstrating it is a bit more convouluted. So we're going to descripte it
// conceptually.

// The job queue is a queue hanging off the end of every tick in the event loop
// queue. Certain asynch -implied actions that may occur during a tick of the
// event loop will not cause a while new event tot be added to the event loop queue,
// but will instead add an item (aka Job) to the end of the current tick's job queue.
// A job can also cause more jobs to be added to the end of the same queue.
// So its theoretically possible that a job lool could spin indefinetely, thus
// starving the program of the ability to move on to the next event loop tick.
// This  would conceptually be almost the same as just expresing a lonog-runing
// or infinite loop. Jobs are kind of like the spirit of the setTimeout(..0) hack,
// but implemented in such a way as to have a much more  well-defined and
// guaranteed ordering: later, but as soon as possible.
// Lets imagine an API for scheduling jobs, consider:



console.log( "A" );
setTimeout( function() {
  console.log( "B" );
}, 0);

// theoretical "Job API"
schedule( function() {
  console.log( "C" );

  schedule( function() {
    console.log( "D" );
  });
});

// You might expect this to print out A B C D, but instead it would print out
// A C B D, because the jobs happen at the end of the current event loop tick,
// and the timer fires to schedule for the next event loop tick (if available)


// Statement ordering
// The order in which we express statements in our code is not neceearily the same
// order as the js engine will execute them, That may seem like quite strange assertion
// to make, so well just brefly explore it. Consider:
var a, b;
a = 10;
b = 30;
a = a + 1;
b = b + 1;

console.log(a + b); // 42

// This code has no expressed asynchrony to it,
// (other than the rare console asynch I/O dicussed earlier) so the most likely assumption
// is that it would process line by line in top down fashion.

// But its possible that the js engine, after compiling this code might find
// opportunities to run code faster by rearraging (safely) the order of these
// statements. Essentially, as long as you cant observe the reordering anythinmgs fair game.
//For example, the engine might find its faster to actually execute the code like this:

var a, b,
a = 10;
a++;
b = 30;
b++;

console.log( a + b );  // 42


// or this:

var a, b;
a = 11;
b = 31;
console.log( a + b ); // 42

// or even:

// because 'a' and 'b' arent used anymore, we can inline and dont even need thems
console.log( 42 ); // 42

// In all these cases the js engine isperforming safe optimizations during
// its compilation, as the end observable result will be the same.
// But here's a scenario where the specific optimizations would be unsafe and thus
// couldnt be allowed (of course not to sat that its not optimized at all)

var a, b;
a = 10;
b = 30;

// we neex 'a' and 'b' in their preincrementet state!
console.log( a * b); // 300

a = a + 1;
b = b + 1;

// Other console.log( a + b); // 42
// Other examples  where the compiler reordering could create observable side
// effects (and thuis must be dissalowed) would include things like any function  call
// with side effects, (even and especially getter functions) or ES6 proxy objects.
// Consider:

function foo() {
  console.log(b);
  return 1;
}

var a, b, c;

c = {
  get bar() {
    console.log( a );
    return 1;
  }
};

a = 10;
b = 30;

console.log(a += foo()); // 30
console.log(b += c.bar);  // 11
console.log( a + b ); // 42

// if it weerent for the console.log(..); statements in this snippet
// the js engine would likely have been free, if it wanted to, to  reorder the code
// like this:

// ...
a = 10 + foo();
b = 30 + c.bar;

// ..


/*
  CALLBACKS
*/

// Countless JS programs even every sophistricated and complex ones, have
// been written upon no other async foundation than the callback (with, of course
// the concurrency interaction patterns we explored ealier.) The callback function
// is the asynch workhorse for Javascript, and it does its job respectably.

// Except.. calölbacks are not without their shortcommings. Many delopers
// are excited by the promise of better async patterns. But its impossible to effectively
//use any abstraction if you dont understand its abstracting, and why.

// Continuations
// lets go back to the async callback example we started with in chapter 1,
// but let me slighly modify it to illustrate a point:

//   A
//   ajax( ".. " function(...) {
//  C
// });
// B

// A // B represent the first half of the program aka the "now",
// and // C marks the second half of the program aka the "later".
// The first half executes right away, and then theres a pause if indeterminate
// lenght. At some future moment, if the Ajax call coompletes, then the program
// will pick up where it left off, and continue with the second half.

// In other words, the callback function wraps or encapsulates the continuation
// of the program. Lets make the code even simple:
/*


// A
setTimeout(function(){
  // C
}, 1000);
// B



// Nested/Chained Callbacks
// Consider:
listen( "click", function handler(evt) {
  setTimeout( function request() {
    ajax( "http://someurl.1", function response(text) {
      if (text == "hello") {
        handler();
      }
      else if (text == "world") {
        request();
      }
    });
  }, 500);
});

// There a good chance code like that is recognizable to you. We've got
// a chain of three functions nested togheter, each one representing a step in
// an asynchronous series, tasks/"process".

// This kind of code is often callbed "callback hell", and sometimes also referred
// to as the "pyramid of doom".

// But callback hell actually has almost nothing to do with thenesting/indentation.
// Ots far deeper problem than that. We'll show how and why as we continue through
// the rest of this chapter.

// First we're waiting for the click event, then we're wwainting for the
// timer to fire, then we're waiting for hte ajax response to come back,
// at which point it might do it all again.

// at a first glance this code may seem to map its asynchrony naturally to sequential
// brain planning.

// First (now)
listen("..", function handler() {
  // ..
});

// Then "later"

setTimeout( function request(){
  // ..
}, 500);

// Then still later:
ajax("..", function response() {
  // ..
});

// And finally (most later)

if () {
  // ...
}
else {

}


// But theres several problems with reasoning about this code linerly in
// such a fashion.
// Forst, its an accident of the eexample that our step are on subsequent lines
// ( 1,2,3 and 4 ..) in real async JS progra,s, theres often alot more noise
// cluttering things up, noise that we have to deftly maneuver past in our brains
// as we jump from  one function to the next. Understanding the asynch flow
// in such callback-laden code is not impossible, but its certainly fnot natural
// or easy, even with lots of practiuse.

// But alose, theres something deeper wrong, which isnt evident just in that code example.
// Let me make up another scenario (pseudocodeish):

doA( function() {
  doB();

  doC( function() {
    doD();
  })
  dpE();
});
doF();

*/

// while the experienced among you will correctly identify the trie order of operatios
// here, im betting its more than a little confusing at first glance, and takes concerted mental cycles
// to arrive at. The operations will happen in this order:

// doA()
// doF()
// doB()
// doC()
// doE()
// doD()

/*
// Lets reweire trhe previous nested event/tomeout/ajax example without using nesting
listen( "click", handler);

function handler() {
  setTimeout( request, 500);
}

function request() {
  ajax( "http://some.url.1", response);
}

function response() {
  if (text == "hello") {
    handler();
  }
  else if (text == "world") {
    request();
  }
}


// this formulation of the code is not hardly as recognizable  as having the
// nesting/indentation woes of its previous form, and yet its every bit of
//susceptible callback hell, why?

// As we go to linerly (sequentially) reason about this code, we have to skip
// from one function, to the next, to the next, and bounce all
// around the code base to "see" the sequence flow. And remember this is
// simplified code in sort of best-cast fashion. We all know that
// real async js program code bases are foten fantastically more jumbled, which
// makes such reasoning orders of magnitude more difficult.

// Another thing to notice: to get steps 2,3 and 4 linked together so
// they happen in succession, the only affordance callbacks alone gives us
//  is to hardcode step 2 into step 1 and step 3, into step 2, setp 4 into step 3
// and so on. The hardcoding ist necessarily a bad thing, if it really fixes condition that
// step 2 should always lead to step 3.


// Trust issues
// The missmatch between sequential brain of planning and callbacks driven async js
// code is only part of the problem with callbacks.
// There's something much deeper to beconcerned about.
// Lets once again revisit the notion of a callback function as the continuation
// (aka the second half) of our program:

// ajax( "..", function(...) {
//    C
// });
// B

// A and // B happen now, under the direct control of the main JS program.
// But // C gets deferred to happen later, and under the control of another party
// in this case the ajax(...) function. In a basic sense, that sort of hand off
// of control doesnt regularly cause lots of problems.

// But dont be fooled by its infrequency, and assume that this control switch
// isnt a big deal. In fact its one of the worst problems with callback-driven design.
// It revolves around the idea that sometimes ajax(..) is not a function that you wrote
// or that you directly control. Many times its a utility provided by some third party.
// WE call this "inversion of control" when you take part of your program and
// give over control of its execution to another third party. THeres an unspoken contract
// that  exists between your code and the third-party-utility, a set of  things
// you expect to be maintained.


// Tale of Five Callbacks
// If a users clicks "confirm" to buy a TV you maybe need to call a third-party
// function, so that the sale can be tracked.
// You notice that theyve provided what looks like an async tracking utility,
// probably for the sake of performance best practices, which means you need to pass in a
// callback function, in this continuation that you pass in, you will have the final
// code that charges the customers credit card and displays the thank you page.
// THe code might look like this:

analytics.trackPurchase(purchaseData, function() {
  chargeCreditCard();
  displayThankyouPage();
});



// What if  a customer would get charged 5 times, apparently the developers
// of the third-party utility had been working on some experimental code that
// under certain condidiotns, would retry the provided callback once per second,
// for five seconds, before failing and timing-out.
// Whats next? After some tinkering you implement some simple ad hoc code like
// the following:

var tracked = false;
analytics.trackPurchase( purchaseData, function() {
  if (!tracked) {
    tracked = true;
    chargeCreditCard();
    displayThankyouPage();
  }
});

// Then the QA engineer asks "what happens if they never call the callback?"
// Heres roughöy the list you come up with of the ways the analytics utility
// could misbehave:

// Call the callback too early (before its tracked)
// Call the callack too late(or never)
// Call the callback too few or too many times (like the problem you encountered)
// Fail to pass along any necessary envioroment/ parameters to your callback
// Swallow any errors/exceptions that may happen

// You are probably starting to realize that yuou are going to have to invent
// an aweful lot of ad hoc logic in each and every single callback thats
// passed to a utility youre not positive you can trust...



// Not just Others Code
// So contemplate this: can you even really trust utilities that you
// theoretically control (in your own code base)?
// Think of it this wayt: most of us agree that atleast to some we
// should build our own internal functions with some defensive checks on the
// input parameters, to reduce / prevent unexpected issues.

// overly trusting input:
function addNumbers(x,y) {
  // + is overloaded with coercion to also be string concatenation,
  // so this operation isnt trictly safe depending on whats passed in
  return x + y;
}

console.log(addNumbers(21, 21)); // 42
console.log(addNumbers( 21, "21")); // 2121


// Defensive against untrusted input:
function addNumbers(x,y) {
  if (typeof x != "number" || typeof y != "number") {
    throw Error("Bad parameters");
  }
  return x + y;
}

console.log(addNumbers( 21, 21)); // 21
console.log(addNumbers(21 , "21")); // Uncaught Error: Bad parameters



// Still ssafe but unfriendlier
function addNumbers(x,y) {
  // ensure numerical input
  x = Number(x);
  y = Number(y);
  // + will safely do numeric addition
  return x + y;
}

console.log(addNumbers(21,21)); // 42
console.log(addNumbers(21, "21")); // 42



// Trying to Save Callbacks
// There are severak variations of callback design that have attempted to address
// some of the trust issues weve just looked at. Its a valiant, but doomed effort
// to save the callback pattern from impoding on iteself.

// For example, regarding more graceful error handling, som API designs provide
// split-callback  (one for the success notification, and one for errror notification)

function success(data) {
  console.log(data);
}
function failure(err) {
  console.log(err);
}
ajax("http://some.url.1", success, failure);

// In APIs of this design, often the failure() error handler is optional, and not
// and if not provided it will be assumed you want the errors swallowed, ugh.
// Another common callback pattern is called "error-first-style"
// (sometimes node-style), where the first argument of a single callback is
// reserved for an error object (if any). If successfull, this arugment will be
// empty/false, but if an error result is being signaled the first argument is set
// truthy.


function response(err, data) {
  // error?
  if (err) {
    console.log(err);
  }
  // assume success
  else {
    console.log(data);
  }
}
ajax("http://some.url.1.com", response);


// in both cases several things should be observed. FIrst it has not really resolved
// the majority of trust issues like it may appear. HTheres nothing about either callback
// that prevents or filters unwanted repeated invocations. Moreover, things are
// worse now,m because you may get both success and error signals, or neither, and you
// still hhave to code around either of thise conditions.
// What about the trust issue of never being called? If its a concern you likely
// will need to set up a timeout that cancels the event. You could make a utility to
// help you with that:

function timeoutify(fn, delay) {
  var intv = setTimeout( function() {
    intv = nulkl;
    fn( new Error("Timeout!") );
  }, delay);
  return function() {
    // timeout hasnt happened yet
    if(intv) {
      clearTimeout(intv);
      fn.apply(this, arguments)
    }
  };
}

// Here is how you use it:


function foo(err, data) {
  if(err) {
    console.log(err);
  }
  else {
    console.log(data);
  }
}
ajax("http://some.url.1.com", timeoutify(foo, 500));



// what if you dont know whether the API in question will always execute async?
// You could invent a utility like this asyncify(..)
// Proof-of-concept:


function asyncify(fn) {
  var orig_fn = fn,
  intv = setTimeout( function() {
    intv = null;
    if (fn) fn();
  }, 0);

  fn = null;

  return function() {
    // firing too quickly, before intv timer has fired to indicate async turn passed
    if (intv) {
      fn = orig_fn.bind.apply(orig_fn,
        [this].concat( [].slice.call(arguments))
      );
         // add the wrappers 'this' to the 'bind(..)' call params, as well as
         // currying any passed in parameters.
    }
    // Already async
    else {
      // invoke original function
      orig_fn.fn.apply(this, arguments);
    }
  };
}


// You suse asyncify() like this:
function result(data) {
console.log(a);
}
var a = 0;
ajax("...pre cached url ...", asyncify(result));
a++;
// This code will always output  1 instead of 0 - result(..) cannot help
// to be invoked asynchronously which means the a++ has a chance to run before
// result(..) does





/*
  PROMISES
*/
/*
// The issue we want to address first is the inversion of control, the
// trust that is so fragilely held and so easily lost.
// we want to say "heres what happens later, after the current step finishes."
// but what if we could uninvert that inversion of control?
// What of instead of handling the continuation of our program to another
// party, we could expect it to return us a capability to know when its task finishes,
// and then our code could decide what to do next?
// This paradigm is called Promises.

// Values now and later
// When you write code to reason about a value as performing math on a number,
// whether you realize it or not youve been assumpting something very fundamental
// about that value, which is that its a concrete now value ready.

var x, y = 2;
console.log( x + y);  //NaN
// The x + y operation assumes both x and y are already set. In terms we'll
// expound on shortly, we assume the x and y values are already resolved.

 // it would be nonesense to expect that the + operator by itself would
 // somehow be magically capable of detecting and waiting around until both x and y
 // are resolved (aka ready) and only then do the operation. That would cause
 // chaos in the program if different statemments finished now and other finished later..

 // How could you possibly reason about the relationships between two statements
 // if either on (or both) of them might not be finished yet?
 // If statement 2 relies on statement 1 being finished, there are just two
 // outcomes: either statement 1 finished right now, and everything proceeds fine,
 // or statement 1 didnt finish yet, and thius statement 2 is goign to fail.

// Lets go back to our x + y operation. Imagine if there was a way to say,
// "add x and y, but if either of them isn't ready yet, just  wait until they are.
// add them  as soon as you can".

// callbacks..

function add(getX, getY, cb){
  var x, y;
  getX( function(xVal){
    x = xVal;
    // both ar ready?
    if (y != undefined) {
      cb(x + y);  // send along sum
    }
  });
  getY( function(yVal) {
    y = yVal;
    // both ready?
    if (x != undefined) {
      cb(x + y);  // send along sum
    }
  });
}
// fetchX() and fetchY() are sync or async functions
add( fetchX, fetchY, function(sum){
  console.log(sum);
})

// In that snippet we treated x an y as future values, and we express an operation
// ad(..) that (from the outside) does not care whether x or y or both are available
// right away. In other words it normalizes the now and latger, such that we can
// rely on a predictable outcome of the add(...) operation.

// By using an add() that is temporally consistent - it behaves the same across
// now and later tiumes- - the async code is much easier to reason about.

// Promise value
//  Lets glimpse at how we can express the x + y example via promises functions:


function add(xPromise, yPromise) {
  // 'Promise.all([..])' takes an array of promises and
  // returns a new promise that waits on them all to finish
  return Promise.all([xPromise, yPromise])

  // when that promise is resolved, lets take the received X and Y
  // values and add them toghether
  .then( function(values) {
    // values is an array of the messages from the previously resolved promises
    return values[0] + values[1]
  });
}
// fetchX() and fetchY() returns promises for their respective values
// which may be ready now or later
add(fetchX(), fetchY())

// we get a promise back for the sum of those two numbers.
// Now we chain-call 'then(..)' to wait for the resolution of that returned promise
.then( function(sum){
  console.log(sum);
});

// There are two layers of promises in this snippet.
// fetchX() and fetchY() are called directly, and the values they return
// (promises) are passed into add(..). The underlying Valuesthose promises represent
// may be ready now or later, but each promise normalizes the behaviour to be the same
// regaredless. We reason about X and Y values in a time-indepentent way.
// They are fututre values.

// The second layer is the promise that add(..) creates (via Promise.all([...]))
// and retunrs, which we wait on by calling then(..) when the add(..) operation
// completes, our sum future value is ready and we can print it out. We hide inside
// of add(..) the logic for waiting on the X and Y future values.


// Inside add(..) the promise.all([ .. ]) call creates a promise which is waiting on
// promiseX and promiseY to resolve. The chained call to .then(..) creates another
// promise, which the return values[0] + values[1] line immediately resolves
// (with the result of the addition)
// Thus , the then(..) call we chain off the end of the add(..) call - at the end
// of the snippet - is actually  operating on that second then promise returned,
// rather than the first one created by promise.all([ .. ]), Also, thought we are not
// chaining off the end of that second then(..) it too has created another promise,
// had we chosen to observe /use it.

// With promises, the then(..) call can actually take two functions, the first
// fulfillment (as showm earlier) and the second for rejection:

add( fetchX(), fetchY() )
.then(// fulfillment handler)
function(sum) {
  console.log(sum);
},
function(err) {
  console.log(err);
});

// If something went wrong getting X or Y , or something somehow failed during
// the addition, the promise that add(..) returns is rejected, and the second
// callback error handler passed to then(..) will receive the rejection value from
// the promise.


// Because promises encapsulate the time dependent state- waiting on the
// fulfillmen t or rejection of the underlying value -- from the outside, the
// promise itself is time-independent, and thus promises can be composed (combined)
// in predictable ways regardless of the timing or outcome underneath.

// Moreover once a promise is resolved, it stays  that way forever it becomes an
// immutable value, at that point - and can then be observed as many times as necassary.


// Completion Event
// As we just saw, an individual Promise behaves as a future value..
// But theres another way to think of resolution of a promise: as a flow-control -
// mechanism - a temporal this-then-that for two or more steps in an a asynchronous task.
// Lets imagine calling a function foo(..) to perform some task. We dont
// know about any of its defails, nor do we care. It may complete the task right away
// or it may take a while. We just simply need to know when foo(..) finishes so that
// we can move on to our next task. In other words wed like a way to be notified of
// foo()'s completion so that we can continue. In typical javascript fashion, if you
// need to listen for a notification you'd likely think of that in terms of events
// So we could reframe out needd for notification as a need to listen for a completion
// event (or continuation event) emitted by foo(..)

// With callbacks the notification would be our callback invoked by the task foo(..)
// but with promises we turn the relationship around, and expect that we can listen for
// an event from foo(..), and when notified, proceed accordingly.
// pseudo code:

foo(x) {

}
foo(42);
on (foo "completion") {

}
on (foo "error") {

}


// We call foo(..) and then we set up two event listeners, one for "Completion"
// and one for "error", the two posible final outcomes of the foo(..) call.
// In essence , foo(..) doesnt even appear to be aware that the calling code has
// subscribed to these events, which makes for a very nice separation of concerns.

// unfortunately, such code would require some magic of the JS enviroment that
// doesnt exist. Heres the more natural way we could expres this in js:

function foo(x) {
  return listener;
}
var evt = foo(42);

evt.on("completion", function() {

});

evt.on("failure", function(err) {
  console.log(err);
});


// foo() expressly creates an event subscription capability to return back,
// and the calling code receives and registers the two event handlers against it.
// The inversion from normal calback-oriented code should be obvious, and its
// intentional. Insead of passing the callback to foo(..), it returns an event
// capability we call evt, which receives the callbacks.

// Multiple separate parts of the code can be given the event listener capability,
// and they can all independently be notified when foo(..) completes, in order
// to perform subsequent steps:

var evt = 42;
// let  bar(..) listen to foo() completion.
bar(evt);

//
Uninversion of control enables a nicer separation of concerns, where bar()
// don't need to be involved in how foo(..) is called. Similarly foo(..)
// doesnt need to know or care that bar(..) exist or are waiting to be notified
// when foo(..) completes. Essentially this evt object is a netural third-party
// neogation between the separate concerns.

//Promise "Events"
// The evt event listening capability is an aanalogy for a Promise.
// Consider:


function foo(x) {
  // start doind something that could take a while
  // construct and return a promise

  return new Promise( function(resolve, reject){
  // eventually call resolve() or reject()
  // which are the resolution callbacks for the promise
  });
}

var p = foo(42);
bar(p);


// the pattern shown with new Promise(function(){}) is generally called the
// "the revealing constructor pattern". The function passed in is executed
// immediately (not async deferred,, as callback to then(..) are) and its
// provided two parameters, which in this case we've named resolve and reject.
// THese are the resoolution finctions for the promise, resolve(..) generally
// signals fulfillment and reject(..) signals rejection.


function bar(fooPromise) {
  fooPromise.then(
    function() {
      // foo() has now finished so do bar() task
    },
    function() {
      // error
    }
  )
}

// Promise resolution doesntr necessarily need to involve sending along a message,
// as it did when we were examining promises as future values. It can just be a
// flow-control-signal, as used in the previous snipppet.
// Another way to approach this is:

function bar() {
  // foo() has definetely finished so do bar()
}

function errorBar() {
}

var p = foo(42);

p.then(bar, errorBar);

// instead of passing the p promise to bar(..) we use the promise to control when
// bar(..) will get executed, if ever. The primary difference is in the error handlig.

// In the first snippets approach bar() is called regardless of whether fo(..) succeeds
// or fails, and it handles its own fallback logic if its notified that foo(..) failed.
// In the second snippet, bar(..) gets called only if foo(..) succeeeds, and otherwise
// errorBar(..) gets called. Neither approach os correct per se. There will be cases
// where one is preferred over the other. In either case the promise 'p'
// comes back from foo(..) is useed to control what happens next.
// Whenever p is resolved, the next step will always bt the same, both now and later.

//Thenable Duck Typing
// The general term for type checks that make assumptions about a value's type
// based on its shape, (what properties are present) is called duck typing:


if (
  p!= null &&
  (
    typeof p === "object" ||
    typeof p === "function"
  ) &&
  typeof p.then === "function"
) {
  // assume its a thenable!

}
else {
  // not a thenable
}

// If you try to fulfill a promise with any object/function value that happens
// to have a then(..) function on it, but you werent intending it to be treated
// as a promise/thenable, youre out of luck, because it will automatically be
// recognized as thenable and treated with special rules.

// This is even true if you diddnt realize the values has a then(..) on it.
// Example:
var o = {then: function(){}}

// make 'v' be [[Prototype]] - linked to 'o'
var v = Object.create(o);

v.id = 1;
v.role = "admin";

console.log(v.hasOwnProperty("then")); // false

// v doesnt look like a promise or thenable at all. Its just a plain object
// with some properties on it. Youave probably just intending to send
// that value around like any other object.But unknown to you, v is also [[Prototype]]
// - linked to another object o, which happens  to have a then(..) on it. So
// the thenable duck typing checks will think and assume v is a thenable..
// It doersnt even need to be something as directly intentional as that:
Object.prototype.then = function(){};
Array.prototype.then = function(){};
var v1 = { hello: "world" };;
var v2 = [ "hello", "world" ];

// Both v1 and v2 will be assumed to be thenables. You cant control or predict
// if any other code accidentally or maliciously adds then(..) to Object.prototype,
// Array.prototype, or anyu other native prototypes. And if whats specified is a function that
// doesnt call either of its parameters aas callbacks, then  any promise resolved with
// such a value will just silently hang forever.

// But what if a promise itself never gets resolved? Even that is a condition that
// prmoises provide an answer for, using a higher level abstraction called 'race'.


function foo() {
  console.log("foo");
}

// a utility for timing out a Promise:
function timeoutPromise(delay) {
  return new Promise( function(resolve, reject){
    setTimeout( function() {
      reject("Timeout");
    }, delay);
  });
}

// setup timeout for foo()
Promise.race([
  foo(),
  timeoutPromise(3000)
]).then(
  function() {
    // foo() is fulfilled in time
    console.log("foo done");
  },
  function(err) {
    console.log(err);
  }
)
// foo
// foo done


// Swallowing any Errors/Exceptions
// If at any point in the creation of a promise, or in the observation of its
// resolution, a JS exception occurs, such as a TypeError or ReferenceError, that
// exception will be caught, and it will firce the promise in question to becode
// rejected . For example:

var p = new Promise( function(resolve, reject) {
  foo.bar();
  resolve(42);
})

p.then(
  function fulfilled() {
    console.log("done");
  },
  function rejected(err) {
    console.log(err); //ReferenceError: foo is not defined
  }
);


// The js exception that occurs from foo.bar() becomes a promise rejection that you
// can catch and respond to. But what happens if a Promise is fulfilled but
// there s a JS exception error during the observation in a then(..) registered callback?
// Even those arent lost, but you may find how they are handled a bit surprising
// until you dig deeper:

var p = new Promise( function(resolve, reject) {
  resolve(42);
});


p.then(
  function fulfilled(msg) {
    foo.bar();
    console.log(msg); // never gets here..
  },
  function rejected(err) {
    console.log(err); // never gets here ..
  }
);


// If you pass an immediate, non-promise non-thenable value to promise.resolve()
// you get a promise thats fulfilled with that value. In this case promises p1 and p2
// will behave identically:

var p1 = new Promise( function(resolve, reject) {
  resolve(42);
});

var p2 = Promise.resolve(42)

// BHut if you pass a genuine promise to promise.resolve(..) you just get
// the same promise back:

var p1 = Promise.resolve(42);
var p2 = Promise.resolve(p1);
console.log(p1 === p2); // true

// Even more importantly, if you pass a non-promise thenable value to Promise.resolve(..)
// it will attempt to unwrap that value, and the unwrapping will keep going until
// a concrete final non-promise-like value is extracted:

var p = {
  then: function(callback) {
    callback(42);
  }
};

p.then(
  function fulfilled(val) {
    console.log(val); // 42
  },
  function rejected(err) {
    console.log(err);
  }
)

// The p is thenable, but its not a genuine Promise. Luckily its reasonable,
// as most will be. But what if you got back instead something that looked like:

var p = {
  then: function(cb, errcb) {
    cb(42);
    errcb("error")
  }
};

p.then(
  function fulfilled(val) {
    console.log(val);
  },
  function rejected(err) {
    console.log(err);
  }
)


// the p is thenable but its not so well behaved of a promise. Is it
// malicious? Or is it just ignorant how Promises should work?
// it doesnt matter, in either case its not trustable as is.
// Nonetheless, we can pass either of these versions of p to Pormise.resolve(...)
// and well get the normalized,  safe result wed expect:

Promise.resolve(p)
.then(
  function fulfilled(val) {
    console.log(val);
  },
  function rejected(err) {
    console.log(err);
  }
)

// promise.resolve() will accept any thenable, and unwrap it to its nonthenable value.
// But you get back  from promise.resolve(..) a real, genuine Promise in its place,
// one that you can trust. If what you passed in is already a genuine promise, you
// just get it right back, so theres no downside at all to filtering through
// Promise.resolve(..) to gain trust.

// So lets say we are calling a foo(..) utility and we are not sure we can trust its return
// value to be a well-behaving promise, but we know ots at least a thenable Promise.resolve()
// will give is a trustable promise wrapper to chain off of:

// don't just do this:
foo(42)
.then( function(v){
  console.log(v);
});

// instead do this:

Promise.resolve(foo(42))
.then( function(v) {
  console.log(v);
})



// Chain FLow
// We can string multiple promises tighether to represent a sequence of async steps.
// The key to making this work is built on two behaviours intrinsic to promises.

// Every time you call then(..) on a promise, it creates and returns new Promise,
// which we can chain with.
// Whatever value you return from the then(..) calls fulfilllment callback
// (the first parameter) is automatically set as the fulfillment of the chained
// promise (from the first point)
// Lets illustrate what that means, and then well derive how that helps us create
// async sequences of flow control. COnsider the following:

var p = Promise.resolve(21);

var p2 = p.then( function(v){
  console.log(v); // 21

  return v * 2;
});

// chain off p2
p2.then(function(v){
  console.log(v); // 42
});

// By returning v * 2 we fulfill the p2 promise that the first then(..) call
// created and returned. When p2's then(..) call runs, its receiveing the fulfillment
// from the return v * 2 statement. Of course p2.then(..) creates yet another promise
// which we could have stored in a p3 variable.
// But its a little annoyying to have to create an intermediate variable
// p2 (or p3 etc). Thankfully we can easily just chain these toghether

var p = Promise.resolve(21);

p.then( function(v) {
  return v * 2;
}).then( function(v) {
  console.log(v);
})

// So now the first then(..) is the first step in an async sequence, and the second
// then(..) is the second step. This could keep going for as long as you need it
// to extend. Just keep chaining off a previous then(..) with each automatically created Promise.

// What if we wwant step 2 to wait for step 1 to do something asynchronous?
// We're using an immediate return statement, which immediately fulfills the
// chained promise. The key to making a promise sequence tryly async capable
// at every step is to recall how Promise.resolve(...) operates when what you
// pass to it is a Promise or thenable instead of a final value, Promise.resolve(..)
// directly returns a received genuine Proomise, or it unwraps the value of received
// thenable, - and keeps going recursively while it keeps unwrapping thenables.

// The same sort of unwrapping happens if you return a thenable or promise
// from the fulfillment (or rejection) handler, consider:


var p = Promise.resolve(21);

p.then( function(v) {
  console.log(v);  // 21
  // create a promise and return it
  return new Promise( function(resolve, reject) {
    resolve( v * 2);
  });
})
.then( function(v) {
  console.log(v); // 42
});

// even though we wrapped 42 up in a promise that we returned, it still got
// unwrapped and ended up as the resolution of the chained promise, such that the
// second then(..) still receuved 42. If we intoduce asynchrony to that wrapping
// promise, everything still nicely works the same:

var p = Promise.resolve(21);

p.then( function(v) {
  console.log(v); // 21

  return new Promise( function(resolve, reject) {
    // introduce asynchrony
    setTimeout( function() {
      // fulfill with value '42'
      resolve( v * 2);
    }, 100);
  });
})

.then( function(v){
  console.log(v); // 42
});

// Lets generalize a delay-promise creation into a utility we can reuse for
// multiple steps:

function delay(time) {
  return new Promise( function(resolve, reject) {
    setTimeout(resolve, time);
  });
}

delay(100)
.then( function STEP2() {
  console.log("step 2 (after 100ms)");
  return delay(200);
})
.then( function STEP3() {
  console.log("step 3 (after 200ms)");
})
.then( function STEP4() {
  console.log("step 4 (next job)");
})
.then( function STEP5(){
  console.log("step 5 (after another 50ms)");
});

// Calling delay (200) creates a promise that will fulfill in 20ms, and then we
// return that from the first then(..) fulfillment callback, which causes the
// second then(..)'s promise to wait on that 200ms promise.


// Instead of timers, lets consider makking ajax requests.

// Promise-aware ajax
function request(url) {
  return new Promise( function(resolve, reject) {
    ajax(url, resolve)
  });
}

// first we define request() utility constructs a promise to represebt the
// completion of the axjax() call.

request("http://some.url.1/")
.then ( function(response1) {
  return request("http://some.url.1/" + response1)
})
.then( function(response2) {
  console.log(response2);
});

// once response1 comes back we use the  value to construct a second URL, and
// make a second request(..) call. That second request(...) primise is returned
// so tthat the third step in our async flow control waits for that ajax to complete.
// Finally, we print respose2 once it returns.

// The promise chain we construct is not only a flow control that expresses a
// multistep async sequence, but it also acts as a message channel to propagate
// messsages from step to step.

// What if somethiung went wrong in one of the steps of the Promise chain?
// An error/exception is on per-promise basis, which means its possible to
// catch such an error at any point in the chain, and that catching acts to sort
// of "reset" the chain back to normal operation at that point:
// step 1
request("http://some.url.1")
// step 2
.then( function(response1) {
  foo.bar(); // undefined error
  // never gets here
  return request ("http://some.url.2/?v=" + response1)
})
.then( function fulfilled(reponse2) {
  // never gets here
}, // rejection handler to catch error
function rejected(err) {
  console.log(err);
  return 42;
}) // step 4
.then( function(msg){
  console.log(msg);
});


*/
/*
// If you call then(..)  on a promise, and you only pass a fulfillment handler to it,
// an assumed rejection handler is substituted

var p = new Promise( function(resolve, reject){
  reject("Error")
});

var p2 = p.then( function fulfilled(){
  // never gets here
}
/*
 // assumed rejection handler, if omitted
 // any other non-function value passed
// function(err) {
// throw err;
});




// Error Handling
// The most natural form of error handling for most developers is
// the synchronous try..catch construct. unfortunately its synchronous-only, so
// it fails to help in async code patterns.

// In callbacks, some standards have emerged for patterned error handling, most
// notably error-first callback-style.

function foo(callback) {
  setTimeout( function() {
    try {
      var x = baz.bar();
      callback(null, x);
    }
    catch (err) {
      console.log(err); //  baz is not defined
    }
  }, 100);
}

foo(function(err, val){
  if (err) {
    console.log(err);
  } else {
    console.log(val);
  }
})

// the callback we pass to foo() expects to receive a signal of an error by the
// reserved first parameter, err, if present, error is assumed, if not success
// is assumed. This sort of error handlig is technically async capable, but it
// does not composee well at all. Multiple levels of  error-first callbacks doesnt
// woven together with these ubiquitos if statement checks will inevitably lead
// you to the perils of callback hell.

// So we come back to error handling in promises, with the rejection handler passed
// to then(..) Promises with the rejection handler passed to then(..)
// Promises dont use the popular error-first callback design style, but instead
// use split-callback style, theres one callback for fulfillment and one for rejection:


var p = Promise.reject("error");

p.then( function fulfilled(){
  // never gets here
},
function rejected(err) {
    console.log(err); // error
});
// while this pattern of error handling makes fine sense on the surface,
// the nuances of promise error handlig are often fair bit more difficult to
// fully graps, consider:


var p = Promise.resolve(42);

p.then( function fulfilled(msg){
  console.log(msg.toLowerCase()); // msg.toLowerCase is not a function
},
function rejected(err) {
  console.log(err);
});

// if the msg.toLowerCase() legitimately throws an error (it does) why doesnt
// our error handler get notified? as we exaplained earlier, its because
// that error handler is for the p promise, which has already been fulfilled with value 42
// The p promise is immutable,, so the only promise that can be notified of the error
// is the one returned from p.then() which in this case we don't capture.

// To avoind loosing an error to the silence of a forgotten / discarded promise,
// some developers have claimed that the best proctice for promise chains is to
// always end your chain with a final catch() like:


var p = Promise.resolve(42);

p.then( function fulfilled(msg){
  console.log(msg.toLowerCase());
})
.catch(handleErrors);



// Promise.all([..])
// in async sequence (promise chain) only one task is being coordinated at any
// given moment, step 2 strictly follows step 1, and step 3 follows step 2.
// But what about doing two or mor esteps concurrently (aka "in paralell")?
// In the promise API we call this pattern "all([..])"
// Say you wanted to make two ajax requests at the same time, and wait for
// both to finishm, regardless of their order, before making a third request:

var p1 = $.ajax("data.txt");
var p2 = $.ajax("data.txt");

function request(url) {
  $.ajax({url: url})
}
Promise.all( [p1, p2] )
.then( function(msgs) {
  //both p1 and p2 fulfill and pass in their messages here
console.log(msgs);
  //return request(
  //  "http://some.url.3/?v=" + msgs.join(",")
  //);
})
.then( function(msg){
  console.log(msg);
});


// Promise.all([..]) expects a single argument, an array consisting generally of
// promise instances. The promise returned from the promise.all([..]) call will receive
// a fulfillment message (msgs in this snippet) that is an array of all the fulfullment
// messages from the passed in promises, in the same order specified (regardless of
// fulfillment order)

// Promise Race([..])
// While promise.all coordinates multiple promises concurrently and assumes all
// are needed for fullfillment, sometimes you want to respond only to the first promise.
// This pattern is clasically called a "latch", but in promises its called a race.

// Promice.race([..]) also expects a single array argument, conctaining one or more
// promises, thenables, or immediate values. IT doesnt take much more practical
// sense to have a race with immediate values, because the first one listed will
// obviously win. Similiar to promise.all([..]) promise.race([..]) will
// fulfill if and when any promise resolution is a fulfillment, and it will
// reject if and when any promise resolution is rejection.

// lets revisit our previous concuirrent ajax example, but in the context of
// a race between p1 and p2

function request(url){
  return $.ajax({url:url});
}

var p1 = request("data1.txt");
var p2 = request("data0.txt");

Promise.race( [p1, p2] )
.then( function(msg){
  console.log(msg);
})
.then( function(msg){
  console.log(msg);
})


// Timeout race
// We saw this example earlier, illustrating how Promise.race([..]) can be
// used to express the Promise timeout pattern
// foo() is a promise-aware function
// timeoutPromise(..) define earlier returns a promise that rejects a specified
// delay


function foo() {
  console.log("foo");
}

// a utility for timing out a Promise:
function timeoutPromise(delay) {
  return new Promise( function(resolve, reject){
    setTimeout( function() {
      reject("Timeout");
    }, delay);
  });
}

// setup a timeout for foo()
Promise.race([
  foo(),
  timeoutPromise(100)
])
.then(
  function(){
    // foo(..) fulfilled in time
    console.log("promise done");
  },
  function(err) {
    console.log(err);
  }
);

// Finally
// the key question to ask is, "what happens to the promise that get discarded?"
// It would typically end up garbage collection eligible, but from behavioral
// perspective promises cannot be canceled. Some developers have proposed that
// Promises need a "finally(..)" callback registration, which is always called
// when a promise resolves and allows you to specify any cleanup the may be
// necessary. This doesnt exist in the specification at the moment, but it may
// come in ES7. It might look like this:

var p = Promise.resolve(42);

p.then(foo)
.finally(cleanup)
.then(bar)
.finally(cleanup);


// In the meantime we could make a static helper utility that lets us observe
// without interfering  with.. the resolution of a Promise:


// a utility for timing out a Promise:
function timeoutPromise(delay) {
  return new Promise( function(resolve, reject){
    setTimeout( function() {
      reject("Timeout");
    }, delay);
  });
}


function foo() {
  console.log("foo");
}


// polyfill-safe guard check
if (!Promise.observe) {
  Promise.observe = function(pr,cb) {
    pr.then(
      function rejected(err) {
        Promise.resolve(err).then(cb);
      }
    );
    return pr;
  };
}

// Here's how we'd use it in the timout example from before:
Promise.race([
  Promise.observe(
    foo(),
    function cleanup(msg) {
      console.log("cleanup");
    }
  ),
  timeoutPromise(3000)
])


// Variations on all([..]) and race([..])
// While native ES6 promises come with built-in Promise.all([..]) and Promise.race([...])
// there are several other commonly used patterns with variations on those semantics:

// none([..])
// this pattern is like all([..]) but fulfillments and rejections are transposed.
// All promises need to be rejected - rejections become the fulfillment values
// and vice versa.

// any([..])
// This pattern is like all([..]) but ignores any rejectuibs so only one
// needs to fulfill instead of all of them

// first([..])
// This pattern is like a race with any([..]), which means that it ignores any
// rejections and fulfills as soon as the promise fulfills.

// last([..])
// This pattern is like first([..]) but only the latest fulfillment wins.

// Some Promise abstraction libraries provide these, but you could also define
// them yourself using the mechanics of promises race([..]) and all([..])

// For example, heres how we could define first([..])

//polyfill-safe guard check
if (!Promise.first) {
  Promise.first = function(prs) {
    return new Promise( function(resolve, reject){
      prs.forEach( function(pr){
        Promise.resolve(pr)
        .then(resolve);
      });
    });
  };
}


// Concurrent Iterations
// Sometimes you want to iterate over a list of promises and perform some tasks
// against all of them, much like you can do with synchronous arrays, map() some()
// every() etc. If the task to perform against each promise is fundamentally
// synchronous, these work fine, just as we used forEach() in the previous snippet

// lets consider an asynchronous map(..) utility that takes an array of values plus
// a function (Task) to perform against each. map(..) itself returns a promise
// whose fulfillment value is an array that holds (in the same mapping order)
// the async fulfillment value from each task:

if (!Promise.map) {
  Promise.map = function(vals, cb) {
    return Promise.all(
      vals.map( function(val) {
        return new Promise( function(resolve){
          cb(val, resolve);
        });
      })
    );
  };
}


// lets illustrate using map(..) with a list of promises (instead of values)

var p1 = Promise.resolve(21);
var p2 = Promise.resolve(42);
var p3 = Promise.resolve("error");

// double values in list even if theyre in Promises
Promise.map( [p1, p2, p3], function(pr, done) {
  Promise.resolve(pr)
  .then(
    // extract value as 'v'
    function(v) {
      done(v*2);
      console.log("done");
    },
  );
})
.then( function(vals){
  console.log(vals);
});


// Promise API recap
//the revealing constructor Promise(..) must be used with "new", and must be
// provided a function callback, which is synchronously/immediately called.
//This function is passed two function callbacks that act as resolution
// capabilities for the promse. We commonly label these resolve(..) and reject(..)

var p = new Promise( function(resolve,reject){
  // resolve(..)
  // reject(..)
});


// Promise.resolve(..) and Promise.reject(..)
// A shortcut for creating an already-rejected Promise is Promise.reject(..),
// so these two promises are equivalent:

var p1 = new Promise( function(resolve,reject){
  reject("error")
});

var p2 = Promise.reject("error")


var fulfilledTh = {
  then: function(cb) {
     cb(42);
   }
};

var rejectedTh = {
  then: function(cb,errCb) {
    errCb("error");
  }
};


var p1 = Promise.resolve(fulfilledTh);
var p2 = Promise.resolve(rejectedTh);

// Promise.resolve doesnt do anyuthing if what you pass in is already a genuine
// prommise. It just returns the value directly.


// Then.(..) & Catch(..)
// Each promise.resolve(..) has then(..)  and catch(..) methods, which allows
// registering of fulfillment and rejection handlers for the promise.
// Once the Promise is resolved, one or the other of these handlers will be called
// but not both,  and it will always be called asynchronously.

// then(..) takes one or two parameters, the first for the fulfillment callback
// and the second for the rejection callback. If either is omitted or is is
// Otherwise passed as a non-function value, a default callback is substituded
// respectively. The default fulfillment callback simply passes the message along,
// while  the default rejection callbackj simply rethrows (propagates) the error
// reason it receives.

// catch(..) takes only one rejection callback as a parameter, and automatically
// substitutes the default fulfillment callback, as just discussed.
// On othjer words it's equivalennt to then(null,..)

p.then(fulfilled);
p.then(fulfilled, rejected);
p.catch(rejected); // or p.then(null, rejected)

// then(..) and catch(..) also create and return a new promise which can be used to
// epxress promise chain flow control. If the fultillment or rejection callbacks have
// an exception thrown, the returned promise is rejected. If either
// callback returns an immediate, non promise, nnon-thenable value, that value is
// set as the fulfillment for the returned promise. If the fulfillment handler
// specifically returns a promise or thenable value, that value is unwrapped
// and becomes the resolution of the returned promise.


// Promise.all([..]) & Promise.race([..])
// The static helpers Promise.all([...]) and Promise.race([...]), on the ES6
// Promise API both create a promise as their return value. The resolution of
// that promise is controlled entirely by the array of promises that you
// pass in.

// For Promise.all([..]) , all the promoises you pass in must fulfill for the
// returned promise to fulfill. If any promise is rejected, the main returned
// promise is immediately rejected too. For fulfillment, you receive an array
// of all the passed in promises fulfillment values. For rejection, you
// receive just the first promise rejection reason value. This pattern is
// clasically called a gate: all must arrive before the gate opens.

// For promise.race([..]) only the first promise to resolve wins, and whatever the
// resolution is becomesk the resolution of the returned promise. This pattern
// is clasically called a "latch": the first one to open the latch gets through.
// Consider:




var p1 = Promise.resolve(42);
var p2 = Promise.resolve("hello world");
var p3 = Promise.reject("error");

Promise.race([p1, p2, p3])
.then( function(msg) {
  console.log(msg); // 42
});

Promise.all([p1, p2, p3])
.catch( function(err){
  console.log(err); // error
});

Promise.all([p1,p2])
.then( function(msgs) {
  console.log(msgs); // [42, "hello world"]
});


// If you construct a promise chain with that has no error handling in it,
// any error anywhere in the chain will propagate indefinetely down the chain,
// until observed (by registering a rejection handler at somes step)
// So in that specific case, having a reference to the last promise in the
// chain is enough, (p in the following snirppet) because you can register a
// rejection handler there, and it will be notified of any progagated errors.

// foo(...) STEP2(...) STEP3(...) are all promise-aware utilities.
// Although it may seem sneakily confusing, p here doesnt point to the first
// promise in the chain(the one from the foo(42) call), but instead from the
// last promise, the one that comes from the then(STEP3) call.

// Also, no step in the promise chain is observably doing its own error handling.
// That means that you could register a rejection error handler on p, and it would
// be notidied if any errors occur anyuwhere in the chain:

p.catch(handleErrors);


// But if any step of the chain in fact does its own error handling
// (perhaps hidden/abstracted away from what you can see), your handleErrors(..)
// won't be notified. This may be what you want , it was after all, a
// "handled rejection" -- but it also may not be what you want. The complete
// lack of ability to be notified is a limitation that restricts capabilities
// in some use cases.

// Its basically the same limitation that exists with a try..catch that can catch
// an expcetion and simply swallow it. So this isnt a limitation unique to promises,
// but is something we might wish to have a workaround for.

// unfortunately many times there is no reference kept for the intermeduate steps
// in a promise-chain sequence, so without such references you cannot attach error
// handlers to reliably observe the errors.

// Single Value
// Promises by defentition only have a single fulfillment valye or a single rejection
// reason. In simple examples, this isnt that big of a deal, but in more
// sophisticated scenarios you may find this limiting.

// The typical advice is to construct a values wrapper (such as an object or array)
// to contain these multiple messages. This solution works, but it cant be quite
// awkward and tedious to wrap and unwrap your messages with every single step of your
// promise chain.

// Splittig Values
// sometimes you can take this as a signal that you could/should decompose the
// problem into two or more promises.
// Imagine you have a utility foo(..) that produces two values (x and y)
// synchronously:

function getY(x) {
  return new Promise( function(resolve, reject) {
    setTimeout( function(){
      resolve( (3 * x) - 1);
    }, 100);
  });
}

function foo(bar, baz) {
  var x = bar * baz;

  return getY(x)
  .then( function(y){
    return [x,y]
  });
}

foo(10, 20)
.then( function(msgs){
  var x = msgs[0];
  var y = msgs[1];
  console.log(x, y);
});

// First lets rearrange what foo(..) returns so that we dont have to wrap x and y
// into a single array value transport through one promise, we can wrap each value
// into its own promise:

function getY(x) {
  return new Promise( function(resolve, reject) {
    setTimeout( function(){
      resolve( (3 * x) - 1);
    }, 100);
  });
}

function foo(bar,baz) {
  var x = bar * baz;
  // return both promises
  return [
    Promise.resolve(x), getY(x)
  ];
}

Promise.all([
  foo(10, 20)
])
.then( function(msgs) {
  var x = msgs[0];
  var y = msgs[1];

  console.log(x, y);
});

// Is an array of promises really better than an array of values passed
// through a single promise? Syntactically its not much of an improvement.

// But this approach clesely embraces the promise design theory.
// It's now easier inthe future to refactor to split the calculation of x and y
// into separate functions. Its cleaner and more flexible to let the calling code
// decide how to orchestrate the two promises - using Promise.all([..]) here,
// but certainly not the only option - rather than to abstract such details away inside foo(..)

// Unwrap / Spread Arguments
// The x = .. and var y= .. assignments are still awkward overhead.
function spread(fn) {
  return Function.apply.bind(fn, null);
}

function foo(bar, baz) {
  var x = bar * baz;

  return getY(x)
  .then( function(y){
    return [x,y]
  });
}

function getY(x) {
  return new Promise( function(resolve, reject) {
    setTimeout( function(){
      resolve( (3 * x) - 1);
    }, 100);
  });
}

Promise.all([
  foo(10, 20)
])
.then(
  spread( function(x,y) {
    console.log(x,y); // 200 599
  })
)

// thatsa bit nicer. Of course you could inline some ..

Promise.all(
  foo(10,20)
)
.then( Function.apply.bind(
  function(x,y) {
    console.log(x, y); // 200 599
  },
  null
));

// But best of  all, ES6 offers the array parameter destructuring form:
Promise.all(
  foo(10, 20)
)
.then( function([x,y]) {
  console.log(x, y);
})



// But there's also a lot of async that fit into a different model - one that's
// more akin to events and/or streams of data. Its not clear on the surface how
// well promises can fit into such use cases, if at all.
// Without a significant abstraction on the top of promises, they will completely
// fall short for handlig multiple value resolution.


// Imagine a scenario where you might want to fire off a sequence of async steps
// in reoinse to a stimulus (like an event) that can in fact happen multiple tiumes,
// like a button click.

// This probably wont work the way you want:

// click(..) binds the '"click"' event to a DOM element
// requests(..)  is the previouslyy defined promise-aware ajax

function request(url) {
  $.ajax(url);
  console.log(url);
}

var p = new Promise( function(resolve, reject){
  ("#btn_login", resolve)
});

p.then( function(evt){
  var btnID = evt.currentTarget;
  return request("data1.txt");
})
.then( function(text){
  console.log(text);
})


// the behaviour here works only if your application calls for the button to be
// clicked just once. If the button is clicked a second time, the p promise has
// already been resolved, so the second resolve(..) call would be ignored.

// Instead, youd probably need to invert the paradigm, creating a whole new promise
// chain for each event firing.

function request(url) {
  $.ajax(url);
  console.log(url);
}

click("#btn_login", function(evt){
  var btnID = evt.currentTarget.id;

  request("data1.txt" + btnID)
  .then( function(text) {
    console.log(text);
  });
});


// This approach will work in that a whole new promise sequence will be fired
// off for each "click" event on the button.
// But beyond just the ugliness of having to define the entire promise chain
// inside the event handler, this design in some respects violates the idea of
// separation of concerns/capabilioties (SoC). You might very well want to define
// your event handler in a different place in your code from where you define
// the response to the event (the promise chain). Thats pretty awkward to do in
// this pattern, without helper mechanisms.

// "a code base in motion (with callbacks) will remain in motion unless acted upon
// by a smart, Promises-aware developer".
// Consider a callback-based scnenario like the following:

function foo(x,y,cb) {
  $.ajax("data0.txt", + x + "&y" + y + cb);
}

foo(11, 31, function(err,text){
  if(err) {
    console.log(err);
  }
  else {
    console.log(text);
  }
});

// We need an Ajax utility that is Promise aware instead of callback-based,
// which we coiuld call request(..). You can make your own, as we have already.
// But the overhead of having to manually define promise-aware wrappers for every
// callback-based utility makes it less likely youll choose to refactor to promise
// -aware coding at all.

// Promises offer no direct answer to that limitation. Most promise libraries
// do offer a helper, however. But even wothout a library, image a helper like
// this:

// polyfill-safeguard check
if (!Promise.wrap) {
  Promise.wrap = function(fn) {
    return function() {
      var args = [].slize.call(arguments);

      return new Promise( function(resolve, reject) {
        fn.apply(
          null,
          args.concat( function(err,v) {
            if (err) {
              reject(err);
            } else {
                resolve(v);
            }
          })
        );
      });
    };
  };
}

// Promise.wrap(..) does not produce a promise. It  prodduces a function that will
// produce Promises. In a sense, a Promise-prducing function could be seen as a Promise
// factory. I propose "promisory" as the name for such a thing

// The act of wrapping a callback-expecting function to bbe a Promise-aware
// function is sometimes  referred to as "lifting", or "promisifying"
// But there doesnt seem to be a standard term for what to call the
// resultant function other than a "lifted function".

// So Promise.wrap(ajax) produces an ajax)..  promisory we call request(..)
// and that promisory påroduces Promises for ajax responses.

// Of all functions were already promisories, we weouldnt need to make them ourselves,
// so the extra step is a tad bit of a shame. But at least the wrapping pattern
// is usually repeatable so we can put it into a Promise.wrap(..) helper as shown
// to aid our promise coding.

// So back to our previous example, we need a promisory for both ajax(..) and foo(..)


function request(url) {
  return new Promise( function(resolve, reject) {
    $.ajax(url, resolve);
  });
}

var request = Promise.wrap(ajax);

function foo(x,y,cb){
  request(
    "data0.txt" + x + y
  )
  .then(
    function fulfilled(text) {
      cb(null, text);
    },
    cb
  );
}

// nowmm for this codes purposes make a promisory for "foo()"

var betterFoo = Promise.wrap(foo);

betterFoo(11,31)
.then(
  function fulfilled(text) {
    console.log(text);
  },
  function rejected(err) {
    console.log(err);
  }
);


//O fcourse while were refactioring foo(..) to use our new request(..) promisory,
// we could just make foo(..) a promisory itself, instead or remaining callback-based
// and needing to make and use the subsequent betterFoo(..)
// This decision just depends on whether foo(..) needs to stay callback-based
// compatible with other parts of the code base. Consider:

// foo(..) //  is now also a promisory because it delegates to the request(..) promisory
function foo(x,y) {
  return request(
    "data0.txt"
  );
}

function request(url) {
  return new Promise( function(resolve, reject) {
    $.ajax(url, resolve);
  });
}

foo(11,11);



// Promise Uncancelable
// Once you create a promise and register a fulfillment and or rejection handler
// for ot, theres nothing external you can do to stop that progression if something
//else happens to make that task moot.

//Consider our promise timeout scenario from ealier:


function foo(x) {
  console.log(x);
}

function doSomething() {
  console.log("something");
}

function handleError(err) {
  console.log(err);
}

// a utility for timing out a Promise:
function timeoutPromise(delay) {
  return new Promise( function(resolve, reject){
    setTimeout( function() {
      reject("Timeout");
    }, delay);
  });
}

var p = foo(42);

Promise.race([
  p,
  timeoutPromise(300)
])
.then(
  doSomething,
  handleError
);
p.then( function() {
  console.log("");
});

// The"timeout" was external to the promise p, so p itself keeps going which we
// probably dont want. One option is to invasively define your callbacks:


var OK = true;
var p = foo(42);

Promise.race([
  p,
  timeoutPromise(3000)
  .catch( function(err) {
    OK = false;
    throw err;
  })
])
.then(
  doSomething,
  handleError
);
p.then( function() {
  if(OK) {
    console.log("only happens if we have no timeout");
  }
});


// This is ugly but it works.



/*
  GENERATORS
*/
/*
var x = 1;

function foo() {
  x++;
  bar();
  console.log("x", x);
}

function bar() {
  x++;
}

foo(); // x 3


// in this example, we know for sure that bar() runs in between x++ and console.log(x)
// But what if var() wasnt there? obviously the result would be 2 instead of 3
//Now lets twist your brain. What if bar() wasnt present, but it could still somehow
// run between the x++ and console.log(x) statements, how would that be possible?

// Inpreemptive multithreaded languages, it would essentially be possible for bar()
// to interrupt and run at exactly the right moment between those statemens. And yet,
// a cooperative form of this interruption (concurrency) is possible, if foo()
// itself could somehow indicate a pause at that part in the code.

// Here's the ES6 code to accomposh such a cooperative concurrency:

var x = 1;

function *foo() {
  x++
  yield; // pause!
  console.log("x:", x);
}

function bar() {
  x++;
}

// Now, how can we run the code in that previous snippet such as that bar()
// executes at the point of the yield inside of *foo()?

// Construct an iterator 'it' to control the generator

var it = foo();

// start foo() here
console.log(x);
it.next();
console.log(x);
bar();
console.log(x);
it.next();

// The it = foo() operation does not execute the *foo() generator yet, but it
// constructs an iterator that will control its execution.
// The first it.next() starts the *foo() generator, x++ on the first line of *foo().
// *foo() pauses at the yield statement at wich point that first it.next() call finishes.
// At the moment *foo() is still running and active, but its in a paused state.
// We inspect the value of x, and its now 2.
// We call bar(), which increments x again with x++
// We inspect the value of x again, and its now 3
// The final it.next() call resumes the *foo() generator from where it was paused,
// and runs the console.log(..) statement, which uses the current value of x of 3.


// Clearly, foo() started, but did not run-to-completion - it paused at the yield
// We resumed foo() later, and let it finish, but that wasnt even required.

// So a generator is a special kind of function that can start and stop one
// or more trimes, and doesnt necessarily ever have to finish.
// Whilei it wont be terribly obvious yet why thats so powerful, as we go
// througout the rest of this chapter, that will be one of the fundamental
// building blocks we use to construct generators-as-async-flow-contol as a pattern
// of our code.

// Input and Output
// A generator is a special function with the new processing model we just alluded to.
// But its still a function, which means it still has some basic tenets that
// havent changed -- namely, that it still accept arguments (aka input) and
// that it can still return a value (aka output):


function *foo(x, y) {
  return x * y;
}

var it = foo(6, 7);
res = it.next();

console.log(res.value); // 42

// We pass in  the argument 6 and 7 to *foo(..) as the parameters x and y, respectively
// And *foo(..) returns the value 42 back to the calling code.

// We now see a difference with how the generator is invoked compared to a
// normal function, foo(6,7) obviously looks familiar. But subtly, the  *foo(..)
// generator hasnt actually run yet as it would have with a function.

// Instead we're just creating an iterator object, which we assign to the
// variable it, to control the *foo(..) generator. Then we call it.next(), which
// instructs the *foo(..)  generator to advance from its current location,
// stopping either at the next yield or ned of the generator.

// The result of that next(..) call is an object with a value property on it holding
// whatever value (if any) was returned from *foo(..) In other words, yield caused
// a value to be sent out fromt the generator during the middle of its execution
// kind of like an intermediate return.

// Aghain, it won't be obvious yet why we need this whole inderect iterator object to
// control the generator..

// Iteration Messaging
// In addition to generators accepting arguments and having return values, theres
// even more powerful compelling input/output messaging capability built into them
// via yield, and next(..) Consider:


function *foo(x) {
  var y = x * (yield);
  return y;
}
var it = foo(6);

// start 'foo(..)'
it.next();

var res = it.next(7);
console.log(res.value); // 42

// First we pass in 6 as the parameter x, then we call it.next() and it
// starts uo *foo(..) Inside *foo(..) the var y = x.. statement starts to be
// processed, but it runs across a yield expression. At that point it pauses
// *foo(..) (in the middle of the assignment statement) and essentially
// requests the calling code to provide a result value for the yield expresion.
// Next, we call it.next(7) which is passing the value back in to be that result
// of the paused yield expression.

// So at this point the assingment statements is essentially var y = 6 * 7.
// Now, return y returns that 42 value back as the result of the it.next(7) call.

// Notice something very important but also easily confusing, even to seasoned js
// developers: depeinding on your perspective, there's a mismatch between the
// yield and the next(..) call. In general, you're going to have one more next(..)
// call than you have yield statements - the preceeding snippet has one yield
// and two next(..) calls.. Why the mismatch?

// Because the first next(..) always starts a generator, and runs to the first yield
// But it's the second next(..) call that fulfills the first paused yield expression,
// and the third next(..) would fulfill the second yield, and so on..

// Tale of Two Questions
// Actually, which code you're thinking about primarily will affect whether there's
// perceived mismatch or not. Consider only generator code:

var y = x * (yield);
return y;

// The first yield basically asking a question: "what value should i insert here?"
// Who's going to answer that question? Well, the first next() has already run to
// get the generator up to this point, so obviously it can't answer the question.
// So the second next(..) call must answer the question posed by the first yield.
// See the mismatch - second-to-first?

// But let's flip our perspective. Let's look at it not from the generator's point
// of view, but from the iterator's point of view.

// To properly illustrate this perspecitve, we also need to explain that messages
// can go in both directions -- yield .. as an expression can send out messages in
// reponse to next(..) calls, and next(..) can send values to a paused yield expresion.
// COnsider this slightly adjusted code:


function *foo(x) {
  var y = x * (yield "Hello");
  return y;
}

var it = foo(6);
var res = it.next(); // first 'next()', dont pass anything

console.log(res.value); // Hello

res = it.next(7); // pass '7' to waiting 'yield'
console.log(res.value); // 42

// yield.. and next(..) pair together as two-way-message passing system during the
// execution of the generator.

// We don't pass a value to the first next() call, and that's on purpose.
// ONly a paused yield could accept such a value passed by next(..),
// and at the beginning of the generator when we call the first next(), there
// is no paused yield to accept such a value. The specification and all
// compliant browsers just silently discard anything passed to the first next()
// It's still a bad idea to pass a value, as you're just creating silently failing
// code that's confussing. So always start a generator with an argument-free next()

// Thje first next() call (with nothing passed to it) is basically asking a
// question: "what next value does the *foo(..) generator have to give me?"
// Amd who amswers the question? The first yield "hello" expression.

// No mismatch here..
// Depending on who you think about asking the question, there is either a
// mismatch between the yield and next(..) calls, or not.
// But there's still an extra next()? compared to the number of yield statements,
// so that final it.next(7) call is again asking the question about what next
// value the generator will produce. But there's no more yield statements left
// to answer, is there? SO who who answers? The reutnr statement asnwers the question!

// And if there is no return in your generator -- return is certainly not any
// more required in generators than in regular functions - there's always an
// assumed/implicit return; (aka return undefined;) which serves the purpose
// of default answering the question posed byu the final it.next(7) call.

// these questions and answers - the two way message passing with yield and next()
// are quite powerful, but its not obvious at all how these mechanisms are connected
// to async flow control.. We are getting there..


// Multiple Iterators
// It may appear from the syntactic usage that when you use an iterator to control
// a generator, you're controlling the declared generation function itself.
// But there's a subtlety that easy to miss: each time you constructt an iterator,
// you are implicitly constructing an instance of the generator which that iterator
// will control.

// You can have multiple instances of the same generator running at the same time,
// and they can even interact:


function *foo() {
  var x = yield 2;
  z++;
  var y = yield(x * z)
  console.log(x,y,z);
}

var z = 1;
var it1 = foo();
var it2 = foo();

var val1 = it1.next().value; // 2 <-- yield 2
var val2 = it2.next().value; // 2 <-- yield 2

val1 = it1.next(val2 * 10).value; // 40 <-- x:20,  z:2
val2 = it2.next(val1 * 5).value; // 600 <-- x:200, z:3

it1.next(val2 / 2); // y: 300,  20 300 3
it2.next(val1 / 4); // y: 10,   200 10 3

// the most common usage of multiple instance of the same generator running concurrently
// is not such interactions, bbut when the generator is producing its own values without
// input, perhaps from some indepentently connected resourece.

// 1) Both instances of *foo() are started at the same time, and both next() calls
//revele a value of 2 from the yield 2 statements respectively.

// 2) val2 * 10 is 2 * 10, which is sent into the first generator instance it1,
// so that x gets value of 20. z is incremented from 1 to 2, and then 20* 2 is
// yielded out, setting val1 to 40.

// 3) val1 * 5 is 40 * 5, which is sent into the second generator instance it2, so that
// x gets value of 200. z is incremented again, from 2 to 3, and then 200 * 3 is yelded out,
// setting val2 to 600.

// 4) val2 / 2 is 600 / 2 which is sent into the the first generator instance it1,
// so that y gets value 300, then printing out 20 300 3 for its x y z values, respectively.

// 5) val1 / 4 is 40, which is sent into the second generator instance it2, so that y
// gets value 10, then printing out 200 10 3 for its x y z values, respectively.



// Interleaving
// Recall this scenario from the "run-to-completion" section:
var a = 1;
var b = 2;

function foo() {
  a++;
  b = b * a;
  a = b + 3;
}

function bar() {
  b--;
  a = 8 + b;
  b = a * 2;
}

// With normal js functions, of course either foo() can run completely first, or
// bar() can run completely first, but foo() cannot interleave its individual
// statements with bar(), so there are only two possible outcomes to the
// preceding program.

// However with generators, clearly interleaving (even in the middle of statements)
// is possibgle:

var a = 1;
var b = 2;


function *foo() {
  a++;
  yield;
  b = b * a;
  a = (yield b) + 3;
}

function *bar() {
  b--;
  yield;
  a = (yield 8) + b;
  b = a * (yield 2);
}

// depending on what respective order the iterators controlling *foo() and *bar()
// are called, the preceding program could produce several different results, in
// other words, we can actually illustrate (in a fake-ish way) the theoretical
// threaded race condidtions circumstances. By interleaving the two generator
// iterations over the same shared variables.
// First, lets make a helper called step(..) that controls an iterator.


function step(gen) {
  var it = gen();
  var last;

  return function() {
    // whatever yield'ed out, just send it right back in the next time
    last = it.next(last).value;
  };
}

// step(..) initializes  a generator to create its it iterator, then returns
// a function which when called, advances the iterator by one step.
// Additionally, the previously yielded out value is sent right back in at the
// next step. So yield 8 will just become  8 and yield b will just be b
// (whatever it was at the time of yield)

// Now, just for fun, let's experiment to see the effects of interleaving these
// different chunks of *foo() and *bar(), We'll start with the boring base case,
// making sure *foo() totally finishes before *bar()

a = 1;
b = 2;

var s1 = step(foo);
var s2 = step(bar);

// run *foo() completely first
s1();
s1();
s1();

// now run *bar()
s2();
s2();
s2();
s2();

console.log(a, b); // 11 22


 // The end result is 11 and 22, now let's mix up the interleaving ordering and
 // se how it changes the final values of a and b.

 // make sure to reset 'a' and 'b'
 var a = 1;
 var b = 2;

 var s1 = step(foo);
 var s2 = step(bar);

 s2(); // b--;
 s2(); // yield 8
 s1(); // a++
 s2(); // a = 8 + b
       // yield 2

s1()   // b = b * a;
       // yield b
s1()   // a = b + 3;
s2()   // b = a * 2;

console.log(a,b); // 12 18


// Producers and Iterators
// Imagine you're producing a series of values where each value has a definable
// relationship to the previous value. To do this, you're going to need a stateful
// producer that remembers the last value it gave out.

// You can implement something like that straightforwardly using a function closure

var gimmeSomething = (function() {
  var nextVal;

  return function() {
    if (nextVal === undefined) {
      nextVal = 1;
    }
    else {
      nextVal = (3 * nextVal) + 6;
    }
    return nextVal;
  }
})();

console.log(gimmeSomething()); // 1
console.log(gimmeSomething()); // 9
console.log(gimmeSomething()); // 33
console.log(gimmeSomething()); // 105


// generating an arbitary number series isn't a terrible realistic example.
// But what if you were generating records from a data source?
// You could imagine much the same code.

// In fact, this task is a very common design pattern, usually solved by iterators.
// An iterator is a well-defined interface for stepping through a series if values
// from a producer. The js interface for iterators, as it is in most languages, is
// to call next() each time you want the next value from the producer.

// we could implement the standard iterator interface for our number series producer:


var something = (function() {
  var nextVal;

  return {
    // needed for 'for..of' loops
    [Symbol.iterator]: function() { return this; },

    // standard iterator interface method
    next: function() {
      if (nextVal === undefined) {
        nextVal = 1;
      }
      else {
        nextVal = (3 * nextVal) + 6;
      }
      return { done:false, value:nextVal};
    }
  };
})();

console.log(something.next().value); // 1
console.log(something.next().value); // 9
console.log(something.next().value); // 33
console.log(something.next().value); // 105

// The next() call returns an object with two properties: done is a boolean
// value signaling the iterator's complete status, value holds the iteration value.

// ES6 also adds the for..of loop, which means that a standard iterator can
// automatically be consumed with a native loop syntax:

for (var v of something) {
  console.log(v);

  // don't let the loop run forever!
  if (v > 500) {
    break;
  }
}

//  THe for..of loop automatically calls next() for each iteration - it doesn't
// pass any values in to the next() - and it will automatically terminate
// on receiving a done:true. It's quite  handy for a looping over a set of data.

// Of course you could manually loop over iterators, calling next() and checking
// for the done:true condition to know when to stop:

for (
  var ret;
  ( ret = something.next()) && !ret.done;
) {
  console.log( ret.value );

    // don't let the loop run forever!
    if (ret.value > 500) {
      break;
    }
}

// 1 9 33 105 321 969

// The manuall for approach is certainly uglier than ES6 for ..of loop syntax
// but its advantage is that it affords you the opportunity to pass in values
// to the next(..) calls if necessary.

// In addition to making your own iterators, many built-in data structures in JS
// like arrays, also have default iterators:

var a = [1,3,5,7,9];

for (var v of a) {
  console.log(v);
} // 1, 3, 5, 7, 9

// The for ..of loop asks for its iterator, and automatically uses ut to iterate
// over a's values.


// Iterables
// THe something object in ouir running example is called an iterator, as it has
// the next() method on its interface. But a closely related term is "iterable",
//  which is an object that contains an iterator that can iterate over values.

// As of ES6 the way to retrieve an iterator from an iterable is that the iterable
// must have a function on it, with the name being the special ES6 symbol value
// Symbol.iterator. When this function is called, it returns an iterator. Though
// not required, generally each call should retrun a fresh new iterator.

// 'a' in theprevious snippet is an iterable. The for..of loop automatically calls
// its Symbol.iterator function to construct an iterator, but we could of course
// call the function manually, and use the iterator it returns:

var a = [1,3,5,7,9];

var it = a[Symbol.iterator]();

console.log(it.next().value); // 1
console.log(it.next().value); // 3
console.log(it.next().value); // 5

// in the precious code listing the defined something. you may have noticed
// this line:

[Symbol.iterator]: function() { return this; }

// That little bit of confusing code is making the something value - the interface
// of the something iterator - also an iterable; its now both and iterable and
// an iterator. Then we pass something to the for..of loop:

for (var v of something) {
  //..
}


// The for ..of loop expects something to be an iterable, so it looks for and calls
// its Symbol.iterator function. We defined that function to simply return this,
// so it just gives itself back, and the for ..of loop is none the wiser.

// Generator Iterator
// Lets turn the attention back to generators, in the context of iterators.
// A generator can be treated as a producer of values that we extract one at
// a time through an iterator interface's next() calls.

// So a gernator itself is not technically an iterable, though it's very similiar
// -- when you execute the generator, you get an iterator back.

function *foo() { }
var it = foo();
/*
// We can implement the something infinite number series producer from earlier
// with a gengerator, like this:

function *something() {
  var nextVal;

  while(true) {
    if (nextVal === undefined) {
      nextVal = 1
    }
    else {
      nextVal = (3 * nextVal) + 6;
    }
    yield nextVal;
  }
}

// Thats a bit cleaner.. Because the generator pauses at each yield, the state (scope)
// of the function *something() is kept around, meaning there's no need for the
// closure boilerplate to preserve variable state across calls..

// NOt only is it simpler code - we don't have to make our own iterator interface -
// it actually is more reasonable code, because it more clearly expresses the intent
// For example, the while true loop tells us the generator is intended to run forever -
// to keep generating values as long as we keep asking for them.

// and now we can use our shiny new *something() generator with a for..of loop:

for (var v of something()) {
  console.log(v);

  if (v > 500) {
    break;
  }
} // 1 9 33 105 321 969
// But we don't skip over for (var v of something()) . !  We didn't just reference
// something as a value like earlier examples, but instead called the *something()
// generator to get its iterator for the for..of loop to use.

// If you are paying close attention, two questions may arise from this interaction
// between the generator and the loop:

// Why couldn't we say for (var v of something) ..? Because something here is a
// generator, which is not an iterable. WE have to call something() to construct
// a producer for the for.oof loop to iterate over

// The something() call produces an iterator, but the for..of loop wants an iterable..
// The generator's iterator also has a Symbol.iterator function on it, which
// basically does a return this, just like something iterable we defined earlier.
// in other words, a generators iterator is also an iterable


// Stopping the Generator
// In the previous example, it would appear the iterator instance for *something()
// generator was basically left in a suspended state forever after the break in
// the loop was called. But there's a hidden behaviour that takes care of that for
// you. "Abnormal completion" (i.e, "early termination") of the for..of loop
//  -- gernally caused by break, return, or an uncaught exception sends a signal
// to the generators iterator for it to terminate.

// While a for.. of loop will automatically send this signal, you may wish to send
// the signal manually to an iterator, you do this by calling return(..)

// If you specify a try..finally clause isinde the generator, it will always
// be run wven when the generator is externally completed. THis is useful if
// you need to clean up resources (Datavbase connections etc):


function *something() {
  try {
      var nextVal;

      while(true) {
        if (nextVal === undefined) {
          nextVal = 1;
        }
        else {
          nextVal = (3 * nextVal) + 6;
        }
        yield nextVal;
      }
    }
    // cleanup clause
    finally {
      console.log("cleaning up");
    }
  }

  // The earlier example with break in the for.of loop will trigger the finally
  // clause. But you could instead manually terminate the generator's iterator
  // instance from the outside of with return(..):

  var it = something();
  for (var v of it) {
    console.log(v);

    if (v > 500) {
      // Complete the generator's iterator
      console.log(
        it.return("hello world").value
      );
    }
  }

// 1 9 33 105 321 969
// cleaning up
// Hello World

// When we call it.return(..) it immediately terminates the gernerator, which of
// course runs the finally clause. Also it  sets the returned value to whatever
// you passed in to the return(..), which is how "hello world" comes right back
// out. We also don't need to include break now because the generator's iterator
// is set to done:true, so the for..of loop will terminate on its next iteration.

// Generators own their namesake mostly to this consuming produced values use.
// But again, that's just one of the uses for for generators, and frankly not
// even the main one we're concerned with in the context of this book.

// But now that we more fully understand some of the mechanics of how they work,
// we can next turn attention to how generators apply to asynch concurrency.


// Iterating Generators Asynchronously
// What do generators have to do with asynch coding patterns, fixing problems
// with callbakc, and the like? Example:

function foo(x,y,cb) {
  $.ajax("data0.txt" + x + y + cb);
}

foo( 1, 2, function(err,text) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(text);
  }
});


// If we wanted to express this same task flow control with a generator we could do:

function foo(x,y) {
  $.ajax("data0.txt" + x + y,
  function(err,text) {
    if (err) {
      it.throw(err)
    }
    else {
      it.next(data);
    }
  }
);
}

function *main() {
  try {
    var next = yield foo("a","b")
  }
  catch (err) {
    console.log(err);
  }
}

var it = main();
// start it all up
it.next();


// Generators + PROMISES
// Recall the earlier Promise-based appreoach to our running ajax example:

function request(url) {
  $.ajax(url);
}

function foo(x,y) {
  return request("data0.txt")
}

foo(11, 31)
.then(
  function(text) {
    console.log(text);
  },
  function(err) {
    console.log(err);
  }
);


//In erarlier generator code for the running Ajax example, foo(..)
// returned nothing (undefined), and our itarator control code didn't
// care about the yielded value.

// But here the Promise-aware foo(..) returns a promise after making the ajax
// call. That suggests that we could construct a promise with foo(..) and
// then yield it from the generator, and then the iterator control code would
// recveive that promise.

// But what should iterator do with the promise?
// IT should listen for the promise to resolve (fullfillment or rejection)
// and then either resume the generator with the fulfillment message or
// throw an error into the generator with rejection reason.

// The natural way to get the most out of promises and generators is to yield
// a promise, and wire that promise to control the generator's iterator:

function request(url) {
  $.ajax(url)
}

function foo(x,y) {
  return request(
    "data0.txt"
  );
}

function *main() {
  try {
    var text = yield foo(11, 31);
    console.log(text);
  }
  catch (err) {
    console.log(err);
  }
}

// The most powerful revelation in this refactor is that the code inside
// *main() did not have to change at all. Inside the generator, whatever values
// are yielded out is just an opaque implementation detail, so we're not even
// aware it's happening,, nor do we need to worry about it.

// But how are we going to run *main() now? We still have some of the
// implementation plumbing work to do, to receive and wire up the yielded promise
// so that it resumes the generator upon resolution. We'll start by trying that
// manually:

var it = main();
var p =  it.next().value;

p.then(
  function(text) {
    it.next(text);
  },
  function(err) {
    it.throw(err);
  }
);



// Promise-Aware Generator Runner

*/
function run(gen) {
  var args = [].slize.call( arguments, 1), it;

  it = gen.apply( this, args );

  return Promise.resolve()
  .then( function handleNext(value) {
    var next = it.next(value);
    return (function handleResult(next) {
      if(next.done) {
        return next.value;
      }
      else {
        return Promise.resolve(next.value)
        .then(
          handleNext,
          function handleErr(err) {
            return Promise.resolve(
              it.throw(err)
            )
            .then(handleResult);
          }
        );
      }
    })(next);
  });
}
//run(foo)

// how would you use run(..) with *main() in our running  ajax example?
/*
function *main() {
  // ..
}
run(main)




// ES7 async and wait?
// The preceeding pattern-generators yielding promises that then control the
// generator's iterator to advance it to completion - is such a powerful and
// useful apprroach , it would be nicer if we could do it without the clutter
// of the library utility helper ( aka run(..) ):

function request(url) {
  $.ajax(url);
}

function foo(x,y) {
  return(
    request("data0.txt")
  )
}

async function main() {
  try {
    var text = await foo(11,31);
    console.log(text);
  }
  catch (err) {
    console.log(err);
  }
}
main();

// As you can see, there's no9 run(..) call (meaning no need for a lib util)
// to invoke and drive main(..) - it's just called as a normal function. Also
// main(..) isn't declared as a generator function anymore: it's a new kind
// of function: async function, And finally, instead of yielding a promise
// we await for it to resolve.

// The async function automatically knows what to do if you await a Promise -
// it will pause the funciton (just like with generators) until the promise
// resolves. We didn't illustrate it in this snippiet, but calling an async
// function like main() automatically returns a promise that's resolved whenever
// the function finishes completely.
// The async / await syntax look very familiar to c#, because it's basically
// identical.


// Promise COncurrency in Generators
// Imagine a scenario where you need to fetch data from two different sources,
// then combine those responses to make a third request, and finally print out
// the last response. Your first instict might be something like:

function request(url) {
  $.ajax(url);
}

function *foo() {
  var r1 = yield request("data0.txt");
  var r2 = yield request("data1.txt");

  var r3 = yield request(
    "data02.txt"
  );
  console.log(r3);
}
run(foo);


// The code will work, but in the specifics of our scenario, it's not optimal.
// Can you spot why?
// Because r1 and r2 requests can - and for performance reasons, should run
// concurrently, but in this code they will run sequentially; the "data01.txt"
// URL isn't ajax fetched until after the request is finished. These two requests
// are independent so the better performance approach would likely be to have
// them run at the same time.

// But how exactly  would you do that with a generator and yield? We Promise,
// specifically on their capability to manage state in a time-independent fashion.
// The simplest approach:

function *foo() {
  // make both requests "in parallel"
  var p1 = request("data0.txt");
  var p2 = request("data1.txt");

// wait until both promises resolve
  var r1 = yield p1;
  var r2 = yield p2;

  var r3 = yield request("data02.txt");
  console.log(r3);
}
run(foo);



// We could also express the flow control like this:

function *foo() {
  // make both requests in parallel and wait until both promises resolve

  var results = yield Promise.all([
    request("data0.txt"),
    request("data1.txt")
  ]);

  var r1 = results[0];
  var r2 = results[1];

  var r3 = yield request(
    "data2.txt"
  )
  console.log(r3);
}

run(foo);



// As a word of stylistic caution, be careful about how much Promise logic you
// include inside your generators. The whole point of using generators for
// asynchrony in the way we've described is to create simple, sequential sync-looking
// code, and to hide as much of the details of asynchrony away from that code
// as possible.

// For example, this might be a cleaner approach:

function bar(url1, url2) {
  return Promise.all([
    request("data0.txt"),
    request("data1.txt")
  ]);
}

function *foo() {
  // hide the promise-based concurrency details inside bar(..)
  var results = yield bar("data0.txt", "data1.txt");

  var r1 = results[0];
  var r2 = results[1];

  var r3 = yield request("data2.txt");

  console.log(r3);
}
run(foo);


// Hiding your promise logic inside a function that you merely call from your
// generator is especially useful if you are going to do a sophisticated series
// flow-control, for example:

function bar() {
  Promise.all([
    baz()
    .then()
    .Promise.race([])
  ])
  .then()
}




// Generator Concurrency
// As we discussed earlier two simultaneously running "processes" can
// cooperatively interleave their operations, and many times this can yield very
// powerful asynchrony expressions.

// Frankly our earlier examples of concurrency interleaving of multiple generators
// showed how to make it really confusing. But we hinted that there's places
// where this capability is quite useful.

// Recall a scenario where two different simultaneous ajax response handlers
// needed to coordinate with eachother to make sure that the data communication
// was not a race condition. We slotted the response int o the res array like this:

function request(url) {
  $.ajax(url);
}

function response(data) {
  if (data.url == "data0.txt") {
    res[0] = data;
  }
  else if ( data.url == "data1.txt") {
    res[1] = data;
  }
}

// but how can we use multiple generators concurrently for this scenario?
// Request(...) is a promise aware ajax utility

var res = [];

function *reqData(url) {
  res.push(
    yield request(url)
  );
}

// Instead of having to manually sort out res[0] and res[1] assignmentsl we'll
// use coordinated ordering so that res.push(..) properly slots the values in the
// expected and predictable order. The expressed logic thus should feel a bit cleaner.

// But how will we actually orchestrate this interaction? First lets just do it
// manually with promises:

var it1 = reqData("data0.txt");
var it2 = reqData("data1.txt");

var p1 = it1.next();
var p2 = it2.next();

p1.then( function(data) {
  it1.next(data);
  return p2;
})
.then( function(data) {
  it2.next(data);
});


// *reqData() two instances are both started to make their ajax requests, then
// paused with a yield. Then we choose to resume the first instance when p1 resolves,
// and then p2's resolution will start the second instance. In this way, we use Promise
// orchestration to ensure that res[0] will have the first response and res[1]
// will have the second response.

// But frankly this is awfully manual, and it doesn't really let the generators
// orchestrate themselves, which is where the true power can lie. Let's try
// a different way:

function request(url) {
  $.ajax(url);
}

var res = [];

function *reqData(url) {
  var data = yield request(url);

  yield;
  res.push(data);
}

var it1 = reqData("data0.txt");
var it2 = reqData("data1.txt");

var p1 = it1.next();
var p2 = it2.next();

p1.then( function(data) {
  iot1.next(data);
});

p2.then( function(data) {
  it2.next(data);
});

Promise.all([p1, p2])
  .then( function() {
    it1.next();
    it2.next();
  });


// OK this is a bit better but still manuall...
// Let's imagine using a utility called runAll(..)

var res = [];

runAll(
  function*() {
    var p1 = request("data0.txt")

    yield;

    res.push(yield p1);
  },
  function*() {
    var p2 = request("data1.txt");

    yield;

    res.push(yield p2);
  }
);





// Thunks
// So fare we've made the assumption that yielding a promise from a generator -
// and having that promise resume the generator via a helper utility like run(..)
// - was the best possible way to manage asynchrony with generators, so in the
// interest of completeness we'll take a brief look at it.

// Ingeneral computer science, there's an old pre-js concept called "thunk".
// A narrow expression of a thunk in js is a function that - without any parameters
// - is wired to call another function.

// In other words you wrap a function definition around function call- with any
// parameters it needs -- to defer the execution of that call, and that wrapping
// function is a thunk. When you later execute the thunk you end up calling the
// original funnction.
// For example:

function foo(x, y) {
  return x + y;
}

function fooThunk() {
  return foo(3, 4);
}

console.log(fooThunk()); // 7

// So aynchronous thunk is pretty straightforward. But what about async thunk?
// Consider:

function foo(x, y, cb) {
  setTimeout( function() {
    cb( x + y);
  }, 1000);
}

function fooThunk(cb) {
  foo( 3, 4, cb);
}

// later
fooThunk( function(sum) {
  console.log(sum);
});

// As you can see fooThunk() expects only a cb(..) parameter as it already has
// values 3 and 4 prespecified and ready to pass to foo(..) A thunk is just
// wating around patiently for the last piece it needs to do it's job::callback
// You don't want to make thunks manually though, so let's invent a utility
// that does this wrapping for us. Consider:

function thunkify(fn) {
  var args = [].slize.call( arguments, 1);
  return function(cb) {
    args.push(cb);
    return fn.apply(null, args);
  };
}

var fooThunk = thunkify(3,4)
// The main difference hwere is the extra return function() {..} layer,
// here's how its usage differs:

var whatIsThis = thunkify(foo);
var fooThunk = whatIsThis(3,4);

// latger
fooThunk(function(sum) {
  console.log(sum);
});

// obviously, the big question this snippet implies is what is whatIsThis
// properly called?? It's not the thunk, it's the thing that will produce thunks
// from foo(..) calls. It's kind of like a factory for "thunks". There doesn't
// seem to be any kind of standard agreement for naming such a thing.

// So my proposal is "thunkory" ("thunk + "factory") So thunkify(..)
// produces a thunkory, and a thunkory produces thunks.



// Pre-ES6 Generators
// Manual Transformation
// Before we discuss the transpilers, let's derive how manual trapilation would
// work in the case of genreators. This is'nt just an academic exercise, because
// doing so will actually help further reinforce how they work. Consider:

function request(url) {
  $.ajax(url);
}
function *foo(url) {
  try {
    console.log("requesting:", url);
    var val = yield request(url);
    console.log(val);
  }
  catch(err) {
    console.log(err);
    return false;
  }
}

//var it = foo("data0.txt");

// The first thing to observe  is that we'll still need a normal foo()
// function that can be called, and it will still need to return an iterator.
// So, let's sketch out the non-generator tranformation.

function foo(url) {
  return {
    next: function(v) {
    },
    throw: function(e) {
      console.log(e);
    }
  };
}

var it = foo("data0.txt");
it.next();


// The next thing to observe is that a generator does its "magic" by suspending
// its scope/state, but we can emulate that with a function closure.
// To understand how to write such code, we'll first annotate diferent parts of
// our generator with state values:

function request(url) {
  $.ajax(url);
}

function *foo(url) {
  try {
    // STATE 1
    var TMP1 = request(url);

    // STATE 2
    var val = yield TMP1
    console.log(val);
  }
  catch(err) {
    // STATE 3
    console.log(err);
    return false;
  }
}

var a = foo("data0.txt");

// IN other words: 1 is the beginning state, 2 is the state if the request(...)
// succeeds, and 3 is the state of the request(..) fails.
// Going back to our transpiled generator, let's define a variable state in the
// closure we can use to keep track of the state:

function foo(url) {
  // manage generator state
  var state;
}

// Now lets define an inner function called process(..) inside the closure which
// handles each state, usinga switch statement:

function foo(url) {
  var state;

  function process(v) {
    switch(state) {
      case 1:
        console.log("requesting: ", url);
        return request(url)
      case 2:
        val = v;
        console.log(val);
        return;

      case 3:
      var err = v;
      console.log(err);
      return false;

    }
  }
}


// In state 1, instead of yield resolve(..) we did return resolve In terminal state 2
// there was ni explicit return, so we just do a return, which is the same as
// return undefined. In terminal state 3, there was a return false, so we preserve that.

// Now we need to define the code in the iterator functions so they call process(..)
// appropriately:

function request(url) {
  $.ajax(url);
}

function foo(url) {
  // manage generator state
  var state;

  function process(v) {
    switch(state) {
      case 1:
        console.log("requesting: ", url);
        return request(url)
      case 2:
        val = v;
        console.log(val);
        return;

      case 3:
      var err = v;
      console.log(err);
      return false;
    }
  }
  return {
    // make and return an iterator
    next: function(v) {
      if (!state) {
        state = 1;
        return {
          done: false,
          value: process()
        };
      }
      // yield resumed successfully
      else if (state == 1) {
        state = 2;
        return {
          done: true,
          value: process(v)
        };
      }
      // generator already completed
      else {
        return {
          done: true,
          value: undefined
        };
      }
    },
    "throw": function(e) {
      // the only explicit error handlig is in state 1
      if(state == 1) {
        state = 3;
        return {
          done: true,
          value: process(e)
        };
      }
      // otherwise an error wont be hanbdöes so just throw
      // it right back out
      else {
        throw e;
      }
    }
  };
}
var it = foo("data0.txt");
it.next()


// How does this code work?
// 1) the first call to iterator's next() call would move thge generator
// from the unitialized state to state 1, and the call process() to handle
// that state. The return value from request() which is the promise for the ajax
// response, is returned back as the value property from the next() call.

// 2) If the ajax request succeeds, the second call to next(..) should
// send in the ajax response value, which moves our state to 2. Proocess()
// is again called (this time with the passed in ajax response value) and the value
// property returned from next() will be undefined.

// 3) However, if the ajax request fails throw(..) should be called with the error,
// which would move the state from 1  to 3, (insead of 2). Again process() is
// called, this time with the error value. The case returns false, which is set as
// the value property returned from the throw(..) call.

// From the outside - that is interating only with the iterator - this fo(..)
// normal function works pretty much the same  as the *foo(..) generator would
// have worked. So we've effectively transpiled our ES6 generator to pre-ES6
// compabillity.

// We could then manually instantiate our generator and control its iterator -
// calling var it = foo(..) and it.next(..) and such-or better, we could pass it to
// our previously defined run(..) utility and run(foo, "..")


// Automatic Tranpilation
// The preceeding exercise of manually deriving a transformation of our ES6
// generator to pre-ES6 equivalent teaches ushow generators work conceptually.
// But thtattransformation was really intricate and non-portable to other
// generators in our code. It would be quite impractical to do this work by hand,
// and would completely obviate all the benefit of generators.
// But luckelu,several  tools alrady exist that can automatically convert ES6
// generators to thingslike what derived in the previous section. Not only do they
// do the heavy lifting work for us, but they also handle several complications
// that we glossed over.

// One such tool is a regenaotr from the smart folks of facebook.

// If se use regenerator to transpile our previous gernerator, here's the code
// produced (at the time of writing):

var foo = regeneratorRuntime.mark(function foo(url) {
  var val;
  return regeneratorRuntime.wrap(function foo$(context$1$0.next) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
       case 0:
          context$1$0.prev = 0;
          console.log("requesting: ", url);
          context$1$0.next = 4;
          return request (url);
       case 4:
          val = context$1$0.sent;
          console.log(val);
          context$1$0.next = 12;
          break;
      case 12:
      case "end":
          return context$1$0.stop();
    }
  },foo this, [[0, 8]];)
});



// Transpiling
// Made even worse by the rapid evolution of features, a problem arises for
// js developers who at once may both strongly desire to use new features
// while at the same time beingh slapped with the reality that their site/apps
// may need to support older browsers withoout such support.

// The way ES5 appears to have played out in broader industry, thye typical
// mindset was that code bases waited to adopt ES5 until most if not all pre-
// ES5 enviroments had fallout out of their support spectrum. As a result, many
// aare just recvently (at the time of writing) starting to adopt things
// like strict mode, which  landed in ES5 over five years ago.
// It's widely concidered to be a harmful approach for the future of js ecosystem
// to wait and trail the specification by so many years. All those responsible
// for evoling the language desire for developers to begin basing their code on
// the new features and patterns as soon as they stabilize in specification form
// and browsers have a chance to implement them.

// So how do we resolve this seeming contradict ion= The answer is tooling,
// specifically a technique called "transpiling" (transofmration + compiling)
// Rougly, the idea is to use a special tool to transform your ES6 codeinto
// equivalent (or close) matches that work in ES5 enviroments.

// For example, concider shorthand proerty definitions. Here is ES6 form:

var foo = [1,2,3]

var obj = {
  foo
};

// But here's how that transpiles:

var foo = [1,2,3]

var obj = {
  foo: foo
};

console.log(obj.foo); // [1, 2, 3]

// This is a minior but pleasant transofmration that lets us shortenb the foo: foo
// in an object literal declaration to just foo, if the names are the same.

// Transpilers perform these transformations for you,  usually in a build workflow
// step similiar to how you perform linting, minification and other similiar operations.

// Shims/Polyfill
// Not all new features need a transpiler. Polyfills (aka shims) are a pattern
// for defining equivalent behaviour from a newer enviroment into an older enviroment,
// when possible. Syntax cannot be polyfilled, but APIs often can be.

// For example, Object.is(..) is a new utility for checking strict equality
// of two values, but without the nuanced exeptions that === has for NaN and -0 Values.
// The polyfill for Object.is(..) is pretty easy:

if (!Object.is) {
  Object.is = function(v1,v2) {
    // test for -0
    if (v1 === 0 && v2 === 0) {
      return 1 / v1 === 1 / v2;
    }
    // test for NaN
    if (v1 !== v1) {
      return v2 !== v2;
    }
    // everything else
    return v1 === v2;
  };
}



// Syntax
// Block-Scoped Declarations
// You're probably aware that the fundamental unit of variable scoping in javascript
// has always been the function. If you needed to create a block of scope, the
// most prevalent way to do so other than a regular function declaration was the
// immediately invoked function expression (IIFE) For example:

var a = 2;

(function IIFE() {
  var a = 3;
  console.log(a); // 3
})()
console.log(a); // 2


// Let declarations
// Howeever, we can now create delcarations that are bound to any block, called
// "block scoping". This means all we need is a pair of {}  to create a scope.
// Instead of using var, which always declare variables attached to the ecnclosing
// function (or global if top level) scope use let:

var a = 2;
{
  let a = 3;
  console.log(a); // 3
}
console.log(a); // 2


// It's not very uncommong or idiomatic thus far in JS to use a standalong {..}
// block, but it's always been valid. And developers from other languages that
// have block scoping will readily recognize that pattern.

// I believe the best way to create block-scoped variables, with a dedicated {..}
// block. Moreoever you should always put the let declaration(s) at the very top
// of that block. If you haver more than one to declare, I'd recommend using just
// one let.

// Stylistically, i even prefer to put the let on the same line as  the opening {
// to make it clrearer that this block is only for the purpose of declaring the scope
// for those variables.

{ let a = 2,b,c
  // ..
}
// Now that's going to look strange and it's not likely going to match  the
// recommendations given in most ES6 litterature. But I have reasons for my madness.


// There's another experimental (not standardized) form of delcaration called the
// let-block, which looks like:

let (a = 2, b, c) {
  // ..
}

  // That form is what i call explicit block scoping, whereas the let.. declaration
  // form trhat mirros var is more implicit, as it kind of hijacks whateve {..}
  // pair its found in. Generally developers find explicit mechanisms a bit more
  // preferable than implicit mechanisms, and i claim this is one of those cases.

  // If you compare the previous two snippet forms, they're very similiar and in
  // my opinion both qualify stylistically as explicit block scoping.
  // unfortunately the let(..) {..} form, the most explicit of the options, was
  // not adopted in ES6. That may be revisited post.ES6, but for now the former
  // option is our best, i think.

  // To reinforce the implicit nature of let .. declarations, consider these usages:

  let a = 2;

  if (a > 1) {
    let b = a * 3;
    console.log(b);

    for (let i = a; i <= b; i++) {
      let j = i + 10;
      console.log(j);
    } // 12, 13, 14, 15, 16

    let c = a + b;
    console.log(c); // 8
  }

// Quick quiz without looking back at that snippet: Which variable(s) exist only
// inside the if statement, and which variable(s) exist only inside the for loop?

// The answers: the if statement contains b and c block scoped variables, and the
// for loop contains i and j blocked-scoped variables.

// Did you have to think about if for a moment?  Does it surprise you that i isn't
// added to the ecnclosing if statement scope?  That mental pause and questioning
// I call it a "mental tax" -comes from the fact that this let mechanism is not only new
// to us, but it's also implicit.

// There's also a hazard in the let c = .. declaration appearing so far down in
// the scope. Unlike traditional var-declared variables, which are attached to the
// entire enclosing function scope regardless of where they appear, let declarations
// attach to the block scope but are not initlialized  until they appear in the block.

// Accessing a let-declared variable earlier than its let .. delcarttion/initialization
// causes an error, whereas with var declarations the ordering doesn't matter (except
// stylistically) Consider:

{
  console.log(a); // undefined
  console.log(b); // Reference Error!

  var a;
  let b;
}

 // This referenceError from accessing to-early let-declared references is tecnhically
 // called a "Temporal Dead Zone TDZ" error - your accessing a variable that's
 // been declared but not yet initialized. This will not be the only time we see TDZ
 // errors, they crop up in several places in ES6. Also note that "initialized"
 // doesn't require explicitly assigning a value in your code, as let b; is totally
 // valid. A variable that's not gioven an assignment at declaration time is assumed
 // to have been assigned the undefined value, so let b; is the same as let b = undefined;
 // explicit assignment or not, you cannot access b until the let b statement is run.

 // One last gotcha: typeof behaves differently with TDZ variables: Example:

 {
   // 'a' is not declared
   if (typeof a === "undefined") {
     console.log("foo");
   }
   if (typeof b === "undefined") {
     console.log(b); // refernce error
     //..
   }
   let b;
 }



 // The a is not  declared, so typeof is the only safe way to check for its existance
 // or not. But typeof b throws the TDZ error because further down in the code there
 // happens to be a let b declaration..

 // Not it should be clearer why I insist that the let declarations should be at the
 // top of their scope. That totally aavoids the accidental errors of accessing
 // too early. It also makes it more xplicit when you look at the start of a block,
 // any block, what variables it contains.

 // Your blocks (if statements, while loops etc) don't have to share their original
 // behaviour with scoping behaviour.

 // This explicitness on your part, which is up to you to maintain with dicipline,
 // will save you lots of refactor headaches and footguns down the line.
*/

 // let + for
 // The only exception I'd make to the preference for the explicit form of let
 // declaration blocking is a let that appears in the header of for loop. The
 // reason may seem nuanced, but i belive it to be one of the more important ES6
 // features. Consider:

 var funcs = [];

 for (let i = 0; i < 5; i++) {
   funcs.push( function() {
     console.log( i );
   });
 }

funcs[3](); // 3

// The let i in the for header declares an i not just for the for loop itself, but
// it redeclares a new i for each iteration of the loop. That means that closures
// created inside the loop tieration close over those per-iteration variables the
// way you'd expect.

// If you tried that same snippet but with var i in the for loop header, you'd get
// 5  insteaad of 3, because there'd only be one i in the outer scope that was closed
// over, instead of a new i for each iteration's function to close over.
// You could also have accomplished the same thing slightly more verbosely:

var funcs = [];

for (var i = 0; i < 5; i++) {
  let j = i;
  funcs.push( function() {
    console.log(j);
  });
}
funcs[3](); // 3
