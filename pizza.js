module.exports = function pizza(){

var smallPizza  = 47;
var mediumPizza = 85;
var largePizza  = 110;

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
    smallTotal += smallPizza;
    grandtotal += smallPizza;
}

function updateTotalMedium(){
    mediumTotal += mediumPizza;
    grandtotal += mediumPizza;
}

function updateTotalLarge(){
    largeTotal += largePizza;
    grandtotal += largePizza;
}

function oneDownSmall(){
if (smallTotal >= 0){
    return  smallPizza--;
}else{
    return smallTotal = 0;
}

}

function oneDownMedium(){
    if (mediumTotal >= 0){
        return  mediumPizza--
    }else{
        return mediumPizza = 0;
    }
}

function oneDownLarge(){
    if (largeTotal >= 0){
        return  largePizza--
    }else{
        return largePizza = 0;
    }
}

function totalCost(){
    return grandtotal
}

function orderPizza(pizzaSize){
    smallTotal = Number(pizzaSize.smallTotal),
    mediumTotal = Number(pizzaSize.mediumTotal)
    largeTotal = Number(pizzaSize.largeTotal)

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