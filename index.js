Array.prototype.sumOfElementsForLoop = function () {
  var sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
};

Array.prototype.sumOfElementsDoWhile = function () {
  var sum = 0;
  var i = 0;
  do {
    sum += this[i];
    i++;
  } while (this[i]);
  return sum;
};

Array.prototype.sumOfElementsWhileLoop = function () {
  var sum = 0;
  var i = 0;
  while (this[i]) {
    sum += this[i];
    i++;
  }
  return sum;
};

var array = [1, 5, 6, 8, 9, 10, 21];
var array1 = [2, 4, 10, 18, 90, 510, 201];

console.log("Array: ", array);

console.log(
  "---------------------------------------------------------------------------------"
);
console.log(
  "Starting off with some user defined prototype methods on the array.............."
);

console.log("Sum of Array elements:");
console.log("Using method with For loop:", array.sumOfElementsForLoop());
console.log("Using method with Do While loop:", array.sumOfElementsDoWhile());
console.log("Using method with While loop:", array.sumOfElementsWhileLoop());

console.log(
  "---------------------------------------------------------------------------------"
);
console.log("Now some built in prototype methods...............");

console.log("Using at() method to get element at index 3 in the array");
console.log(`Element at index 3: ${array.at(3)}`);
console.log(
  "---------------------------------------------------------------------------------"
);

console.log("Using concat() method to concat two arrays array and array1");
console.log("array: ", array);
console.log("array1: ", array1);
console.log("Concatenated array:", array.concat(array1));

console.log(
  "---------------------------------------------------------------------------------"
);

console.log("Using reverse() method to reverse array");
console.log("array: ", array);
console.log("Reversed array: ", array.reverse());

console.log(
  "---------------------------------------------------------------------------------"
);

console.log("Using fill() method to fill array with 1 from pos 2 to 5");
array.fill(5, 2, 5);
console.log(array);

console.log(
  "---------------------------------------------------------------------------------"
);

console.log("Using Array.prototype.length() to get the length of an array");
console.log("Length of array: ", array.length);
console.log("Length of array1: ", array1.length);

console.log(
  "---------------------------------------------------------------------------------"
);

console.log("using filter() method to filter numbers greater than 8 in array");
console.log("Array: ", array);
var arrOut = array.filter((num) => {
  return num > 8;
});
console.log(arrOut);

console.log(
  "---------------------------------------------------------------------------------"
);

console.log(
  "using find() method to get first occurence of numbers greater than 5 in array"
);
console.log("Array: ", array);
var arrOut = array.find((num) => {
  return num > 5;
});
console.log(arrOut);

console.log(
  "---------------------------------------------------------------------------------"
);

console.log(
  "using findIndex() method to get index of first occurence of numbers less than 10 in array"
);
console.log("Array: ", array);
var arrOut = array.findIndex((num) => {
  return num < 10;
});
console.log(arrOut);

console.log(
  "---------------------------------------------------------------------------------"
);

console.log(
  "using findIndex() method to get index of first occurence of numbers less than 10 in array"
);
console.log("Array: ", array);
var arrOut = array.findIndex((num) => {
  return num < 10;
});

console.log(
  "---------------------------------------------------------------------------------"
);

console.log(
  "using map() method to generate a new array from array and incrementing each element by 3"
);
console.log("Array: ", array);
var arrOut = array.map((num) => {
  return num + 3;
});

array = arrOut;
console.log(arrOut);

console.log(
  "---------------------------------------------------------------------------------"
);

console.log("using slice() method to slice array from index 2 to index 5");
console.log("Array: ", array);
var arrOut = array.slice(2, 5);
console.log(arrOut);

console.log(
  "---------------------------------------------------------------------------------"
);

console.log(
  "using forEach() to get each array element and display individually"
);
console.log("Array: ", array);
array.forEach((num) => {
  console.log(num);
});

console.log(
  "---------------------------------------------------------------------------------"
);
