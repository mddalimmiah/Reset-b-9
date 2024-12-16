const friends=['dalim', 'farjana', 'sidrat', 'safi', 'md. dalim miah', " islam"];

console.log(friends)

console.log(friends.includes('Dalim'))
console.log(friends.includes('dalim'))
console.log(friends.includes('safi'))
if(friends.includes('Dalim')){
    console.log('find dalim')
}
else{
    console.log('please add dalim')
}
