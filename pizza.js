module.exports = function pizzaFactory(){

var smallPizza  = 47;
var mediumpizza = 85;
var largePizza  = 110;


var grandtotal = 0;

function orderSmall(){
    return smallPizza;
} 

function orderMedium(){
    return mediumpizza;
} 

function orderLarge(){
    return largePizza
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
    orderLarge

}

}