const pizzas = [
  {name: "Pepperoni", toppings: ['peperoni']}
]

const mappedPizzas = pizzas.map( (pizza) => {
  return pizza.name.toUpperCase()
})

console.log(mappedPizzas);