// const numeros = [10, 56, 23, 45, 78, 12];

// console.log(numeros[3]);

// for (let i = 0; i < numeros.length; i++){
//     console.log(numeros[i]);
// }

const produtos = [
    {id: 1, nome: 'Camisa', preco: 100.00, quantidade: 10, desconto: true},
    {id: 2, nome: 'Calça', preco: 49.99, quantidade: 5, desconto: false},
    {id: 3, nome: 'Tênis', preco: 89.99, quantidade: 2, desconto: true},
    {id: 4, nome: 'Boné', preco: 19.99, quantidade: 20, desconto: false},
    {id: 5, nome: 'Meia', preco: 9.99, quantidade: 50, desconto: true},
    {id: 6, nome: 'Jaqueta', preco: 199.99, quantidade: 3, desconto: false},
];
for (let i = 0; i < produtos.length; i++) {
    console.log(`
        Produto: ${produtos[i].nome},
        Preço: R$${produtos[i].preco.toFixed(2)},
        Quantidade: ${produtos[i].quatidade},
        Desconto: ${produtos[i].desconto ? 'Sim' : 'Não'}
        `);
};