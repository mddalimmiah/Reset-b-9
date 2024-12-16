const school='Raj Uk Uttara Model School';

console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject='Chemistry';
const book='chemistry';

if(subject.toLowerCase() === book.toLowerCase()){

    console.log('i am read the book');
}
else{
    console.log('this is not same here');
}

const drink=' water';

const liquid='   water';

// white space remove korar jonno .trim() use kora hoy
if(drink.trim()===liquid.trim()){

    console.log('i drink water');
}
else{
    console.log('this is not water .. u can not drink it')
}