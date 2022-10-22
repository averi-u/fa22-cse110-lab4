// Question 5
// function discountPrices (prices, discount) {
//     let discounted = [];
//     let finalPrice = 0;
//     for (let i = 0; i < prices.length; i++) {
//         let discountedPrice = prices[i] * (1 - discount)
//         finalPrice = Math.round (discountedPrice * 100) / 100;
//         discounted.push (finalPrice);
//     }

//     // console.log(i);
//     // console.log(discountedPrice);
//     // console.log(finalPrice);
//     return discounted;
// }

// console.log(discountPrices ([100, 200, 300], 0.5));

// // Question 9
// function discountPrices (prices, discount) {
//     const discounted = [];
//     const length = prices.length;
//     for (let i = 0; i < length; i++) {
//         const discountedPrice = prices[i] * (1 - discount);
//         discounted.push (discountedPrice);
//     }
//     // console.log(i);
//     // console. log(length);

//     return discounted;
// }
// console.log(discountPrices([100, 200, 300], 0.5));



// console.log('3'+null);


function modifyArray (array, callback) {
    const newArr = [];
    for (let i = 0; i < array. length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function doSomething (num) {
    return num * 2;
}
console.log(modifyArray([1,2,3], doSomething));

