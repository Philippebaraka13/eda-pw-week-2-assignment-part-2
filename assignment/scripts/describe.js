// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we make a variable called name and set it equal to Dane as a name.
// And set a condition that is if the name in the variable is Marry, the console.log 'Hi, Marry,
//but the variable name is not equal to Marry than the console will log How do you do ? because 
// the second condition was if is not equal log How do you do .
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// we create two variable (secret and code), we set the variable code to 123 which is number.
// we set the condotions that is if the variable code is exatcly 123, the variable secret will 
// have a string of 'super', and the code is equal to 123, so the var secret has the string of super and the variable code
// will multiply his number by 2.
//the second condition is if the number that we set for the variable code is superior to
// 250,the variable secret will have a string 'duper' and the console.log secret. But
// the code is not superior to 250, therefore, the condition will not be apply. 
//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we created three varaible(isStudent, age, and zip) we set the variable isStudent to true, age
// to 34, and zip to 55407. we set up the contidions. first, if variable isStudent is true and 
// the zip is superior to 80000, the console.log 'You're a student on the West Coast!'.
//second condition is if the variable isStudent is fasle or the age is inferior to 30
// the console.log 'what are your hobbies?'.
// the third one if the varaiable isStudent is true the console.log ' welcome to Prime'
// otherwise console.log 'how about the weather?'. so, the first condition will not apply because
// the zip string is less than 80000, and the second condition will not work to because 
// the the value of isStudent is true and the age value is superior, and third condition will log welcome
//to prime because the condition is true, the last on will log out how about the weather if any of those 
// doesnt apply. 
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// the variable colorOne is red and colorTwo is blue, but the instruction say colorOne is blue and
// colorTwo need to be equal to red. The condititon is if the mix is true then colorOne will have the 
// string purple , since the mix is true, therefore the colorOne will become purple.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// FIX- the condition is set with or, but the instruction say that and, Should be 
// if(temp > 39 && time >= 4).
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.
//
/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  // Fix- the console need to log enter since the condition is correct
  // need to be console.log('enter');
  console.log('no entry');
} else {
  console.log('enter');
}
*/
//

