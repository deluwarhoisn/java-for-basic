const price = 2000;
if (price >= 5000){
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log (payAmount);

}

else if (price >= 60){
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (age >= 50){
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (age >= 40){
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}