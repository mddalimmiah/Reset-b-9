const numbers=[12, 23, 34, 45, 56, 24, 20, 30, 40];

const total=numbers.reduce( (previous, current) => previous + current, 0); // calback Function a  ২ টা প্যারামিটার দিতে হবে একটা পূর্বের আরএকটা কারেন্ট, এর পর যা করতে হবে তা ..আর ইনিশিয়াল রেজাল্ট শূণ্য দিতে হবে
console.log(total);

const sum=numbers.reduce((p, c) => p + c, 0);
console.log('sum:',sum)