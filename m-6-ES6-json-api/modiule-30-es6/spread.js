const max=Math.max(12, 34, 45, 60, 20, 100, 112);
const numbers=[12, 23, 45, 60, 90, 100, 110, 200];
// const arrayMax=Math.max(numbers) 
const arrayMax=Math.max(...numbers)  // আগে তিনটা ডট দিলে এ্যারে থেকে মেক্স নাম্বার দিবে। 
console.log(numbers)
console.log(...numbers) ///  আগে তিনটা ডট দিলে শুধু নাম্বার দিবে:
console.log(arrayMax)

console.log(max)

// use spread operator to copy:

// const nums=[1, 34, 5, 6];

// const nums2=nums;

// nums2.push(12);
// console.log(nums)
// console.log(nums2)
// কম্পিউটার মেমোরি ২ টাতে ই রেফার করে দেয় তাই ২ যায়গায় পুশ হইছে। 

// const nums3=[nums2];

// console.log(nums3)

//  ...  তিনটা ডট মানে হলো স্প্রেড অপারেটর: (... কোন কিছুর আগে তিনটা ডট(.))

const friends=[4, 5, 6, 7];
const bondhu=friends;

const dosto=[...friends]; // copy kora hoyece: //spread operator korar karone sob golote bosce bt jeita te spread operator bosaic oita te push hoyni
friends.push(100);
console.log('dosto:',dosto);
console.log( 'friends:',friends);
console.log('bondhu', bondhu)

// advance:

const sonkha= [...friends, 999]; // add extra element while copy

console.log(sonkha)