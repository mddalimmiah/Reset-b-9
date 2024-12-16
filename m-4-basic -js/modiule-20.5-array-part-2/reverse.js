const numbers=[1, 2, 3, 4, 5, 6, 7, 8, 23, 34, 45, 56, 67,78, 89, 90, 200];

console.log(numbers);
// const reversed=numbers.reverse();

// console.log(reversed);

// const rev_numbers=[];

// for(i=0; i<numbers.length; i++){
//     console.log(numbers[i]);

//     rev_numbers.unshift(numbers[i]);
    
// }
// console.log(rev_numbers);

const revNumbers=[];

for(const num of numbers){
    console.log(num);
    revNumbers.unshift(num)

}
console.log(revNumbers)
const rev_rev_numbers=[];
for(let i=numbers.length -1; i>=0; i--){
    const nm=numbers[i];
    rev_rev_numbers.push(nm);
    // console.log('reverse array numbers is:',nm, 'Index number is:', i)
}
console.log('reverse array numbers is:',rev_rev_numbers);