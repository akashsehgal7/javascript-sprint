function discountcal(discount){
    return function(price){
    return price - (price * (discount / 100));

    }
}

 let discounter = discountcal(30);
 let ten = discountcal(10);
 let twenty = discountcal(20);
 console.log(discounter(200));
 console.log(ten(200));
 console.log(twenty(200));