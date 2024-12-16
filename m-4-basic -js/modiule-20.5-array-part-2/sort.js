const friends=['Farjana', "Sidrat", "Dalim", "Safiiiii", "Amr", "Moni"];
console.log(friends);
const sortedFriends=friends.sort();
console.log(sortedFriends);

const numbers=[1, 3, 5,12, 7, 2, 9, 8];

// const asc=numbers.sort(); // eta poriporno kaj kore na 
// const asc=numbers.sort(function(a, b){return a - b}); // eta poriporno kaj kore
const asc=[...numbers].sort(function(a, b){return a - b}); // eta poriporno kaj kore
const dsc=[...numbers].sort(function(a, b){return b - a}); // eta poriporno kaj kore
//thik vabe asar jonno variabel er aga bracket notation diye ... dite hobe 3 ta
console.log(asc)
console.log(dsc)