const glass={name:'glass', color:'golden', price:12, isClean:true};

console.log(glass);

const keys=Object.keys(glass); 
// ‍কী দিবে সকল প্রপার্টি গুলো ই অবজেক্ট কী;
// output: [ 'name', 'color', 'price', 'isClean' ] object er key
console.log(keys)

const values=Object.values(glass);
//  অবজেক্ট ভ্যালু হচ্ছে সকল প্রপ্রার্টির ভ্যালু হচ্ছে অবজেক্ট ভ্যালূ
// output: [ 'glass', 'golden', 12, true ]

console.log(values)

const pair=Object.entries(glass); // কী এবং ভ্যালু ২ টা ই পাবো।

// array of array অথবা  two dimensional array 
/* output: 
[
  [ 'name', 'glass' ],
  [ 'color', 'golden' ],
  [ 'price', 12 ],
  [ 'isClean', true ]
]
*/
console.log(pair)

// অবজেক্ট থেকে ডিলেট করার জন্য:

//  delete glass.isClean; //delete done
//  console.log(glass)

// advance:
// destructuring diye delete:

const {isClean, ...shortGlass} =glass; // prothom ta delete hobe ... diye oita r akta copy object hobe shortGlass name

console.log(shortGlass)

// freeze ( কোন কিছু পরিবর্তন করা যাবে না।)

Object.freeze(glass);
glass.price=500;
delete glass.name;

glass.source='Made in Bangladesh'; // freeze korar karone eta add hobe na 

console.log(glass);

// object seal (নতুন প্রপার্টিএ্যাড করা যাবে না বাট প্রপার্টির ভ্যালু পরিবর্তন করা যাবে)
Object.seal(glass);
glass.price=500;
glass.color='yellow';
console.log(glass)