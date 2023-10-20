// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const lucyBouffiou = {
  firstName: 'Lucy',
  lastName: 'Bouffiou',
  'favorite food': 'Oysters'
}


const kyleCreek = {
  firstName: 'Kyle',
  lastName: 'Creek',
  'favorite food': 'Pizza',
  bestFriend: lucyBouffiou,
}

// 2. console.log best friend's firstName and your favorite food
console.log("Kyle Best Friend:", kyleCreek.bestFriend.firstName);
console.log("Kyle Favorite Food:", kyleCreek['favorite food']);


// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X


const arr = [
  ["-", "O", "-"],
  ["-", "X", "O"],
  ["X", "-", "X"]
];
//console.log(arr[0]);
//console.log(arr[1]);
//console.log(arr[2]);
// 4. After the array is created, 'O' claims the top right square.
// Update that value.
arr[0][2] = "O";


// 5. Log the grid to the console.
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
let myEmail = "foo@bar.baz";
let testExp = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/
console.log(testExp.test(myEmail));

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';

// Convert the STring Value into three Distinct List Values
const assignmentDateList = assignmentDate.split("/");

// Assign the Values and Convert them into integers. 
let month = parseInt(assignmentDateList[0]);
let day = parseInt(assignmentDateList[1]);
let year = parseInt(assignmentDateList[2]);

// Create a Date Object of the Date

const dateObject = new Date(year, (month-1), day);
console.log("Step 7 Date:", dateObject);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
let dueDate = new Date(dateObject.setDate(dateObject.getDate() + 7));
console.log("Step 8 Date:", dueDate);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help

// ONly utilize the values of the Due Date and create a HTML Content
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
// Assign the Values to Variables for the Dyanmic String Output. 
let htmlDay = dueDate.getDate();
let htmlMonth = months[dueDate.getMonth()];
let htmlYear = dueDate.getFullYear();

let htmlTime = `<time datetime="YYYY-MM-DD">${htmlMonth} ${htmlDay}, ${htmlYear}</time>`

// 10. log this value using console.log
console.log(htmlTime);
