const friends=['Sidrat', 'Safi', "Dalim", 'Farjana', 'miah', 'md'];

console.log(friends)
for(const friend of friends){
    console.log(friend)
}

for(let i=0; i<friends.length; i++){
    // console.log(i)
    console.log(friends[i], i)
}

const numbers=[12, 23, 34, 45, 56, 67, 23, 30, 40, 20, 123, 230];

for(let i=0; i<numbers.length; i++){
console.log(numbers[i]);
}

let i=0;
while(i<friends.length){
    console.log('friends list:', friends[i], i);
    i++;
}

let n=0;

while(n<numbers.length){
console.log(numbers[n]);
    n++;
}