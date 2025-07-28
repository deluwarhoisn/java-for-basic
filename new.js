// const ageMoney = 2000;
// const extraMoney = 50;

// let totalMoney = ageMoney + extraMoney;
// const sariPrice = 4000;
// const curiprice = 100;
// const makeupBoxPrice = 1000;
// const bagPrice = 3000;

// if (totalMoney >= sariPrice) {
//     console.log('Ami kinbo sariy${sariPrice}');
//     totalMoney = totalMoney - sariPrice;
// }

// else if (totalMoney >= bagprice){
//     console.log('ami kinbo bag ${bagprice}');
//     totalMoney = totalMoney - bagPrice;
// }
// else if (totalMoney > makeupBoxPrice){
//     console.log('ami kinbo makeup Box ${makeupBoxPrice}');
//     totalMoney = totalMoney - makeupBoxPric;
// }
// else{
//     console.log('ami kinbo bangle ${curiPrice}');
//     totalMoney = totalMoney - curiprice;
// }
// console.log(`Amar kase ache ${totalMoney}`);


const ageMoney = 2000;
const extraMoney = 50;

let totalMoney = ageMoney + extraMoney;

const sariPrice = 4000;
const curiPrice = 100;
const makeupBoxPrice = 1000;
const bagPrice = 3000;

if (totalMoney > sariPrice) {
    console.log(`Ami kinbo sari ${sariPrice}`);
    totalMoney = totalMoney - sariPrice;
} else if (totalMoney > bagPrice) {
    console.log(`Ami kinbo bag ${bagPrice}`);
    totalMoney = totalMoney - bagPrice;
} else if (totalMoney > makeupBoxPrice) {
    console.log(`Ami kinbo makeup box ${makeupBoxPrice}`);
    totalMoney = totalMoney - makeupBoxPrice;
} else {
    console.log(`Ami kinbo bangle ${curiPrice}`);
    totalMoney = totalMoney - curiPrice;
}

console.log(`Amar kase ache ${totalMoney}`);