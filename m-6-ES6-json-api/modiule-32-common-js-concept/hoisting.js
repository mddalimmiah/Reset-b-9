
// hoisting: var diye declare korle sobar opore niye jay tai hoisting
// 
// for( var i=1; i<5; i++){
//     console.log(i)
// }
for( let i=1; i<5; i++){
    console.log(i)
}
// console.log('for out side:', i)//var diye declare korar jonno outside a result dibe: ja hoisting
console.log('for out side:', i)//let diye out side error dibe 

