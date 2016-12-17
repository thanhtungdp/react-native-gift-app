import numeral from 'numeral';

export function totalPrice(products, autoFormat = false){
    let price = 0;
    products.map(product => {
        price += product.price;
        return {}
    });
    if(!autoFormat){
        return price;
    }
    return formatPrice(price);
}

export function formatPrice(price){
    let priceNumeral = numeral(price);
    return priceNumeral.format('0,0') + 'VND';
}

export default {
    totalPrice,
    formatPrice
}