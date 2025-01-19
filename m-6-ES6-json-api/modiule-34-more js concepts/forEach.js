
const array=[10,20,13,45,80, 100];

// for(const item of array){
//     console.log(item)
// }

// array.forEach((item) => {
//     console.log(item)
// })
array.forEach((item, index, a) => { //item ekta koe nibe a mane whole array ta dibe
    console.log(item, index, a)
})

/*
output: 
10 0 [ 10, 20, 13, 45, 80, 100 ]
20 1 [ 10, 20, 13, 45, 80, 100 ]
13 2 [ 10, 20, 13, 45, 80, 100 ]
45 3 [ 10, 20, 13, 45, 80, 100 ]
80 4 [ 10, 20, 13, 45, 80, 100 ]
100 5 [ 10, 20, 13, 45, 80, 100 ]
*/