//  ১ টা এ্যারেতে কয়টা বুলিয়ান ভ্যালু আছে তা কাউন্ট করে দেখানো।

const x=[1, 2, 3,4, true, false, NaN, true, {name: 'dalim', address:'cumilla'}]

function countBooleanArray(array){

    if(!Array.isArray(array)){
        return 'please provide valid array';
    }
    let count=0;
    for(const item of array){
        if(typeof item==='boolean'){
            count++;
        }
    }
    return count;
}

const result=countBooleanArray(x);
console.log(result);