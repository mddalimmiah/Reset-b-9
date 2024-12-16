const numbers=[10, 3, 4, 20, 100];

const double=numbers.map(num => num * 2);
console.log(double);

const fiveAdded=numbers.map(num => num +5 );

console.log(fiveAdded);

const halves=numbers.map(num => num / 2);
console.log(halves)

const friends=['Dalim', 'Sidrat', 'Farjana', 'Salim', 'Halim', "Merina", 'Rokon'];

const lengths=friends.map(friend => friend.length);
console.log(lengths);

const firstLetter=friends.map(friend => friend[0]);
console.log(firstLetter);