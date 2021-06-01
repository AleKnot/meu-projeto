const pizzaria = require('./funcoes.js');

console.log('Pizzaria DH')

//console.log(pizzaria.listarTodasAsPizzas())


pizzaria.adicionarPizza("Marguerita","Salgada",28.20);
// pizzariaDH.adicionarPizza("Frango com Catupery","Salgada",24.80);

//console.log(pizzaria.listarTodasAsPizzas())
pizzaria.listarTodasAsPizzas()

//funcao que nos passavamos o sabor e retorna o objeto dessa pizza


const t = pizzaria.procurarPizzaPeloNome("Marguerita")
console.log(t)