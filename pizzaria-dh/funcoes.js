//importar express
const express = require('express')
const app = express()


//arquivo destinado a armazenar as funções do sistema
const pizzas = require('./database/pizzas.json')

//adicionar

function adicionarPizza(sabor,categoria,preco){
    const pizzaNova = {
        id: pizzas[pizzas.length-1].id +1,
        sabor,
        categoria,
        preco
        // sabor: sabor,
        // categoria: categoria,
        // preco: preco,
    }
    pizzas.push(pizzaNova)

}

const procurarPizzaPeloNome = function (nomePizza) {
    const pizzaEncontrada = pizzas.find((pizza) => pizza.sabor == nomePizza);

    if(!pizzaEncontrada) return `A pizza sabor ${nomePizza} não foi encontrada`

    return pizzaEncontrada
}

//editar

//excluir

//exibirPorID

//exibirTodos

// const listarTodasAsPizzas = () => {
//     let conteudo = [];

//     //da para criar a função dentro do for each
//     //ou criar uma funcao fora e chamar no forEach
//     pizzas.forEach((pizza) => {
//         conteudo +=  `
//                     id: ${pizza.id},
//                     Sabor: ${pizza.sabor}
//                     Categoria: ${pizza.categoria}
//                     Preço: ${pizza.preco}
//                     `
//     });
//     return conteudo;

// };


function listarTodasAsPizzas(){
    let conteudo = [];

    //da para criar a função dentro do for each
    //ou criar uma funcao fora e chamar no forEach
    pizzas.forEach((pizza) => {
        conteudo +=  `
                    id: ${pizza.id},
                    Sabor: ${pizza.sabor}
                    Categoria: ${pizza.categoria}
                    Preço: ${pizza.preco}
                    `
    });
    //return conteudo;
    console.log(conteudo)

};


app.get('/pizzas', (req, res) => {
    return res.json(pizzas)

})


app.listen(3000, () => console.log('O Servidor ta on pae!!!'))

module.exports = {
    listarTodasAsPizzas,
    adicionarPizza,
    procurarPizzaPeloNome
    

}