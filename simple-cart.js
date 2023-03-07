const shoppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 3700 },
    { name: 'belt', price: 600 },
];

// create function.....
function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
        // console.log(product);
    }
    // return section..
    return sum;
};

// call the function.....
const expense = totalCost(shoppingCart);
console.log("Total expense today:", expense);