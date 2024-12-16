
// callback function

function greetings(greetingHandler, name){ //click kre f2 dile 2 ta tei aksathe edit hobe:
//   console.log(greetingHandler())
// ফাংশন এর মধ্যে প্রথম ফাংশন এর ২ টা প্যারামিটার  এর মধ্যে একটা প্যারামিটার দিছি  একটা ফাংশন 
greetingHandler(name); //প্যারামিটা নেম
}

// const name='Dalim Miah';

// const numbers=[34, 21, 20, 10]
// greetings(name)
// greetings(numbers)
// const laptop={name:'dell', price:50000};
function greetingHandler(name){ // ফাংশন প্যারামিটার দিছি নাম 
    console.log('good Morning', name);

    
}
function greetEvening(name){
    console.log('good evening', name)
    }

    function greetNight(name){
        console.log('Good Night', name)
    }
    function greetNight2(x){
        console.log('Good Night', x)
    }
greetings(greetingHandler, 'Safi')
greetings(greetingHandler, 'dalim')
greetings(greetingHandler, 'sidrat')
greetings(greetEvening, 'Muntaha');
greetings(greetNight, 'Salim');
greetings(greetNight2, 'Halim');

// already korci function er modday function er parameter hisebe function k call
// যেমন:
// document.getElementById('btn-clicked').addEventListener('click', function(){
//     console.log('btn clicked');
// })