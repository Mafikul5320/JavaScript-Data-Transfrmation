const products = [
    { id: "p101", name: "Laptop", price: 55000, quantity: 5, category: "electronics" },
    { id: "p102", name: "Headphone", price: 2500, quantity: 20, category: "electronics" },
    { id: "p202", name: "Jeans Pant", price: 1200, quantity: 25, category: "fashion" },
    { id: "p203", name: "Jacket", price: 3500, quantity: 10, category: "fashion" },
    { id: "p301", name: "Mug", price: 200, quantity: 40, category: "home" },
    { id: "p302", name: "Water Bottle", price: 300, quantity: 60, category: "home" },
    { id: "p402", name: "Notebook", price: 40, quantity: 200, category: "books" },
    { id: "p403", name: "Pen", price: 10, quantity: 500, category: "books" },
];

const totalPrice = products.reduce((subtotal, item) => { return subtotal + (item.price * item.quantity) }, 0);

// console.log(totalPrice);

const MinPrice = products.reduce((MinPrice, product) => {
    if (product.price > MinPrice.price) {
        return MinPrice
    };
    return product;
}, products[0]);

// console.log(MinPrice);
