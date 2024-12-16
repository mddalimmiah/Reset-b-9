/*

Bus=50 jon kore jatri gele bus charbe
micro= 15 jon
rikshavara=20 taka

total borjatri=234 jon

bus (4)=200 remaining=34 jon
micro(2)=30 remaining=4 jon
riksah (4)= 4* 20=80 taka vara;
*/

function borjatriCost(peoples){
    const bus=50;
    const micro=15;
    const rikshawCost=20;
    const remainingAfterBus=peoples % bus;
    // return remainingAfterBus;
    const remainingAfterMicro=remainingAfterBus % micro;
    // return remainingAfterMicro;
    const rikshawaCost=remainingAfterMicro * rikshawCost;
    return rikshawaCost;
}

const result=borjatriCost(234);
console.log(result)