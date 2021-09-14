module.exports = function pizza(){

var smallPizzaPrice  = 47;
var mediumPizzaPrice = 85;
var largePizzaPrice  = 110;

var smallTotal = 0;
var mediumTotal = 0;
var largeTotal = 0;
var grandtotal = 0;

function orderSmall(){
    return smallTotal;
} 

function orderMedium(){
    return mediumTotal;
} 

function orderLarge(){
    return largeTotal;
}

function updateTotalSmall(){
    smallTotal += smallPizzaPrice;
    grandtotal += smallPizzaPrice;
}

function updateTotalMedium(){
    mediumTotal += mediumPizzaPrice;
    grandtotal += mediumPizzaPrice;
}

function updateTotalLarge(){
    largeTotal += largePizzaPrice;
    grandtotal += largePizzaPrice;
}

function oneDownSmall(){

    if (smallTotal > 0){
        smallTotal = smallTotal - smallPizzaPrice;
    }else{
        smallTotal = 0;
    }
    return smallTotal;
}

function oneDownMedium(){
    if (mediumTotal > 0){
        mediumTotal = mediumTotal - mediumPizzaPrice;
    }else{
         mediumTotal = 0;
    }
    return mediumTotal;
}

function oneDownLarge(){
    if (largeTotal >= 0){
        largeTotal = largeTotal- largePizzaPrice;
    }else{
         largePizzaPrice = 0;
    }
    return largeTotal;
}

function totalCost(){
    return grandtotal
}

function orderPizza(){
   smallTotal = '';
   mediumTotal = '',
   largeTotal = ''
   grandtotal = '';

}


return{
    orderPizza,
    orderSmall,
    orderMedium,
    orderLarge,
    updateTotalMedium,
    updateTotalSmall,
    updateTotalLarge,
    totalCost,
    oneDownSmall,
    oneDownMedium,
    oneDownLarge

}

}