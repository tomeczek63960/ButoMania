const calculateTotalPrice = (arr) =>{
    let total = 0;

    arr.forEach(item => {
        total += item.price * item.amountInBasket;
    });

    return total;
}

export default calculateTotalPrice;