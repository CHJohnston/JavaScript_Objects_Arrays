console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:The Sum of an Array \n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];
function arraySum(myArray) {
  let sum = 0;
  console.log("The following sum is calculated using a for loop");
  for (var i = 0; i < myArray.length; i++) {
    sum += myArray[i];
    console.log(`Value @ myArray[${i}] is ${myArray[i]}`);
  }
  console.log("The sum is", sum);

  console.log("The following sum is calculated using the forEach method");
  sum = 0;

  myArray.forEach((element, index) => {
    console.log(`Current index: ${index}, value ${element}`);
    sum += element;
  });
  return sum;
}

console.log("The Sum of the Array is ", arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:Favorite Book\n==========\n");
let favBook = {};
favBook.title = "N or M";
favBook.pages = 525;
favBook.readCount = 1;
console.log(favBook);

favBook.info = function () {
  return `${this.title} is my favorite book. It has ${this.pages} pages and has been read ${this.readCount} times.`;
};
console.log(favBook.info());

// Exercise 3: Reverse a String
console.log("Exercise 3: Reverse a String\n==========\n");
let sentence = "The quick brown fox jumps over the lazy dog";

const words1 = sentence.split(" ");
console.log(words1[3]); // expected output: "fox"

function reverseWords(sentence) {
  let result = [];
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split("");
    console.log(letters);
    letters.reverse();
    let reverseWord = letters.join("");
    result.push(reverseWord);
  }
  return result.join(" ");
}
console.log(reverseWords(sentence));

// Exercise 4: Parse a CSV
console.log("Exercise 4: Parse a CSV\n==========\n");

//csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
//Headers: |name |age
//Row ex:  |Frodo|50

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(FileData) {
  //Split data into rows
  let rows = FileData.split("\n"); //Create rows
  let headers = rows[0].split(","); //headerRow array =["name","age"]

  let result = []; // create empty array for result

  //Iterate over every content row
  for (let i = 1; i < rows.length; i++) {
    let obj = {};
    let data = rows[i].split(",");
    data.forEach((value, index) => {
      let headerName = headers[index]; //"name","age"
      obj[headerName] = value;
    });
    result.push(obj);
  }
  return result;
}
console.log(csvConverter(csvData));

console.log("Extra Examples of HOF\n==========\n");
// High-Order Function Examples

console.log("Using For Loop");
let veggies = ["eggplant", "tomatoe", "potato", "celery"];
for (let i = 0; i < veggies.length; i++) {
  console.log(veggies[i]);
}
console.log("For In Loop");
//For/in
for (let property in veggies) {
  console.log(veggies[property]);
}
console.log("For Of Loop");
//For/in
for (let value of veggies) {
  console.log(value);
}

console.log("For Each Loop");
//For/in
veggies.forEach((element) => console.log(element));

//Sort Arrary
console.log("sort method using copy");
let sortVeggies = Array.from(veggies);
sortVeggies.sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortVeggies);

//Sort Arrary
console.log("sort method");

const sortVeggies1 = veggies.sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortVeggies1);
