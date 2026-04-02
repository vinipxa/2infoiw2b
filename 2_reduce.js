// const numeros = [99, 56, 34, 45, 76];
// const soma = numeros.reduce((acumulador, numero, indice, array) => {
//     console.log(`Acumulador: ${acumulador}, Número: ${numero}, Índice: ${indice}, Array Completo: ${array}`);
//     return acumulador + numero;
// }, 0);

// console.log(soma);

const produtos = [
    {id: 1, nome: 'Camisa', preco: 100.00, quantidade: 10, desconto: true},
    {id: 2, nome: 'Calça', preco: 49.99, quantidade: 5, desconto: false},
    {id: 3, nome: 'Tênis', preco: 89.99, quantidade: 2, desconto: true},
    {id: 4, nome: 'Boné', preco: 19.99, quantidade: 20, desconto: false},
    {id: 5, nome: 'Meia', preco: 9.99, quantidade: 50, desconto: true},
    {id: 6, nome: 'Jaqueta', preco: 199.99, quantidade: 3, desconto: false},
];

const totalFaturamento = produtos.reduce((acumulador, produto) => {
    const desconto = produto.desconto ? 0.1 : 0;
    const valorComDesconto = produto.preco * (1 - desconto);
    return acumulador + (valorComDesconto * produto.quantidade);
}, 0);

console.log(`Faturamento totl dos produtos com desconto:${
    totalFaturamento.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
}`);