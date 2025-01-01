const products = [
    { id: 1, title: "Product A", quantity: 2, price: 200 },
    { id: 2, title: "Product B", quantity: 1, price: 300 },
    { id: 3, title: "Product C", quantity: 4, price: 240 },
    ];

function Cart(products, userId){
    this.products = products;
    this.userId = userId;
    // function getTotal1(){
    //     let getTotal1 = 0;
    //     for(let i=0; i < )
    //  }
}
Cart.prototype.getTotal= function(){
    return products.reduce((acc, cur) =>{
        return acc += cur.price * cur.quantity;
     }, 0)
};

    const cartOfHoang = new Cart(products, "123");
    const cartOfThang = new Cart([{id:5, title: "tomato", price:1, quantity:4}], "456");
    console.log(cartOfHoang.getTotal());
