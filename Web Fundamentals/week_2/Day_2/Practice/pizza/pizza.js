function pizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza = {};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;
    return pizza;
}

var pizza1=pizzaOven("deep dish","tradoitional",["mozzarella"],["pepperoni","sausage"]);
console.log(pizza1);

var pizza2=pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
console.log(pizza2);


var pizza3=pizzaOven("yeast","italian", "parmeciano", "pepperoni");
console.log(pizza3);

var pizza4=pizzaOven("arabiatta", "veggies", "mozarella", "mushrooms");
console.log(pizza4);