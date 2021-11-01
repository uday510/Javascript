// D = (((L - S) / L) * 100 );


var sellingPrice =  199;
var listPrice = 799;

var discountPercent = ((listPrice - sellingPrice) / listPrice ) * 100;


console.log("Discount percentage is : " + discountPercent );

displayDiscountPercant = Math.round(discountPercent);

console.log("Discount percentage is : " + displayDiscountPercant + "% off");

var result = listPrice > sellingPrice;

console.log(typeof result);