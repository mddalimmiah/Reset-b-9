
// scope hocce ( ফাংশন এর ভিতরে যা করি না কেন বাহিরে থেকে একসেস করতে পারবো না তাই স্কোপ)

function add (a, b){
    const total=a+b;
    if(b>5){
        const sum=25 + a+b;
    }
    else{
        const sum=5+a+b;
        var current=sum;
    }
    console.log(a, b)
    
    console.log(current)
    return total;
}
// console.log(a, b)

add(5, 3)