const biriyaniKhor=['dalim', 'safi', 'sidrat', 'safi', 'dalim', 'moni', 'abul', 'babul','abul'];
const numbers=[12, 23, 34, 1, 2, 12, 91, 34, 5, 20];

function noDuplicate(array){
    // console.log(array);
    const unique=[];
    for(const item of array){
        // console.log(item)
        if( unique.includes(item) ===false){
            unique.push(item)
        }
    }
    return unique;
}
const uniqueArray=noDuplicate(biriyaniKhor);
console.log(uniqueArray)