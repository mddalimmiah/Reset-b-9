
//   filter:  ফিল্টার হচ্ছে কোন একটা শর্তের উপর বেস করে কোন কিছু বাছাই করে নেয়াই ফিল্টার:
// filter select the elements based on a condition and returns an array with the elements that fulfilled the condition.
const numbers=[12, 1, 2, 3, 4, 5];

const playersHeight=[75, 70, 60, 67, 85,87, 71, 80];

// const selected=playersHeight.filter(p => p >70);
// const selected=playersHeight.filter(p => p >80);
// const selected=playersHeight.filter(p => p >90);
// const selected=playersHeight.filter(p => p >50);
// const selected=playersHeight.filter(p => p %2 ===1);
const selected=playersHeight.filter(p => p %2 ===0);

console.log(selected);

const friends=['Dalim', 'Sidrat', 'Farjana', 'Salim', 'Halim', "Merina", 'Rokon', 'tom'];

// const oddFriends=friends.filter(friend => friend.length > 4);
// const oddFriends=friends.filter(friend => friend.length %2 ===1);
const oddFriends=friends.filter(friend => friend.length %2 ===0);
console.log(oddFriends)