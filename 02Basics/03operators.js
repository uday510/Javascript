// TODO Discount = ((listPrice - sellingPrice) / listingPrice) * 100;


var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ( (listingPrice - sellingPrice) / listingPrice) * 100;

var displayDiscountPercent = Math.round(discountPercent);
console.log("Discount Percentage is: " + displayDiscountPercent + "% OFF");

var result = listingPrice > sellingPrice;

console.log(typeof result);

