// slice kon index theke soro korbo r kon index porjonto nibo tar ager ta porjonto nibe ( jmon (2, 5) mane holo 2 theke 4 porjonot nibe)

const address='MohakhaliTBGAte';

const part=address.slice(4,9);
console.log(part)

const sentence='I am a good and hardworking student';
// split() mane vag kora ba alada kora
console.log(sentence.split(' '))
console.log(sentence.split('a'))

const friendsStr='Dalim, Farjana, Muntaha, Sidratul, Safi, Miah, Sinna';
console.log(friendsStr)
const friends=friendsStr.split(',')
console.log(friends)

const realFriends=[
    'Dalim',
    ' Farjana',
    ' Muntaha',
    ' Sidratul',
    ' Safi',
    ' Miah',
    ' Sinna'
  ];

  console.log(realFriends)
  console.log(realFriends.join(' -'))